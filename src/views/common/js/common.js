import axios from 'axios'
import router from '../../router'
import {
  Message
} from 'element-ui'

axios.defaults.timeout = 10000
axios.defaults.baseURL = '/'

// http request 拦截器
axios.interceptors.request.use(config => {
  debugger
  // 获取token
  const tokenType = localStorage.getItem('AD_token_type')
  const token = localStorage.getItem('AD_token')
  // 设置参数格式
  if (!config.headers['Content-Type']) {
    config.headers = {
      'Content-Type': 'application/json'
    }
  }
  // 添加token到headers
  if (token) {
    config.headers.Authorization = tokenType + ' ' + token
  }
  return config
}, err => {
  debugger
  return Promise.reject(err)
})

// http response 拦截器
axios.interceptors.response.use(response => {
  debugger
  return response
}, error => {
  debugger
  // 一些统一code的返回处理
  if (error.response.status === 401) {
    // 登录验证
    router.push({
      name: 'login', // 从哪个页面跳转
      query: {}
    })
    return false
  }
  return Promise.reject(error)
})

/**
 * 消息提示插件调用方法封装
 * @param {object} options 入参
 */
export function tipMessage(options) {
  // 默认为错误提示模式
  if (!options.type) options.type = 'error'
  Message(options)
}

/**
 * 失败回调处理
 * @param {Error} err 异常信息对象
 * @param {function} reject
 * @param {object} options 接口请求入参选项
 */
export function errorHandle(err, reject, options) {
  debugger
  reject(err)
  let message = '请求失败！请检查网络'
  // 错误返回
  if (err.response && err.response.data.message) message = err.response.data.message
  tipMessage({
    message: message
  })
  if (options.failure && typeof (options.failure) === 'function') {
    options.failure(err.response.data)
  }
}

/**
 * 成功回调处理
 * @param {Error} err 异常信息对象
 * @param {function} resolve
 * @param {object} options 接口请求入参选项
 */
export function successHandle(response, resolve, options) {
  debugger
  // if (response.status === 200 && response.data.data) {
  if (response.status === 200) {
    // 返回成功处理  这里传的啥 后续调用的时候 res就是啥
    resolve(response.data.data) // 我们后台所有数据都是放在返回的data里所以这里统一处理了
    if (options.success && typeof (options.success) === 'function') {
      options.success(response.data.data)
    }
  } else {
    let message = '请求失败！请检查网络'
    // 错误返回
    if (response && response.data.message) message = response.data.message
    // 错误处理
    tipMessage({
      message: message
    })
  }
}

/**
 * 封装get方法
 * @param {object} options 接口选项
 * @returns {Promise}
 */
export function fetch(options) {
  return new Promise((resolve, reject) => {
    axios.get(options.url, {
      params: options.params
    }).then(response => {
      successHandle(response, resolve, options)
    }).catch(err => {
      debugger
      errorHandle(err, reject, options)
    })
  })
}

/**
 * 封装post请求
 * @param {object} options 接口选项
 * @returns {Promise}
 */
export function post(options) {
  return new Promise((resolve, reject) => {
    axios.post(options.url, options.data)
      .then(response => {
        successHandle(response, resolve, options)
      }, err => {
        errorHandle(err, reject, options)
      })
  })
}

/**
 * 封装patch请求
 * @param {object} options 接口选项
 * @returns {Promise}
 */
export function patch(options) {
  return new Promise((resolve, reject) => {
    axios.patch(options.url, options.data)
      .then(response => {
        successHandle(response, resolve, options)
      }, err => {
        errorHandle(err, reject, options)
      })
  })
}

/**
 * 封装put请求
 * @param {object} options 接口选项
 * @returns {Promise}
 */
export function put(options) {
  return new Promise((resolve, reject) => {
    axios.put(options.url, options.data)
      .then(response => {
        successHandle(response, resolve, options)
      }, err => {
        errorHandle(err, reject, options)
      })
  })
}

/**
 * 封装delete请求
 * @param {object} options 接口选项
 * @returns {Promise}
 */
export function del(options) {
  return new Promise((resolve, reject) => {
    axios.delete(options.url, options.data)
      .then(response => {
        successHandle(response, resolve, options)
      }, err => {
        errorHandle(err, reject, options)
      })
  })
}

const common = {
  axios: function (options) {
    if (!window.navigator.onLine) {
      tipMessage({
        message: '当前网络不通，请稍后再试！'
      })
      return
    }
    if (options.type) {
      // 请求方式转换为大写字母
      options.type = options.type.toUpperCase()
      // 根据请求方式调用对应方法
      switch (options.type) {
        case 'GET':
          return fetch(options)
        case 'POST':
          return post(options)
        case 'PATCH':
          return patch(options)
        case 'PUT':
          return put(options)
        case 'DELETE':
          return del(options)
        default:
          return fetch(options)
      }
    }
  }
}
export default common
