import React, {useState, useEffect} from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import '../App.css';
//import cx from 'classnames';

export const Cards = ({country}) => {
    console.log(country, 'in card Component');
    let url = "https://covid19.mathdro.id/api";
    if(country[0] !== "")
    {
        url = `${url}/countries/${country[0]}`;
    }
     
    // alert(url)
    const [data, setData] = useState({});
    useEffect(() =>{
    async function getData(){
    const response= await fetch(url);
    const covid = await response.json();
    console.log(covid,"covid");
    setData(covid);
    }
    getData();
},[url])
    if(!data.confirmed){return 'Loading......................'; }
    return (
        <div>
    
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className = "card infected">
                 <CardContent>
                     <Typography gutterBottom>Infected</Typography><hr />
                     <Typography variant="h5"> 
                     <CountUp start={0} end= {data.confirmed.value} duration ={4.5} separator =',' />
                     </Typography>
                     <Typography>{new Date(data.lastUpdate).toDateString()}</Typography>
                     <Typography varient="body2">Number Of Active Cases of Covid-19</Typography>
                 </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className = "card recovered">
                 <CardContent>
                     <Typography gutterBottom>Recovered</Typography><hr />
                     <Typography variant="h5"> 
                     <CountUp start={0} end= {data.recovered.value} duration ={4.5} separator =',' />
                     </Typography>
                     <Typography>{new Date(data.lastUpdate).toDateString()}</Typography>
                     <Typography varient="body2">Number Of Active Cases of Covid-19</Typography>
                 </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className = "card deaths">
                 <CardContent>
                     <Typography gutterBottom>Deaths</Typography><hr />
                     <Typography variant="h5"> 
                     <CountUp start={0} end= {data.deaths.value} duration ={4.5} separator =',' />
                     </Typography>
                     <Typography > {new Date(data.lastUpdate).toDateString()}</Typography>
                     <Typography varient="body2">Number Of Active Cases of Covid-19</Typography>
                 </CardContent>
            </Grid>
             
        </Grid>            
        </div>
    )
}
