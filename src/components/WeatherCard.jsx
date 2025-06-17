import React, { useState } from 'react'

const WeatherCard = ({weather, temperature}) => {
    const [esCelsius, setEsCelsius] = useState(true)
    const cambiarTemperatura = () => setEsCelsius(!esCelsius)
    
    return (
        <article className='card'>
            <h1 className='card__title'>App del Clima</h1>
            <h2 className='card__subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
            
            <section className='card__first-section'>
                <img 
                    className='card__icon' 
                    src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
                    alt={`Icono del clima: ${weather?.weather[0].description}`}
                />
            </section>
            
            <section className='card__second-section'>
                <h3 className='second__title'>"{weather?.weather[0].description}"</h3>
                <ul className='second__list'>
                    <li className='second_item'>
                        <span className='second__span'>Velocidad del viento: </span>
                        {weather?.wind.speed} m/s
                    </li>
                    <li className='second_item'>
                        <span className='second__span'>Nubosidad: </span>
                        {weather?.clouds.all}%
                    </li>
                    <li className='second_item'>
                        <span className='second__span'>Presión atmosférica: </span>
                        {weather?.main.pressure} hPa
                    </li>
                    <li className='second_item'>
                        <span className='second__span'>Humedad: </span>
                        {weather?.main.humidity}%
                    </li>
                </ul>
            </section>
            
            <h2 className='card__temperature'>
                {esCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}
            </h2>
            
            <button className='card__btn' onClick={cambiarTemperatura}>
                {esCelsius ? 'Cambiar a °F' : 'Cambiar a °C'}
            </button>
        </article>
    )
}

export default WeatherCard