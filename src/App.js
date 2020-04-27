import React from 'react';

//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';

//Used this instead after creating index.js file in components folder.
import { Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css' ;
import { fetchData } from './api';    //whenever there is index file, you don't need to specify the /index, just the folder is enough
import coronaImage from './images/image.png';

//Best place to fetch data inside a class based component is componentDidMount

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {                            //exceptional place for async in case of DidMount function i.e in front of it
        const fetchedData = await fetchData();

        //console.log(fetchedData);
        this.setState( {data: fetchedData});              //We need to render data in cards component so set state
    }

    //This will handle the state change of the country picked
    handleCountryChange = async ( country)  => {
        const fetchedData = await fetchData(country);    //similar to the didmount function to generate country specific info on cards
     
        // fetch the data
        this.setState( {data: fetchedData, country: country});  

        // set the state
    }
    // we shall pass this method as a prop to the country picker


    render() {
        const { data, country } = this.state;                      //{data} will go as props to the card component

        return (
            <div className={styles.container}>
                <img className={styles.image} src ={coronaImage} alt="COVID-19" />
                <Cards data ={ data } />
                <CountryPicker handleCountryChange={this.handleCountryChange} />        {/* Next destructure it in countrypicker.jsx */}
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;