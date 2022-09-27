import React from 'react';
import './Country.css'

const Country = (props) => {
    
    return (
        <div className='rongila'>
            <h2>Country Name: {props.country.name.common}</h2>
            <h3>Population: {props.country.population}</h3>
            <p>Area: {props.country.area}</p>
        </div>
    );
};

export default Country;