import React, { useEffect, useState } from "react";
import {Line, Bar} from 'react-chartjs-2';
export const Chart = ({country}) => {
  let url ='https://covid19.mathdro.id/api'; 
  if(country[0] !== "")
  {
    url= `${url}/countries/${country[0]}`;
  }
  else
  {
    url = `${url}/daily`
  }
 const [data, setData] = useState([{}]);
 useEffect( () => {
  async function getData()
  {
  const response = await fetch(url);
  const apiData = await response.json();
  //console.log(apiData);
  setData(apiData);
  }
  getData();
},[url]);
//data.map((obj) => {
 // return(console.log ( obj.totalConfirmed));
  //});
const lineChart = (data.length > 1 ? (<Line
   data = {{
          labels: data.map((data) => data.reportDate),
          datasets:[ {
          data: data.map((obj) => obj.totalConfirmed),
          label: 'infected',
          borderColor: '#3333ff',
          fill: true,
          }, {
            data: data.map((obj) => obj.deaths.total),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor : 'rgba(250, 0, 0, 0.5)',
            fill: true,
            }]
       }}  />):null);

const barChart = (data.confirmed  ? (<Bar 
    data={{
      labels: ['Infected','Recovered','Deaths'],
      datasets: [{
        label: 'People', 
        backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
        data:[data.confirmed.value , data.recovered.value , data.deaths.value]
      }]
    }}
    options ={{legend :{display : false}, title: {display :true , text :`Current State in ${country[0]}`},}}
/>) : null);
  return (
    <div className="container">
      {country[0] !== "" ? barChart : lineChart}  
    </div>
  );
}
