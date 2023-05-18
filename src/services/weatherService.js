const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/weather`

export async function getWeatherDataFromAPI(lat, lng) {
  const res = await fetch(`${BASE_URL}?lat=${lat}&lng=${lng}`)
  return res.json()
}