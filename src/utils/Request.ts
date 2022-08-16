import { OptionsConfig } from "../type/RequestType";
class Request {
  baseUrl: string
  url: string
  method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEAD" | "PATCH"
  // method: String
  data: object | ArrayBuffer
  header: Object
  beforeRequest: Function | null
  afterRequest: Function | null
  path: string
  constructor(options: OptionsConfig = {}) {
    // 请求的根路径
    this.baseUrl = options.baseUrl || ''
    // 请求的 url 地址
    this.url = options.url || ''
    // 请求的参数对象
    this.data = {}
    // 请求方式
    this.method = 'GET'
    // header 请求头
    this.header = options.header || {}
    this.path = options.url || ''
    // 请求前钩子
    this.beforeRequest = null
    // 响应后钩子
    this.afterRequest = null
  }
  /**
   * @function 封装的请求
   * @description 封装的请求方法
	 * @author LiuX
   * @param url 接口地址
   * @param method 请求方法
   * @param data 请求数据
   * @param concontType 请求头
   */
  Request(url: string, method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEAD" | "PATCH", data: Object = {}, concontType?: string | undefined) {
    if (concontType) {
      let concontTypeObj: object = { 'content-typ': concontType }
      this.header = { ...this.header, ...concontTypeObj }
    }

    this.method = method
    this.url = this.baseUrl + url
    this.path = url
    this.data = data
    return this._()
  }
  _() {
    // 请求之前做一些事
    this.beforeRequest && typeof this.beforeRequest === 'function' && this.beforeRequest(this)
    // 发起请求
    return new Promise((resolve, reject) => {

      tt.request({
        // url: 'https://api.seniverse.com' + this.url,
        url: this.baseUrl + this.url,
        method: this.method,
        data: this.data,
        header: this.header,
        success: (res: Object) => { resolve(res) },
        fail: (err: Object) => { reject(err) },
        complete: (res: Object) => {
          // 请求完成以后做一些事情
          this.afterRequest && typeof this.afterRequest === 'function' && this.afterRequest(res)
        }
      })
    })
  }
}

export const $http = new Request()