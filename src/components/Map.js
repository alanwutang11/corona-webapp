import React, {useState, useEffect} from 'react';
import { geoCentroid, geoAlbersUsa, geoIdentity } from "d3-geo";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { fetchData, fetchCountyData } from '../api';
import allStates from "../data/allstates.json";
import { scaleQuantile } from "d3-scale";


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"; 

const geoUrlCounties = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

//    const listItems = stateData.map(({positive}) => <li>{positive}</li>);

const Map = ({setStateCard}) => {
  const [stateData, setStateData] = useState([]);
  //const [countyData, setCountyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
        setStateData(await fetchData());
        
    }
    fetchAPI();
});

    return(
        <ComposableMap projection="geoAlbersUsa" 
        data-tip=""
        >
          
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => (
              
              
              <Geography
                key={geo.rsmKey} //unique keys 
                geography={geo}
                fill = "#e0e0e0"
                onMouseEnter={() => {
                  const s_info = allStates.find(s => s.name === geo.properties.name)
                  //const cur = allStates.find(s => s.val === geo.id);

                  setStateCard(stateData[s_info.api_num])
                  
                }}
                onMouseLeave={() => {
                  setStateCard({});
                }}
                style={{
                  default: {
                    stroke: "#0d47a1", 
                    outline: "none"
                  },
                  hover: {
                    fill: "#64b5f6",
                    stroke: "#64b5f6"
                  },
                  pressed: {
                    fill: "#D6D6DA",
                   
                  }
                }}
              />
              )
              )}
            
          </>
        )}
      </Geographies>
     
    </ComposableMap>

    )

}

export default Map