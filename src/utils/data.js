export const citiesCoords = {
  'Moscow': { lat: 55.755825, lon: 37.617298 },
  'New York': { lat: 40.712776, lon: -74.005974 },
  'Vienna': { lat: 48.208176, lon: 16.373819 }
}

export const APIkey = '02ba2a15859f5f5e466672f4093f0af5';

export function getFetchUrl(lat, lon, APIkey) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
}

export const omolokoUrl = 'https://webapi.omoloko.ru/api/v1/products';
export const stephenKingUrl = 'https://stephen-king-api.onrender.com/api/books';

export const tempPoint = 0;
