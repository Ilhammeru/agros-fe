import axios from 'axios'

export function initHeader(token) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token
}