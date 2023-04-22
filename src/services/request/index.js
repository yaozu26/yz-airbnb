import axios from "axios";
import { BASEURL, TIMEOUT } from "./config";

class YZRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    
    // 添加一个拦截器
    this.instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({...config, method: "get"})
  }

  post(config) {
    return this.request({...config, method: "post"})
  }
}

// eslint-disable-next-line
export default new YZRequest(BASEURL, TIMEOUT)

