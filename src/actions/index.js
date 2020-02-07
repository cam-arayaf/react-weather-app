import transformWeather from './../services/transformWeather';
import transformForecast from './../services/transformForecast';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        const api_weather = getUrlWeatherByCity(payload, 'forecast');
        dispatch(setCity(payload));
        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();
        if (date && now - date < 1 * 60 * 1000) return;
        return fetch(api_weather).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                dispatch(setForecastData({ city: payload, forecastData }));
            }
        );
    }
}

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = getUrlWeatherByCity(city, 'weather');
            fetch(api_weather).then(data => data.json()).then(weather_data => {
                const weather = transformWeather(weather_data);
                dispatch(setWeatherCity({ city, weather }));
            });
        });
    }
}