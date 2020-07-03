import React from 'react'
import {Card, CardContent, Typography, Grid, makeStyles, CircularProgress,
       Paper, createMuiTheme, ThemeProvider} from "@material-ui/core"
import CountUp from "react-countup"

import styles from "./Cards.module.scss"
import cx from "classnames"
import LinearProgress from '@material-ui/core/LinearProgress';
// Images.
import deaths_logo from "./../../images/death-cases.png"
import recovered_logo from "./../../images/recovered-cases.png"
import infected_logo from "./../../images/infected-cases.png"

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom:20
  },
  paper_container: {
      width:'20%',
      margin:18,
      padding: theme.spacing(2)
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
  },
  control:{
    padding: theme.spacing(2)
  }
}));

export const Cards = ({data}) => {
    const {confirmed, deaths, recovered, lastUpdate} = data
    const {gridDirection, setDirection} = React.useState("row")
    const [spacing, setSpacing] = React.useState(2)
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
      <Grid container direction={gridDirection} spacing={24}>   
      <Paper className={classes.paper_container}>  
        <div className={styles.container}>
            {/* <Grid container spacing={spacing} justify="center"> */}
                <Grid item component={Card} xs={12} md={3} lg={3} 
                      className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom><strong>Infected</strong></Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        {/* <Typography variant="h5">Number of Active Cases of COVID-19</Typography> */}
                        <img className={styles.infected_death_recovered_cases_logo} src={infected_logo} alt="Infected"/>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} lg={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom><strong>Recovered</strong></Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        {/* <Typography variant="h5">Number of Active Cases of COVID-19</Typography> */}
                        <img className={styles.infected_death_recovered_cases_logo} src={recovered_logo} alt="Recovered"/>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} lg={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom><strong>Deaths</strong></Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        {/* <Typography variant="h5">Number of Active Cases of COVID-19</Typography> */}
                        <img className={styles.infected_death_recovered_cases_logo} src={deaths_logo} alt="Deaths"/>
                    </CardContent>
                </Grid>
            {/* </Grid> */}
        </div>
      </Paper>
    </Grid>
    )
}
