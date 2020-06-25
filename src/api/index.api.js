import axios from "axios"

const baseURL = "https://covid19.mathdro.id/api"

export const getData = async () => {
    try {
       const response = await axios.get(baseURL)
       console.log(response)
       return response
    }
    catch(error) {
        console.log(error)
    }
}

