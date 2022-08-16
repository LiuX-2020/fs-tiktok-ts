/**
 * 响应接口定义
 */
export interface Result {
    data: Object
    errMsg: string
    header: object
    isPrefetch: boolean
    statusCode: number
    prefetchDetail: number
    profile: object | null
}
/**
 * 天气接口定义
 */
export interface WeatherInfo {
    code_day: string
    code_night: string
    date: string
    high: string
    humidity: string
    low: string
    precip: string
    rainfall: string
    text_day: string
    text_night: string
    wind_direction: string
    wind_direction_degree: string
    wind_scale: string
    wind_speed: string
}
/**
 * 向外暴露的天气类
 */
export class Res {
    WeatherInfoList: WeatherInfo[] = []
    pathName:string=''
}
