export const citiesCoords = {
  'Москва': { lat: 55.755825, lon: 37.617298 },
  'Нью Йорк': { lat: 40.712776, lon: -74.005974 },
  'Вена': { lat: 48.208176, lon: 16.373819 },
  'Лисабон': { lat: 38.722252, lon: -9.139337 },
  'Мурманск': { lat: 68.972603, lon: 33.084560 },
  'Альметьевск': { lat: 54.900650, lon: 52.296280 },
  'Казань': { lat: 55.830433, lon: 49.066082 },
}

export const APIkey = '02ba2a15859f5f5e466672f4093f0af5';

export function getFetchUrl(lat, lon, APIkey) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
}

export const omolokoUrl = 'https://webapi.omoloko.ru/api/v1/products';
export const stephenKingUrl = 'https://stephen-king-api.onrender.com/api/books';

export const tempPoint = 0;

export function handleKingBookClick(book) {
  const formattedBook = book.replaceAll(' ', '+') + '+Stephen+King';
  window.open(`https://www.google.com/search?q=${formattedBook}`, "_blank");
}
