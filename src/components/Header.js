import React, {useState, useEffect} from 'react'
import {AppBar, Toolbar, Grid, makeStyles, IconButton} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,  
    },
    date: {
        alignItems: 'center', 
    }
  }));

function Header(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                        <Typography variant="h5">
                            Coronavirus Interactive US Map
                        </Typography>
                        </Grid>

                        <Grid container item xs={4} className={classes.date}>
                        <Typography variant="h7">
                         {props.date}
                        </Typography>
                        </Grid>

                        </Grid>
                </Toolbar>
            </AppBar>
            
        </div>
    );
}
export default Header;