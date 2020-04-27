import axios from 'axios';    //axios used to make api requests

const url = 'https://covid19.mathdro.id/api';




// Cards api
export const fetchData = async (country) => {     //since we will call the function in app.js
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {

        // This returns overall Object with hell lot of info like config, data, headers, request etc.
        //We want only the data property and in that also few info only, hence we write in another way
        //const response = await axios.get(url);
        //return response;

        //This is the way
        const { data } = await axios.get(changeableUrl);

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return modifiedData;

    } catch (error) {
        console.log(error);
    }
}

//Chart api
export const fetchDailyData = async () => {          // we will call the function in charts.jsx
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;
    } catch (error) {

    }
}


//CountryPicker API
export const fetchCountries = async () => {                       // we will call function in country picker.jsx
    try {
        const { data : {countries} } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);            // we need just the country name
        
    } catch (error) {
        console.log(error);
    }
}
