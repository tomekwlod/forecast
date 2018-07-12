import axios from 'axios'

const API_KEY = '77960a019f6479a5b07a77a0e7ee009e'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},pl`
    const req = axios.get(url)

    // we are sending the redux_promise to the reducer
    // but inside the reducer there will be no promise anymore
    // but an unwrapped response from the promise (it's what the middleware does)

    return {
        type: FETCH_WEATHER,
        payload: req
    }
}