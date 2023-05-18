// assets
import clearDay from '../../assets/icons/weather/01d.svg'
import clearNight from '../../assets/icons/weather/01n.svg'
import cloudyNight from '../../assets/icons/weather/02n.svg'
import cloudyDay from '../../assets/icons/weather/02d.svg'
import rainyDay from '../../assets/icons/weather/10d.svg'
import rainyNight from '../../assets/icons/weather/10n.svg'
import stormy from '../../assets/icons/weather/11d.svg'
import snowy from '../../assets/icons/weather/13d.svg'
import mistTornadoHazeFogSandAshSmokeSquallOrSand from '../../assets/icons/weather/50d.svg'

const iconTable = {
  '01d': clearDay,
  '01n': clearNight,
  '02d': cloudyDay,
  '02n': cloudyNight,
  '03d': cloudyDay,
  '03n': cloudyNight,
  '04d': cloudyDay,
  '04n': cloudyNight,
  '09d': rainyDay,
  '09n': rainyNight,
  '10d': rainyDay,
  '10n': rainyNight,
  '11d': stormy,
  '11n': stormy,
  '13d': snowy,
  '13n': snowy,
  '50d': mistTornadoHazeFogSandAshSmokeSquallOrSand,
  '50n': mistTornadoHazeFogSandAshSmokeSquallOrSand,
}

// css
import styles from './WeatherInfo.module.css'

const WeatherInfo = (props) => {
  const weatherImg = iconTable[props.weather.weather[0].icon]
  return (
    <div className={styles.container}>
      <img src={weatherImg} alt="weather icon" />
      <p className={styles.temperature}>{Math.floor((props.weather.main.temp - 273.15) * (9/5) + 32)}°F</p>
    </div>
  )
}

export default WeatherInfo