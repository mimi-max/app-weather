import style from './Weather.module.css';

const Weather = (props) => {
    const {weather,city}=props
    return (
        <div className={style.content}>
            <div className={style.city}>{city}</div>
            {weather && weather.weather && weather.weather[0] && weather.weather[0].description && weather.weather[0].icon && <img className={style.img} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />}
            {weather && weather.main && weather.main.temp && <div className={style.size}>{weather.main.temp}°C</div>}
            {weather && weather.weather && weather.weather[0] && weather.weather[0].description && <div className={style.description}>{weather.weather[0].description}</div>}
            
        </div>

    )
}
export default Weather;