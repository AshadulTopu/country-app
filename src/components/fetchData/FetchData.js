import React,{useState,useEffect} from 'react'
import Countries from '../countrise/Countries'
import SearchCountry from '../SearchCountry'
import './fetchData.css'

const url = 'https://restcountries.com/v3.1/all'

function FetchData() {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState(countries)
    
    const fetchData = async (url) => {
        setIsLoading(true)
        // console.log(countries);
        try{
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data); 
            setFilteredCountries(data); 
            setIsLoading(false);
            setError(null);
            // console.log(countries);
        }catch (error){
            setIsLoading(false);
            setError(error);
            // console.log(error);
        }
    }
    useEffect(() => {
         fetchData(url)
    }, [])

    const handleRemoveCountry = (name) => {
        // alert(name);
        const newCountries = filteredCountries.filter(country => country.name.common !== name)
        setFilteredCountries(newCountries)

    }
    const handleSearch = (search) => {
        // alert(search)
        let value = search.toLowerCase();
        const searchCountries = countries.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value)
        })
        setFilteredCountries(searchCountries)

    }
    
    return (
        <>
            <h1>Country App</h1>
            <SearchCountry onSearch={handleSearch}  />
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error.message}</h2>}
            {countries && <Countries  countries={filteredCountries} onRemoveCountry={handleRemoveCountry}/>}
        </>
    )
}

export default FetchData
