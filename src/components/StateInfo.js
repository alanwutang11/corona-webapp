import React, {useState, useEffect} from 'react';
import { fetchData } from '../api';
import {Card, CardContent, Typography, Grid, makeStyles} from '@material-ui/core';
import { scaleQuantile } from "d3-scale";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: "5px"  
    },
    card: {
        position: "fixed",
        boxShadow: "none",
        backgroundColor: "#b2ebf2",
        padding: "5px"
    }
    
  }));


const StateInfo = ({data: {state, positive, negative, hospitalizedCurrently, recovered, death}}) => {
    const classes = useStyles();


    return(
        <div className={classes.root}> 
            <Card className={classes.card}>
                <Typography>
                    State: {state}
                </Typography>
                <Typography>
                    Positive: {positive}
                </Typography>
                <Typography>
                    Negative: {negative}
                </Typography>
                <Typography>
                    Currently Hospitalized: {hospitalizedCurrently}
                </Typography>
                <Typography>
                    Recovered: {recovered}
                </Typography>
                <Typography>
                    Deaths: {death}
                </Typography>
            </Card>
            
        </div>

    )

}
export default StateInfo; 