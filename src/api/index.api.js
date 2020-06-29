import axios from "axios"
import { DialogTitle } from "@material-ui/core"

const baseURL = "https://covid19.mathdro.id/api"

export const getData = async () => {
    try {
       const { data: {confirmed, recovered, deaths ,lastUpdate} } = await axios.get(baseURL)
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

