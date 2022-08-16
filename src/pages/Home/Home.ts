// const app = getApp()
import { getWeatherServer } from '../../api/HomePage'
import { Res } from '../../type/HomeType'
Page({
  data: {
    result: new Res().WeatherInfoList,
    adrss: new Res().pathName
  },
  onLoad: function () { },
  onReady() {
    this.getWeather()
  },
  getWeather() {
    getWeatherServer().then((res: any) => {
      // console.log(res, 'dd'); 
      this.setData({
        result: res.data.results[0].daily,
        adrss: res.data.results[0].location.name
      })
    })
  },
  btnClick() {
    // console.log('222')
  }
})
