import React from 'react'
import {Card, CardContent, Typography, Grid, makeStyles} from "@material-ui/core"
import CountUp from "react-countup"

import styles from "./Cards.module.scss"
import cx from "classnames"
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Cards = ({data}) => {
    const {confirmed, deaths, recovered, lastUpdate} = data
    const classes = useStyles()
    console.log("Cards Data")
    console.log(confirmed)
    if (!confirmed){
        return (
            <div className={classes.root}>
               <LinearProgress/>
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
                <Grid item component={Card} xs={12} md={3} lg={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="h5">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} lg={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="h5">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
