import axios from 'axios'
const instance = axios.create({
        baseURL: 'http://47.94.91.162:25034'
    })
    /**
     * 返回拦截器
     */
instance.interceptors.response.use(
    res => {
        return Promise.resolve(res.data)
    },
    err => {
        return Promise.reject(err)
    }
)
const http = {
    request(options) {
        return instance(options)
    },
    get(url, params) {
        return instance.get(url, {
            params
        })
    },
    post(url, data) {
        return instance.post(url, data)
    },
    put(url, data) {
        return instance.put(url, data)
    },
    delete(url, data) {
        return instance.delete(url, data)
    }
}

export default http