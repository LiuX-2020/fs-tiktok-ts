import $http from '../utils/http'
export const getWeatherServer = () => {
    return $http.Request('/v3/weather/daily.json?key=mjuz2p2wqtshi873&location=ip&language=zh-Hans&unit=c&start=0&days=5', "GET", {})
}
