import React, {useState, useEffect} from 'react'
import {Line, Bar} from "react-chartjs-2"
import {Grid} from "@material-ui/core"
// API.
import {getDailyData} from "./../../api/index.api"
// StyleSheet 
import styles from "./Charts.module.scss"


export const Charts = () => {
    const [dailyData, setDailyData] = useState([])

    useEffect(()=> {
        const fetchDailyData = async () => {
            // Async code here.
            setDailyData(await getDailyData())
        }
        // console.log(dailyData)
        //
        fetchDailyData()
    },[])

    const line_chart = (
        dailyData.length ? <Line data={{
            labels:dailyData.map(({date}) => date),
            datasets:[
            {
                data:dailyData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: "blue",
                fill: true
            },
            {
                data:dailyData.map(({deaths}) => deaths),
                label: 'Death',
                borderColor: "red",
                backgroundColor: "rgba(255,0,0,0.5)",
                fill: true
            }]
        }}/> : null
    ) 

    return (
       <Grid container justify="center" alignItems="center"> 
        <div className={styles.container}>
                    {line_chart}
        </div>
        </Grid>
    )
}
