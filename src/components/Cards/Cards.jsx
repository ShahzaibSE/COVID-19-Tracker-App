import React from 'react'
import {Card, CardContent, Typography, Grid} from "@material-ui/core"

import styles from "./Cards.css"

export const Cards = ({}) => {
    return (
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">TEST Data</Typography>
                        <Typography color="textSecondary">REAL DATA</Typography>
                        <Typography variant="h5">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">TEST Data</Typography>
                        <Typography color="textSecondary">REAL DATA</Typography>
                        <Typography variant="h5">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
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
