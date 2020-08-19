import React, { useEffect, useState } from 'react';
import Temperature from './Components/Temperature';

function App() {
  const [temperature, setTemperature] = useState({});

  useEffect(async () => {
    async function getData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json'
        },
      });

      return response.json(); 
    }

    const temperature = await getData('http://127.0.0.1:5000/api/temperature');
    setTemperature(temperature);
  }, [])

  return (
    <Temperature {...temperature}/>
  );
}

export default App;
