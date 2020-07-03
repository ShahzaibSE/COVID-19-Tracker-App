import React from 'react'
import {makeStyles} from "@material-ui/core"
import { Grid } from '@material-ui/core';
// Components.
import {Cards} from "./../Cards/Cards"
import {Charts} from "./../Charts/Charts"
import {CountryPicker} from "./../CountryPicker/CountryPicker"
import { render } from 'node-sass'
// API.
import {getData} from "./../../api/index.api"
// Styles
import styles from "./Home.module.scss"
// Assets
import covid_19_image from "./../../images/covid-19-title.png"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

export class Home extends React.Component {
    use_material_style = useStyles()
    state = {
    data: {},
    country: '',
    }

    async componentDidMount()
    {
    const data = await getData()
    console.log(data)
    this.setState({data})
    }

    handleCountryChange = async (country)=>{
    const selectedCountry =  await getData(country)
    console.log("Selected country")
    console.log(selectedCountry)
    this.setState({data: selectedCountry, country })
    }

    render(){
    const {data, country} = this.state
    console.log(`API Metadata`)
    console.log(data)
    return(
            <div className={this.classes.root}> 
            <Grid container>
                <Grid item xs>
                <div className={styles.container}> 
                <img className={styles.image} alt="COVID-19" src={covid_19_image}/>
                </div>
                </Grid>
            </Grid> 
            <Grid container spacing={3}> 
                <Grid item xs={4}>
                    <div className={styles.container}>
                    <Cards data={data}/>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className={styles.container}>
                    <CountryPicker handleCountryChange={this.handleCountryChange}/> 
                    </div>
                    <div className={styles.container}>
                        <Charts data={data} country={country}/>
                    </div>
                </Grid>
                {/* <Grid item xs={12}>
                    <div className={styles.container}>
                        <Charts data={data} country={country}/>
                    </div>
                </Grid> */}
                </Grid>
            </div> 
            )
    }
}
