import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import './styles.css';

import { CLOUD, DRIZZLE, RAIN, SNOW, SUN, THUNDER } from './../../../constants/weathers';

const icons = {
	[CLOUD]: 'cloud',
	[DRIZZLE]: 'day-showers',
	[RAIN]: 'rain',
	[SNOW]: 'snow',
	[SUN]: 'day-sunny',
	[THUNDER]: 'day-thunderstorm',
}

const getWeatherIcon = weatherState => {
	const icon = icons[weatherState] || 'day-rain';
	const sizeIcon = '4x';
	return <WeatherIcons className="wicon" name={ icon } size={ sizeIcon }/>
}

const WeatherTemperature = ({ temperature, weatherState }) => (
	<div className="weatherTemperatureCont">
		{ getWeatherIcon(weatherState) }
		<span className="temperature" >{ temperature }</span>
		<span className="temperatureType" >{ '°C' }</span>
	</div>
);

WeatherTemperature.propTypes = {
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;