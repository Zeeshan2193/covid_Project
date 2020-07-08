import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

export const CountryPicker = ({ country }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://covid19.mathdro.id/api/countries");
            const apiData = await response.json();
            //console.log(apiData.countries, "country data");
            setData(apiData.countries);
        }
        getData();
    }, [country]);


    return (
        <div>
            <FormControl>
                <NativeSelect className="countryOption" defaultValue="" onChange={(e) => country[1](e.target.value)}>
                    <option value="" >Global</option>
                    {
                        data.map((obj, index) => {
                            return (<option key={index} value={obj.name}>{obj.name}</option>)
                        })
                    }
                </NativeSelect>
            </FormControl>

        </div>
    )
}
