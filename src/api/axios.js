import axios from 'axios'

const options = {
	baseURL: 'http://127.0.0.1:3002/frontend',
	timeout: 6000,
	withCredentials: true
}

const instance = axios.create(options)

instance.interceptors.request.use(
	config => {
		return config
	},
	error => Promise.reject(error)
)

instance.interceptors.response.use(
	response => {
		const { data } = response
		return data
	},
	error => Promise.reject(error)
)

export default instance
