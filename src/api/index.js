import axios from 'axios';    //axios used to make api requests

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {     //since we will call the function in app.js
    try {

        // This returns overall Object with hell lot of info like config, data, headers, request etc.
        //We want only the data property and in that also few info only, hence we write in another way
        //const response = await axios.get(url);
        //return response;

        //This is the way
        const { data } = await axios.get(url);

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return modifiedData;

    } catch (error) {
        
    }
}