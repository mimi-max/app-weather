import { useState } from 'react';
import style from './App.module.css';
import Form from './Form';
import Weather from './Weather';

function App() {
  console.log("nouveau render")

  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("Nantes")
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=459af4f281ce56d7a62f3d32c32d1f67&units=metric`
  const time = Date.now()/1000
  const isDayTime =weather && weather.sys && weather.sys.sunrise < time &&  weather.sys.sunset > time

  function searchWeather(e) {
    e.preventDefault()
    console.log(e)
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        return setWeather(data)
      })

  }

  function inputCity(e) {
    console.log(e.target.value)
    setCity(e.target.value)
  }
console.log(isDayTime)
  return (
    <div className={`${style.container} ${isDayTime ? style.day : style.night}`}>
      <Weather city={city} weather={weather} isDayTime={isDayTime} />
      <Form searchWeather={searchWeather} inputCity={inputCity} city={city}/>

    </div>
  )
}

export default App;
