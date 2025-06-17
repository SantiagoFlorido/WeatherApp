import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'

function App() {
  const [coords, setCoords] = useState()
  const [locationPermission, setLocationPermission] = useState(false)
  
  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords?.latitude,
        lon: pos.coords?.longitude
      }
      setCoords(obj)
      setLocationPermission(true)
    }
    
    const error = (err) => {
      console.error(`Error obteniendo ubicación: ${err.message}`)
      setLocationPermission(false)
    }
    
    navigator.geolocation.getCurrentPosition(success, error)
  }, [])

  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  
  useEffect(() => {
    if(coords){
      const APIKEY = '5649d74e7af594878d521d7f5cb6d920'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(0)
          const farenheit = ((celsius * (9/5)) + 32).toFixed(0)
          setTemperature({celsius, farenheit})
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div className="app-container">
      <main className="main-content">
        {!locationPermission && (
          <div className="permission-request">
            <p>Por favor, permite el acceso a tu ubicación para mostrar el clima.</p>
          </div>
        )}
        
        {weather ? (
          <WeatherCard temperature={temperature} weather={weather} />
        ) : (
          <Loading />
        )}
      </main>
      
      <footer className="app-footer">
        Creado por Santiago Florido | usando la api de openweathermap
      </footer>
    </div>
  )
}

export default App