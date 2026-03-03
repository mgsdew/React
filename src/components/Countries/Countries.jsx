import React, { Suspense, use, useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css'
import { getCountriesFromLocalStorage as getCountriesFLS, 
         addCountriesToLocalStorage as addCountryTLS } from '../../utilities/localStorage';

const Countries = ({ countriesPromise }) => {

  const countriesData = use(countriesPromise)
//   console.log(countriesData)
  const countries = countriesData.countries;
//   console.log(countries)
const [visitedCountries, setVisitedCountries] = useState([])

const [visitedCountriesFlag, setVisitedCountriesFlag] = useState([])

const [visitedFromLS, setVisitedFromLS] = useState([])

useEffect(() => {
    const data = getCountriesFLS() || []
    setVisitedFromLS(data)
}, [])

const handleVisitedCountries = (country) => {
   // console.log('Visited Country name:', country.name.common)
    // Check if the country is already visited
    if (visitedFromLS.includes(country.cca3)) {
        return; // Do not add if already exists
    }
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)

    // Add visited country to local storage
    addCountryTLS(country.cca3)
    // Update the LS state
    setVisitedFromLS(getCountriesFLS())
}

const handleVisitedFlag = (visitedFlags) => {
   // console.log('Add Visited Country Flag:', visitedFlags)
    const newVisitedCountriesFlag = [...visitedCountriesFlag, visitedFlags]
    setVisitedCountriesFlag(newVisitedCountriesFlag)
    // console.log('Total Visited Country Flags:', visitedCountriesFlag)
}

    return (
        <>
            <h2>Total Available Countries data: {countries.length}</h2>
            <h3>Total Visited Countries: {visitedFromLS.length}</h3>
            <h3>Total Visited Flags: {visitedCountriesFlag.length}</h3>
            <div className='visited-flags-container'>
                {
                    visitedCountriesFlag.map((flag, index) => <img key={index} src={flag} alt="Visited Country Flag" />)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.cca3.cca3} 
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                         />)
                }    
            </div>
         </>
        
    );
}; 

export default Countries;