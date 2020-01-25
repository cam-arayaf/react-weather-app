import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
	'Buenos Aires, ar',
	'Washington, us',
	'Bogota, col',
	'Ciudad de Mexico, mx',
	'Madrid, es',
	'Lima, pe'
];

function App() {
    return (
    	<div className="App">
    		<LocationList cities={ cities }/>
    	</div>
    );
}

export default App;