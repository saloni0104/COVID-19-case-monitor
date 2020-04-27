import React, { useState, useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';       //NativeState to select country
import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ( {handleCountryChange} ) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    },[setFetchedCountries]);                           //provided second parameter to useEffect. it would run endlessly without it. With this it would only change when setFetchedCountries change
    

    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value= "global">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

// We wont be keeping the state of the chosen country in countrypicker.jsx, so we will move to app.js

export default CountryPicker;