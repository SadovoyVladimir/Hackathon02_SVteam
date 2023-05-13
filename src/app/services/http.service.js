import axios from 'axios'
import configFile from '../config.json'

const httpService = axios.create({
  baseURL: configFile.apiEndPoint
})

httpService.interceptors.request.use(
  async function (config) {
    if (configFile.isFirebase) {
      const containSlash = /\/$/gi.test(config.url)
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + '.json'
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

function transformData(data) {
  return data && !data._id
    ? Object.keys(data).map((key) => ({
        ...data[key]
      }))
    : data
}

httpService.interceptors.response.use(
  (res) => {
    if (configFile.isFirebase) {
      res.data = { content: transformData(res.data) }
    }
    return res
  },
  function (error) {
    const expectedErrors =
      error.response?.status >= 400 && error.response.status < 500

    if (!expectedErrors) {
      console.error('Something was wrong. Try it later')
    }
    return Promise.reject(error)
  }
)

export default httpService
