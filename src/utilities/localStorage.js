

const getCountriesFromLocalStorage = () => {
  const countriesData = localStorage.getItem('countriesData')
  return countriesData ? JSON.parse(countriesData) : null
}

const addCountriesToLocalStorage = id => {
  const countriesData = getCountriesFromLocalStorage() || []
  countriesData.push(id)
  localStorage.setItem('countriesData', JSON.stringify(countriesData))
}

export { getCountriesFromLocalStorage, addCountriesToLocalStorage }