import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import CryptoJS from 'crypto-js'

var jwt = localStorage.getItem('jwt')
if (jwt != null) {
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        var jwt = localStorage.getItem('jwt')
        if (jwt != null || jwt != undefined) {
            var token = CryptoJS.AES.decrypt(jwt, process.env.VUE_APP_CRYPTO_KEY).toString(CryptoJS.enc.Utf8);
            config.headers.Authorization = 'Bearer ' + token
            return config;
        }
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      })
}

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

Vue.use(VueAxios, axios)