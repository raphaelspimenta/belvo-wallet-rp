import axios from 'axios'
import ApiError from './error'

const createAPI = (baseURL: string) => {
  const api = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const onResponseSuccess = (response: any) => response.data

  const onResponseError = (error: any) => {
    if (error && error.response) throw new ApiError(error.response.status, error.response.data)
    throw new Error(error)
  }

  api.interceptors.response.use(onResponseSuccess, onResponseError)

  return api
}

export default createAPI
