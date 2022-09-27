import React from 'react';
import './Country.css'

const Country = (props) => {
    //distructuring country
    const {name, area, population} = props.country
    
    return (
        <div className='rongila'>
            <h2>Country Name: {name.common}</h2>
            <h3>Population: {population}</h3>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;