const Weather = (props) => {
    const {weather,isDayTime,city}=props
    return (
        <div>
            <p>{city}</p>
            {weather && weather.main && weather.main.temp && <p>{weather.main.temp}°C</p>}
            {weather && weather.weather && weather.weather[0] && weather.weather[0].description && <p>{weather.weather[0].description}</p>}
            {weather && weather.weather && weather.weather[0] && weather.weather[0].icon && <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />}
            {isDayTime && <div>Jour</div>}
        </div>

    )
}
export default Weather;