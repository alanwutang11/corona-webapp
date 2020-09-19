import React from 'react'
import { makeStyles, FormLabel, FormControl, Radio, RadioGroup, FormControlLabel} from '@material-ui/core'


//give the set value back to map.js. 
//Use another function to assign the value here to a state located in App.js
//Create the function in App.js and pass it though to this file. 
//this file will set the value of that state. 
//once that state has a set file name, then that state will conditionally render the second map component file that has yet to be made
//probably dont need to use the handleChange function in this file, maybe 



const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,  
    },
    
  }));

function MapSelect(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const handleChange = (e) => {
        setValue(e.target.value)
        props.setMapType(e.target.value)   
    }
    return (
        <div className={classes.root}>
            <FormControl component="fieldset">
                    <RadioGroup aria-label='map type' value={value} onChange={handleChange} row>
                        <FormControlLabel value="heat" control={<Radio />} label="heat" />
                        <FormControlLabel value="highlight" control={<Radio />} label="highlight" />
                    </RadioGroup>
            </FormControl>
            
        </div>
    );
}

export default MapSelect;





