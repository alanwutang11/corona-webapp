import React from 'react';
import {Card, Paper, makeStyles,Typography, CardHeader} from '@material-ui/core'

//TODO: get the number of cases from the thing as a prop, and pass it thru
//then with those numbers (low and high) put them in a typography
//align all the shit with the grid
//figure out the padding
//once this is done, put it up on resume and github and CONTINUE WORKING ON IT  

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
        position: "fixed",
        height: "30px",
        width: "200px",
        background:"linear-gradient(0.25turn, #e65100, #ffe0b2)", 
        
        
    },
    card: {
        height: "80px",
        width: "200px",
        boxShadow : "none",
        position: "fixed",
        

        
    },
    caseNumberMax: {
        fontSize: 14,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: "bold"
    },
    countyName: {
        paddingTop: "15%",
        fontSize: 14
    }

}));

function ColorScale(props) { 
    const classes = useStyles();
    return(
        <div className={classes.root}> 
        
            <Card className={classes.card} variant="outlined">
                <Typography className={classes.cardTitle}>
                    County with the most cases
                    </Typography>
                   <Paper className={classes.paper}>
                    <Typography variant='h8' className={classes.caseNumberMax}>
                        {props.maxConfirmed} cases
                    </Typography>
                </Paper>
                <Typography gutterBottom className={classes.countyName}>
                {props.maxCounty} County
            </Typography>
            
           
        </Card>   
        </div>
    );
}
export default ColorScale;