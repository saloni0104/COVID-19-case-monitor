import React, {useState, useEffect} from 'react';    //for using hooks
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    //same as
    /*state = {
        dailyData: {} 
    } */
    //do not need to worry about set state

    useEffect(() => {

        //async useEffect does not exist so make new function
        const fetchAPI  = async () => {
            setDailyData (await fetchDailyData());
        }

        

        fetchAPI();
    });

    const lineChart = (
        dailyData.length //0 by default the array is empty
         ? (
         <Line
          data = {{
              labels: dailyData.map(({date}) => date),
              datasets: [{
                  data: dailyData.map(({confirmed}) => confirmed),
                  label: 'Infected',
                  borderColor: '#3333ff',
                  fill: true
              }, {
                data: dailyData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true
              }],
             }}
             />) : null
        //Daily data provided by API only for deaths and confirmed, not recvered therefore 2 datasets only.     
        //Ternary operator, if first element of dailyData exists, give data otherwise null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;