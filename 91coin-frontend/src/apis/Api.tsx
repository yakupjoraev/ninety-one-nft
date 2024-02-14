import axios from 'axios'
import cookies from '../services/cookies'
import config from '../config.json'

let BaseApi = axios.create({
    baseURL: config.apiUri
})

let Api = () => {
    let token = cookies.get('access_token')

    if(token) {
        BaseApi.defaults.headers.common.authorization = `Bearer ${token}`
    }

    return BaseApi
}

export default Api
