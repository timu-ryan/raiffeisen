import './App.css';
import React, { useState, useEffect } from 'react';

import { 
  citiesCoords,
  APIkey,
  getFetchUrl,
  omolokoUrl,
  stephenKingUrl,
  tempPoint,
} from '../../utils/data.js'

import { 
  Body,
  Header, 
  FormField, 
  Select ,
  Groups,
  Heading,
  Text,
  Grid,
} from 'vienna-ui';

import IceCreamList from '../IceCreamList/IceCreamList'

function App() {

  const [currentCity, setCurrentCity] = useState('');
  const [temp, setTemp] = useState(0);
  const [secFetchUrl, setSecFetchUrl] = useState('');
  // const [response, setResponse] = useState({});
  const [dataArr, setDataArr] = useState([])
  let temperature;
  
  useEffect(() => {
    if (currentCity !== '') {
      const { lat, lon } = citiesCoords[currentCity];
      const fetchUrl = getFetchUrl(lat, lon, APIkey);
      fetch(fetchUrl)
        .then(res => res.json())
        .then(res => {
          temperature = res.main.temp;
          const url = temperature > tempPoint ? omolokoUrl : stephenKingUrl;
          return fetch(url)
        })
        .then(res => res.json())
        .then(res => {
          let arr = temperature > tempPoint ? res.products : res.data;
          setDataArr(arr)
          setTemp(temperature)
        })
        .catch((err) => console.error("Error:", err));
    }
    
  }, [currentCity])

  useEffect(() => {
    console.log(dataArr)
  }, [dataArr])

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
        <Text>
          На улице: {temp}°C
        </Text>
        {temp < tempPoint 
          ? <Text>На улице холодно, лучше остаться дома и прочитать книгу Стивена Кинга, например: {dataArr[Math.floor(Math.random() * (dataArr.length + 1))].Title}</Text> 
          : <Text>На улице тепло, берите мороженое и отправляйтесь на прогулку!</Text>}
        </Groups>
        <br />

      {dataArr?.length !== 0 
      ? (
        temp > tempPoint
        ? <IceCreamList 
          list={dataArr} 
          isSavedPage={true} 
        />
        : null
      )
      : null}
      

    </Body>
  );
}

export default App;