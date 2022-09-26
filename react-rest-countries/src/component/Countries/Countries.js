import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {

    const [Countries, setCountries] = useState([]);

    useEffect( () =>{

        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    }, [])


    return (
        <div>
            <h2>Latur Desh.Com</h2>
            {
                Countries.map(country => <Country 
                    name={country.name.common}
                    population={country.population}
                    area={country.area}
                    ></Country>)
            }
        </div>
    );
};

export default Countries;