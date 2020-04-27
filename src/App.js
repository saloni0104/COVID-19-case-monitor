import React from 'react';

//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';

//Used this instead after creating index.js file in components folder.
import { Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css' ;
import { fetchData } from './api';    //whenever there is index file, you don't need to specify the /index, just the folder is enough


//Best place to fetch data inside a class based component is componentDidMount

class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount() {                            //exceptional place for async in case of DidMount function i.e in front of it
        const fetchedData = await fetchData();

        //console.log(fetchedData);
        this.setState( {data: fetchedData});              //We need to render data in cards component so set state
    }


    render() {
        const { data } = this.state;                      //{data} will go as props to the card component

        return (
            <div className={styles.container}>
                <Cards data ={ data } />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App;