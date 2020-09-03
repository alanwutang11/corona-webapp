import React, {Component, useState} from 'react';
import Map from './components/Map';
import StateInfo from './components/StateInfo';
import {fetchData, fetchCountyData} from './api';
import ReactTooltip from "react-tooltip";
import Header from './components/Header';


//the US state is probably not needed, but take that out later

class App extends Component {
  
  state = {
    data: {},
    usState: '',
    content: '',
    curTime : new Date().toLocaleString(),
    stateCard: {},
    countyData: {},

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

  setContent = async (content) =>{
    this.setState({content: content})
  }
  
  setStateCard = async (stateCard) =>{
    this.setState({stateCard: stateCard})
  }

  render() {
    const { countyData, content, curTime, stateCard} = this.state;
    
    return (
      <div>
        <Header date={curTime}></Header>
        <StateInfo data={stateCard}></StateInfo>
        <Map setTooltipContent={this.setContent} 
        setStateCard={this.setStateCard}
        countyData={countyData}/>
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    );
  }
}

export default App;