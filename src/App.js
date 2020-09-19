import React, {Component, useState} from 'react';
import Map from './components/Map';
import StateInfo from './components/StateInfo';
import {fetchData, fetchCountyData} from './api';
import Header from './components/Header';
import HeatMap from './components/HeatMap'
import ColorScale from './components/ColorScale'


//the US state is probably not needed, but take that out later


class App extends Component {
  
  state = {
    data: {},
    usState: '',
    content: '',
    curTime : new Date().toLocaleString(),
    stateCard: {},
    countyData: {},
    mapType: ''
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    const fetchedCountyData = await fetchCountyData();
    

    this.setState({data: fetchedData});
    this.setState({countyData: fetchedCountyData})
  }

  //this function is not needed at the moment as well
  handleStateChange = async (usState) => {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData, usState: usState})
  }
  
  setStateCard = async (stateCard) =>{
    this.setState({stateCard: stateCard})
  }

  setMapType = async (mapType) =>{
    this.setState({mapType: mapType})
    console.log("type: ", mapType)
  }

  render() {
    const { countyData, curTime, stateCard, mapType} = this.state;
    
    return (
      <div>
        <Header date={curTime} setMapType={this.setMapType}></Header>
        
        {mapType === "heat" ? (null) 
        : 
        <StateInfo data={stateCard}/>}

        {mapType === "heat" ? (<HeatMap countyData={countyData}/>) 
        : 
        <Map 
        setStateCard={this.setStateCard}
        />}
  
      
        
      
      </div>
    );
  }
}

export default App;