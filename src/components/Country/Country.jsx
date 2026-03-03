import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {

    const[visited, setVisited] = useState(false)

    const handleVisited = () => {
        // First way to toggle the visited state
        //    if(visited){
        //     setVisited(false)
        //    } else{
        //     setVisited(true)
        //    }
        
        // Second way to toggle the visited state
            // setVisited(visited? false : true)
        
        // Third way to toggle the visited state
            setVisited(!visited)
    }

    // console.log(country)
    return (
        <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p> Area: {country.area.area} 
                {
                    country.area.area > 3000 ? ' Big Country' : ' Small Country'
                }
            </p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;