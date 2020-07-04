import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import cx from "classnames"
// Components.
// import {Cards, Charts, CountryPicker} from "./components"
import {Cards} from "./components/Cards/Cards"
import {Charts} from "./components/Charts/Charts"
import {CountryPicker} from "./components/CountryPicker/CountryPicker"
// API.
import {getData} from "./api/index.api"
import { Grid, makeStyles, Card, Paper } from '@material-ui/core';
// Images
import covid_19_image from "./images/covid-19-title.png"
// import classes from './App.module.css';

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

class App extends React.Component {
  // classes = useStyles()
  state = {
    data: {},
    country: '',
    view_type: 'Bar'
  }

  async componentDidMount(){
    const data = await getData()
    console.log(data)
    this.setState({data})
  }

  handleCountryChange = async (country)=>{
    const selectedCountry =  await getData(country)
    this.setState({data: selectedCountry, country })
  }

  handleViewType = (view_type) => {
    console.log("App.js view type")
    console.log(view_type)
    this.setState({view_type})
  }

  render(){
    const {data, country, view_type} = this.state
    console.log(`API Metadata`)
    console.log(data)
    return(
     <div> 
     <Grid container>
       <Grid item xs>
       <div className={styles.container}> 
        <img className={styles.image} alt="COVID-19" src={covid_19_image}/>
        <br/>
       </div>
       </Grid>
     </Grid> 
     <Grid container spacing={1} justify="center"> 
      <Grid item xs={3}>
          <div className={styles.container}>
            <Cards data={data}/>
          </div>
       </Grid>
        <Grid item component={Paper} className={styles.chart_country_picker_card} xs={8} justify="center">
            <div>
              <CountryPicker handleCountryChange={this.handleCountryChange} 
                             handleViewType={this.handleViewType}/> 
            </div>
            <br/>
            <div className={styles.chart_container}>
                  <Charts data={data} country={country} view_type={view_type}/>
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

export default App;
