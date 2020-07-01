import axios from "axios"
import { DialogTitle } from "@material-ui/core"

const baseURL = "https://covid19.mathdro.id/api"

export const getData = async (country) => {
    try {
       let changeable_url = baseURL
       //
       if (country) {
           changeable_url = `${baseURL}/countries/${country}`
       }
       const { data: {confirmed, recovered, deaths ,lastUpdate} } = await axios.get(changeable_url)
       const response = {
           confirmed,
           recovered,
           deaths,
           lastUpdate
       }
    //    console.log(response)
       return response
    }
    catch(error) {
        console.log(error)
    }
}

export const getDailyData = async () => {
    try{
      const {data} = await axios.get(`${baseURL}/daily`)
      const specific_data = data.map(dailyData => ({
          confirmed: dailyData.confirmed.total,
          deaths: dailyData.deaths.total,
          date: dailyData.reportDate
      }))
      //
      return specific_data
    }
    catch(error){
        console.log(error)
    }
}

export const getCountries = async () => {
    try{
      const {data:{countries}} = await axios.get(`${baseURL}/countries`)
      const country_list = countries.map(country => (
          country.name
      ))
      //
      console.log("Country list from API")
      console.log(countries)
      return country_list
    }
    catch(error){
        console.log(error)
    }
}

