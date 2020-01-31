import moment from 'moment';
import transformWeather from './transformWeather';

const convertToHour = dt => moment.unix(dt).hour();

const transformForecast = data => (
    data.list.filter(item => (
        convertToHour(item.dt) === 6 || convertToHour(item.dt) === 12 || convertToHour(item.dt) === 18
    )).map(item => (
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
);

export default transformForecast;