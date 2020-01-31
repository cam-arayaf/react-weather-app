import { url_base, api_key } from './../constants/api_url';

const getUrlWeatherByCity = (city, type) => `${ url_base }/${ type }?q=${ city }&appid=${ api_key }`;

export default getUrlWeatherByCity;