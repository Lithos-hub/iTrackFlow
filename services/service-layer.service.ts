import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

const client: AxiosInstance = axios.create();

class ApiClient {
	/**
	 * Sends a GET request to the specified URL.
	 * @param {string} url - The URL to send the request to.
	 * @param {AxiosRequestConfig} [config] - Optional configuration for the request.
	 * @returns {AxiosPromise<T>} - The promise returned by Axios.
	 */
	get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
		return client.get(url, config);
	}

	/**
	 * Sends a POST request to the specified URL.
	 * @param {string} url - The URL to send the request to.
	 * @param {any} [data] - The data to send with the request.
	 * @param {AxiosRequestConfig} [config] - Optional configuration for the request.
	 * @returns {AxiosPromise<T>} - The promise returned by Axios.
	 */
	post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
		return client.post(url, data, config);
	}

	/**
	 * Sends a PUT request to the specified URL.
	 * @param {string} url - The URL to send the request to.
	 * @param {any} [data] - The data to send with the request.
	 * @param {AxiosRequestConfig} [config] - Optional configuration for the request.
	 * @returns {AxiosPromise<T>} - The promise returned by Axios.
	 */
	put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
		return client.put(url, data, config);
	}

	/**
	 * Sends a DELETE request to the specified URL.
	 * @param {string} url - The URL to send the request to.
	 * @param {AxiosRequestConfig} [config] - Optional configuration for the request.
	 * @returns {AxiosPromise<T>} - The promise returned by Axios.
	 */
	delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
		return client.delete(url, config);
	}

	/**
	 * Sends a PATCH request to the specified URL.
	 * @param {string} url - The URL to send the request to.
	 * @param {any} [data] - The data to send with the request.
	 * @param {AxiosRequestConfig} [config] - Optional configuration for the request.
	 * @returns {AxiosPromise<T>} - The promise returned by Axios.
	 */
	patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
		return client.patch(url, data, config);
	}
}

export default new ApiClient();
