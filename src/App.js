import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
// Components.
// import {Cards, Charts, CountryPicker} from "./components"
import {Cards} from "./components/Cards/Cards"
import {Charts} from "./components/Charts/Charts"
import {CountryPicker} from "./components/CountryPicker/CountryPicker"
// API.
import {getData} from "./api/index.api"
import { Grid } from '@material-ui/core';
// Images
import covid_19_image from "./images/covid-19-title.png"

const image_container = {
  paddingTop: 20
}

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
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
     <Grid container justify="center"> 
     <br/>
      <Grid item xs={12} lg={12} md={12}>
       <div className={styles.container}>
         <img className={styles.image} alt="COVID-19" src={covid_19_image}/>
         <Cards data={data}/>
         <CountryPicker handleCountryChange={this.handleCountryChange}/>
         <Charts data={data} country={country}/>
        </div>
       </Grid>
      </Grid>
    )
  }
}

export default App;
