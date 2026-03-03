import React, { Suspense, use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

  const countriesData = use(countriesPromise)
//   console.log(countriesData)
  const countries = countriesData.countries;
//   console.log(countries)
const [visitedCountries, setVisitedCountries] = useState([])

const [visitedCountriesFlag, setVisitedCountriesFlag] = useState([])

const handleVisitedCountries = (country) => {
    // if(visitedCountries.includes(country)){
    //     setVisitedCountries(visitedCountries.filter(c => c !== country))
    // } else {
    //     setVisitedCountries([...visitedCountries, country])
    // }
    console.log('Visited Country name:', country.name.common)
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
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
            <h3>Total Visited Countries: {visitedCountries.length}</h3>
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