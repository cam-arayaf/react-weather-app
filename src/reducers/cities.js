import toPairs from 'lodash.topairs';
import { GET_WEATHER_CITY, SET_WEATHER_CITY, SET_FORECAST_DATA } from './../actions';
import { createSelector } from 'reselect';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case GET_WEATHER_CITY: {
            const city = action.payload;
            return { ...state, [city]: { ...state[city], weather: null } };
        }  
        case SET_WEATHER_CITY:  {
            const { city, weather } = action.payload;
            return { ...state, [city]: { ...state[city], weather } };
        }
        case SET_FORECAST_DATA: {
            const { city, forecastData } = action.payload;
            return { ...state, [city]: { ...state[city], forecastData, forecastDataDate: new Date() } };
        }
        default:
            return state;
    }
}

const fromObjToArray = cities => (toPairs(cities).map(([key, value]) => ({ key, name: key, data: value.weather })));

export const getWeatherCities =
    createSelector(state => fromObjToArray(state), cities => cities);

export const getForecastDataFromCities =
    createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);