import React from 'react'
import style from './country.module.css'
const Country = (props) => {
    // const { country} = props;
    const {name, flags, capital, population,area,currencies,region,languages, maps,timezones,continents} = props.country

    const handleRemoveConrty = (name)=>{
      // alert(name)
      props.onRemoveCountry(name)
    }
  return (
    <article className={style.country}>
        <div>
            <img src={flags.png} alt={name.common} className={style.flag} />
            <h3>Name : {name.common}</h3>
            <h3>Population : {population}</h3>
            <h3>Capital : {capital}</h3>
            <h3>Area : {area}</h3>
            <h3>Region : {region}</h3>
            {/* <h3>Languages : {languages.eng} </h3> */}
            {/* <h3>Currencies : {currencies.XCD.name}</h3> */}
            <h3>Continents : {continents}</h3>
            {/* <h3>TimeZone : {timezones}</h3> */}
            <a href={maps.googleMaps} target='_blank'>Google Map</a>
            <br /> <br />
            <button className={style.btn} onClick={()=>handleRemoveConrty(name.common)}>
              Remove
            </button>
        </div>
    </article>
  )
}

export default Country
