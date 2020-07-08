import React, { useState } from 'react';
 
import './App.css';
import { CountryPicker } from './components/CountryPicker';
import { Chart } from './components/Chart';
import { Cards } from './components/Cards';

function App() {
  const ConuntrySelect = useState('');
  console.log(ConuntrySelect, "countryName");
  return (
    <div className="App">
      <CountryPicker country={ConuntrySelect} />
      <Cards country={ConuntrySelect} />
      <Chart country={ConuntrySelect} />
    </div>
  );
}

export default App;
