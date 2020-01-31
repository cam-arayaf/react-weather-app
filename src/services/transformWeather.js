import convert from 'convert-units';
import { CLOUD, DRIZZLE, RAIN, SNOW, SUN, THUNDER } from './../constants/weathers';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(0));
}

const getWeatherState = weather_data => {
    const { id } = weather_data;
    return id < 300 ? THUNDER : id < 400 ? DRIZZLE : id < 600 ? RAIN : id < 700 ? SNOW : id === 800 ? SUN : CLOUD;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);
    const data = { humidity, temperature, weatherState, wind: `${ speed } m/s` }
    return data;
}

export default transformWeather;