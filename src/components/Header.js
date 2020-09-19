import React, {useState, useEffect} from 'react'
import {AppBar, Toolbar, Grid, makeStyles, IconButton} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MapSelect from './MapSelect';


const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,  
    },
    title: {
        alignItems: 'center',
    },
    date: {
        alignItems: 'center', 
    },
    mapSelect: {
    
    }
  }));

function Header(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={2}>
                        <Grid container item xs={4} className={classes.title}>
                        <Typography variant="h5">
                            Coronavirus Interactive US Map
                        </Typography>
                        </Grid>
                        <Grid container item xs={2} className={classes.date}>
                        <Typography variant="h7">
                         {props.date}
                        </Typography>
                        </Grid>
                        
                        <Grid item xs={4}>
                            <MapSelect setMapType={props.setMapType}/>
                        </Grid>
                        <Grid container item xs={2} alignItems="center">
                            Search bar
                        </Grid>
                        </Grid>
                </Toolbar>
            </AppBar>
            
        </div>
    );
}
export default Header;