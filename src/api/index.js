import axios from 'axios';

const url = 'https://api.covidtracking.com'

const countyUrl = 'https://covid19-us-api.herokuapp.com/county'

export const fetchData = async() => {
    
    try {
        const { data } = await axios.get(`${url}/v1/states/current.json`)

        const modData = data.map((stateData) => ({ 
            date: stateData.date,
            state: stateData.state,
            positive: stateData.positive,
            negative: stateData.negative,
            hospitalizedCurrently: stateData.hospitalizedCurrently,
            recovered: stateData.recovered,
            death: stateData.death,
        }))
        return modData

    }
    catch (error) {
        console.log(error)

    }


}

export const fetchCountyData = async() => {
    
    try {
        const { data } = await axios.get('https://covid19-us-api.herokuapp.com/county')

        const modCountyData = data.message.map((countyData) => ({ 
            countyName: countyData.county_name,
            stateName: countyData.state_name,
            confirmed: countyData.confirmed,
            death: countyData.death,
            fatalityRate: countyData.fatality_rate,
        }))
        return modCountyData

    }
    catch (error) {
        console.log(error)

    }


}