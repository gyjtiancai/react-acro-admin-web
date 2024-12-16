/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios"

class HttpClient {
  public instance: AxiosInstance
  private _token: string
  private _requestErrorHandler: ((error: AxiosError) => void) | null = null
  private _requestSuccessHandler: ((response: InternalAxiosRequestConfig) => void) | null = null
  private _responseErrorHandler: ((error: AxiosError) => void) | null = null
  private _responseSuccessHandler: ((response: AxiosResponse) => void) | null = null
  constructor({ baseURL, timeout = 30000, ...args }: { baseURL: string; timeout?: number; [key: string]: any }) {
    this._token = ""
    this.instance = axios.create({
      baseURL,
      timeout,
      headers: {
        common: {
          "X-Requested-With": "XMLHttpRequest"
        },
        post: {
          "Content-Type": "application/json"
        }
      },
      ...args
    })

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (this._requestSuccessHandler) {
          this._requestSuccessHandler(config)
        }
        return config
      },
      (error: AxiosError) => {
        if (this._requestErrorHandler) {
          this._requestErrorHandler(error)
        }
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        if (this._responseSuccessHandler) {
          this._responseSuccessHandler(response)
        }
        return response.data
      },
      (error: AxiosError) => {
        if (this._responseErrorHandler) {
          this._responseErrorHandler(error)
        }
        return Promise.reject(error)
      }
    )
  }

  public onRequestSuccess(handler: (response: InternalAxiosRequestConfig) => void) {
    this._requestSuccessHandler = handler
  }

  public onRequestError(handler: (error: AxiosError) => void) {
    this._requestErrorHandler = handler
  }

  public onResponseSuccess(handler: (response: AxiosResponse) => void) {
    this._responseSuccessHandler = handler
  }

  public onResponseError(handler: (error: AxiosError) => void) {
    this._responseErrorHandler = handler
  }

  public setToken(token: string) {
    this._token = token
  }

  public get(url: string, params?: any, config?: InternalAxiosRequestConfig): Promise<any> {
    return this.instance.get(url, { ...config, params })
  }

  public post(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<any> {
    return this.instance.post(url, data, config)
  }

  public delete(url: string, config?: InternalAxiosRequestConfig): Promise<any> {
    return this.instance.delete(url, config)
  }

  public put(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<any> {
    return this.instance.put(url, data, config)
  }

  public patch(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<any> {
    return this.instance.patch(url, data, config)
  }

  public request(config: InternalAxiosRequestConfig): Promise<any> {
    return this.instance.request(config)
  }
}

function useHttpClient({
  baseURL,
  timeout = 30000,
  ...args
}: {
  baseURL: string
  timeout?: number
  [key: string]: any
}): HttpClient {
  return new HttpClient({ baseURL, timeout, ...args })
}
export { HttpClient, useHttpClient }
