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

  render(){
    const {data} = this.state
    console.log(`API Metadata`)
    console.log(data)
    return(
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Charts />
      </div>
    )
  }
}

export default App;
