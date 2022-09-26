import React from 'react';
import './Country.css'

const Country = (props) => {
    
    return (
        <div className='rongila'>
            <h2>Country Name: {props.name}</h2>
            <h3>Population: {props.population}</h3>
            <p>Area: {props.area}</p>
        </div>
    );
};

export default Country;