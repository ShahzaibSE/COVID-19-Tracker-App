import React, {useState, useEffect} from 'react'
import {Line, Bar, Pie} from "react-chartjs-2"
import {Grid, Select, FormControl} from "@material-ui/core"
// API.
import {getDailyData} from "./../../api/index.api"
// StyleSheet 
import styles from "./Charts.module.scss"


export const Charts = ({data:{confirmed,recovered,deaths}, country, view_type}) => {
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

    const bar_chat = (
        confirmed ? 
        <Bar 
        data={{
            labels:['Infected', 'Recovered', 'Deaths'],
            datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
        }}
        options={{
            legend:{display:false},
            title:{display:true, text:`Current state in ${country}`}
        }}/>: null
    )

    const pie_chart = (
        confirmed ?
         <Pie 
            data={{
                labels:['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    {
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [confirmed.value, recovered.value, deaths.value],
                    },
                ],
            }}
         /> :  null
    )
    if (country) {
        if (view_type == 'Bar') {
            return bar_chat
        }else if (view_type == 'Pie'){
            return pie_chart
        }
    }else {
        return line_chart
    }
}
