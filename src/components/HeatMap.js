import React, {useState, useEffect} from 'react';
import { ComposableMap, Geographies, Geography} from "react-simple-maps";
import { fetchData, fetchCountyData } from '../api';
import allStates from "../data/allstates.json";
import { scaleQuantile } from "d3-scale";
import ColorScale from './ColorScale'

//todo: add legend for color scale, add search function to pull the statistics for each


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";


const HeatMap = ( ) => {
    const [countyData, setCountyData] = useState([]);
    //const [countyData, setCountyData] = useState([]);
  
    useEffect(() => {
      const fetchAPI = async () => {
          setCountyData(await fetchCountyData());
          console.log(countyData)
      }
      fetchAPI();
  });
 
const colorScale = scaleQuantile()
    .domain(countyData.map(d => d.confirmed))
    .range([
      "#ffe0b2",
      "#ffcc80",
      "#ffb74d",
      "#ffa726",
      "#ff9800",
      "#fb8c00",
      "#f57c00",
      "#ef6c00",
      "#e65100"
    ]);
    //    const listItems = stateData.map(({positive}) => <li>{positive}</li>);

    function getMax(countyData, prop){
      var max; 
      for (var i=0; i<countyData.length; i++){
        if (max == null || parseInt(countyData[i][prop]) > parseInt(max[prop])){
          max = countyData[i];
        }
      }
      return max;
    }

    var maxState = getMax(countyData, "confirmed") 
    console.log(maxState)
    if (maxState){
      var maxConfirmed = maxState.confirmed
      var maxCounty = maxState.countyName
      
      
    }

    return(
      
      <div>
        <ColorScale maxConfirmed={maxConfirmed} maxCounty={maxCounty}/>
        <ComposableMap projection="geoAlbersUsa">
            <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => {
            const cur = countyData.find(s => s.countyName === geo.properties.name);

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={cur ? colorScale(cur.confirmed) : "#EEE"}
              />
            );
          })
        }
        </Geographies>
        </ComposableMap>
      </div>
        
    )

}

export default HeatMap