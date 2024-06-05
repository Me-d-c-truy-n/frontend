import { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { STATUS } from '../../types/response'

const onResponse = (res: AxiosResponse): AxiosResponse => {
  if (res?.data?.status === STATUS.ERROR) throw new Error(res?.data?.message || 'Internal Server Error')

  return res
}

const onResponseError = async (err: AxiosError): Promise<AxiosError | undefined> => {
  if (err.code === 'ERR_NETWORK') {
    toast.error('Có một vấn đề nhỏ với máy chủ.', { toastId: 'server_error' })
  }

  return Promise.reject(err.code)
}

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(onResponse, (err: AxiosError) => onResponseError(err))
}
