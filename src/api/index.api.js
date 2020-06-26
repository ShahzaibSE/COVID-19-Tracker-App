import axios from "axios"

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

