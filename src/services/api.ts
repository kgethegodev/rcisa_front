import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class ApiService {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.initializeResponseInterceptor();
    }

    private initializeResponseInterceptor() {
        this.axiosInstance.interceptors.response.use(
            this.handleResponse,
            this.handleError
        );
    }

    private handleResponse({ data }: AxiosResponse) {
        return data;
    }

    private handleError(error: any) {
        return Promise.reject(error);
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.get(url, config);
    }

    public post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.post(url, data, config);
    }

    public put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.put(url, data, config);
    }

    public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.delete(url, config);
    }
}

const apiService = new ApiService('https://api-rcisa.devkg.online/api/');

export default apiService;