import React, {useState, useEffect} from 'react';
import { geoCentroid, geoAlbersUsa, geoIdentity } from "d3-geo";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { fetchData, fetchCountyData } from '../api';
import allStates from "../data/allstates.json";
import { scaleQuantile } from "d3-scale";



const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"; 

const geoUrlCounties = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

//    const listItems = stateData.map(({positive}) => <li>{positive}</li>);

const Map = ({setTooltipContent, setStateCard, countyData}) => {
  const [stateData, setStateData] = useState([]);
  //const [countyData, setCountyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
        setStateData(await fetchData());
        
    }
    fetchAPI();
});

const colorScale = scaleQuantile()
    .domain(stateData.map(d => d.positive))
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
                stroke="#FFF" //styling
                geography={geo}
                fill="#DDD"
        
                onMouseEnter={() => {
                  //const cur = allStates.find(s => s.val === geo.id);
                  const s_info = allStates.find(s => s.name === geo.properties.name)
                  console.log("geo id", geo.id)
                  console.log(stateData[s_info.api_num])

                  setTooltipContent(`${stateData[s_info.api_num].state} - 
                  positive: ${stateData[s_info.api_num].positive}`)
                  setStateCard(stateData[s_info.api_num])
                  console.log("county data", {countyData})

                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                  setStateCard({});
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none"
                  },
                  hover: {
                    fill: "#1FDCDC",
                    outline: "#none",
                    stroke: "#1FDCDC"
                  },
                  pressed: {
                    fill: "#D6D6DA",
                    outline: "none"
                  }
                }}
              />
            ))}
            
          </>
        )}
      </Geographies>
     
    </ComposableMap>

    )

}

export default Map