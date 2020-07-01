import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl, Select, makeStyles, MenuItem} from "@material-ui/core"
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
  }));

export const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountry] = useState([])
    const classes = useStyles()
    //
    const handleChange = (event) => {
        handleCountryChange(event.target.value)
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
       <div className={styles.container}> 
            <FormControl className={classes.formControl}>
                <Select defaultValue="Global" onChange={(e)=>handleCountryChange(e.target.value)} placeholder="Select Country"> 
                  <option value="">Global</option>
                  {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </Select>
            </FormControl>
      </div>
    )
}
