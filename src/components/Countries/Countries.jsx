import React, { Suspense, use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

//  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
//                         .then(res => res.json())
  const countriesData = use(countriesPromise)
//   console.log(countriesData)
  const countries = countriesData.countries;
//   console.log(countries)
    return (
        <>
            <h2>Total Countries data: {countries.length}</h2>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} />)
                }    
            </div>
         </>
        
    );
}; 

export default Countries;