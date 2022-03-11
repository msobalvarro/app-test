import axios from 'axios'

export const HTTP = axios.create({
    url: 'https://api.github.com'
})