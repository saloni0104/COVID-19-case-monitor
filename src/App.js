import React from 'react';

//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';

//Used this instead after creating index.js file in components folder.
import { Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css' ;


class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App;