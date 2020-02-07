import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import {
    cities,
    getWeatherCities as _getWeatherCities,
    getForecastDataFromCities as _getForecastDataFromCities
} from './cities';
import { city } from './city';

export default combineReducers({ cities, city });

export const getCity = createSelector(state => state.city, city => city);
export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities);
export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);