import React from 'react';
import logo from './logo.svg';
import './App.css';
// Components.
// import {Cards, Charts, CountryPicker} from "./components"
import {Cards} from "./components/Cards/Cards"
import {Charts} from "./components/Charts/Charts"
import {CountryPicker} from "./components/CountryPicker/CountryPicker"
// API.
import {getData} from "./api/index.api"

class App extends React.Component {

  async componentDidMount(){
    const data = await getData()
  }

  render(){
    return(
      <div>
        <Cards />
        <Charts />
        <CountryPicker />
      </div>
    )
  }
}

export default App;
