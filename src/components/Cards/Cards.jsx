import React from 'react'
import {Card, CardContent, Typography, Grid} from "@material-ui/core"
import CountUp from "react-countup"

import styles from "./Cards.css"
import cx from "classnames"

export const Cards = ({data}) => {
    const {confirmed, deaths, recovered, lastUpdate} = data
    console.log("Cards Data")
    console.log(confirmed)
    if (!confirmed){
        return (
            <div>
               <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} lg={3} 
                      className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="h5">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} lg={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">TEST Data</Typography>
                        <Typography color="textSecondary">REAL DATA</Typography>
                        <Typography variant="h5">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} lg={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">TEST Data</Typography>
                        <Typography color="textSecondary">REAL DATA</Typography>
                        <Typography variant="h5">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
