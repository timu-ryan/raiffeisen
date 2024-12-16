import './App.css';
import React, { useState, useEffect } from 'react';
import { 
  citiesCoords,
  APIkey,
  getFetchUrl
} from '../../utils/data.js'
import { 
  Body,
  Header, 
  FormField, 
  Select ,
  Groups,
  Heading,
  Text
} from 'vienna-ui';

function App() {

  const [currentCity, setCurrentCity] = useState('');
  const [temp, setTemp] = useState(0);
  
  useEffect(() => {
    if (currentCity !== '') {
      const { lat, lon } = citiesCoords[currentCity];
      const fetchUrl = getFetchUrl(lat, lon, APIkey);
      fetch(fetchUrl)
        .then(res => res.json())
        .then(res => {
          setTemp(res.main.temp)
        })
    }
  }, [currentCity])

  const handleSelect = (e, data) => setCurrentCity(data.value);
  return (
    <Body>
      <Header size='m' />

      <FormField size='m' className="form">
        <FormField.Label>Город</FormField.Label>
        <FormField.Content>
            <Select placeholder='Выберите свой город' value={currentCity} onSelect={handleSelect}>
              {Object.keys(citiesCoords).map(city => 
                <Select.Option key={city}>{city}</Select.Option>
              )}
            </Select>
        </FormField.Content>
      </FormField>
      
      <Groups design='vertical' className="section">
        <Heading>Планы на день</Heading>
        <Text>
            Введите свой город и мы поможем спланировать вам день
        </Text>
      </Groups>
      {temp}
    </Body>
  );
}

export default App;
