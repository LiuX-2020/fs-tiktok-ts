import { $http } from "./Request";
import { OptionsConfig } from "../type/RequestType";
/**
  * @function 请求拦截器
  * @description 请求之前做一些事
  * @param options 配置参数
  */
$http.beforeRequest = function (options: OptionsConfig) {
    options.baseUrl = 'https://api.seniverse.com' // 默认前缀 
    let _Header: Object = { Authorization: 'token' }
    options.header = { ...options.header, ..._Header }
    // console.log('请求拦截器',options)
}

/**
  * @function 响应拦截器
  * @description 响应之后做一些事
  * @param resAfter 返回的数据
  */
$http.afterRequest = function (resAfter: Object) {
    // console.log('响应拦截器',resAfter)
}
export default $http
