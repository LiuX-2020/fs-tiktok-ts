
/**
 * 默认的请求参数
 */
export interface OptionsConfig {
    baseUrl?: string
    type?: string;
    url?: string;
    header?: Object;
    path?: string
    data?: object | ArrayBuffer
}