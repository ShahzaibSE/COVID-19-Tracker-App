import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl, Select, makeStyles, Typography, Grid} from "@material-ui/core"
import cx from "classnames"
// CSS.
import styles from "./CountryPicker.module.scss"
// API.
import {getCountries} from "./../../api/index.api"

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    view_type_selector_container: {
      minWidth: 150
    }
  }));

export const CountryPicker = ({handleCountryChange, handleViewType}) => {
    const [countries, setCountry] = useState([])
    const available_view_types = ["Bar","Pie"]
    const [view_types, setViewType] = useState(available_view_types)
    const classes = useStyles()
    //
    const handleChange = (event) => {
        handleCountryChange(event.target.value)
    }
    const handle_view_type_change = (event) => {
      console.log(event.target.value)
    }
    useEffect(()=>{
        const fetchedCountries = async () => {
            setCountry(await getCountries())
        }
        //
        fetchedCountries()
        console.log("Fetched Countries")
        console.log(countries)
    },[]) // If keys are changed then state will be updated.
    //
     return (
       <div> 
            <FormControl className={classes.formControl}>
              {/* <Grid container> */}
                {/* <Grid item xs={4}> */}
                  <Typography variant="h6" gutterBottom>
                      <strong>Select Country</strong>
                  </Typography>
                  <Select defaultValue="Global" onChange={(e)=>handleCountryChange(e.target.value)} placeholder="Select Country"> 
                    <option value="">Global</option>
                    {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                  </Select>
                {/* </Grid> */}
                {/* <Grid item xs={4}>
                  <Typography variant="h6" gutterBottom>
                      <strong>View Type</strong>
                  </Typography>
                  <Select defaultValue="Global" placeholder="View Type"> 
                    <option value="">Global</option>
                  </Select>
                </Grid> */}
              {/* </Grid>   */}
            </FormControl>
            <FormControl className={cx(classes.formControl, classes.view_type_selector_container)}>
            <Typography variant="h6" gutterBottom>
                      <strong>View Type</strong>
                  </Typography>
                  <Select placeholder="View Type" onChange={(e) => handleViewType(e.target.value)}> 
              {view_types.map((view_type, i) => (<option key={i} value={view_type}>{view_type}</option>))}
                  </Select>
            </FormControl>
      </div>
    )
}
