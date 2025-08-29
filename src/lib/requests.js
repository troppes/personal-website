import { error as SvelteError } from '@sveltejs/kit';

/**
 * Handles the response from fetch requests
 * @param {Response} response - The fetch response
 * @returns {Promise<any>} Parsed JSON response
 * @throws {HttpError} If response is not ok
 */
async function handleResponse(response) {
	const json = await response.json();
	if (response.ok) {
		return json;
	}
	throw SvelteError(response.status, json);
}

/**
 * Makes a GET request
 * @param {string} token - Auth token
 * @param {string} url - Request URL
 * @returns {Promise<any>} Response data
 */
export async function get(token, url) {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
			Authorization: token
		}
	});
	return handleResponse(response);
}

/**
 * Makes a POST request with JSON data
 * @param {string} token - Auth token
 * @param {any} data - Request payload
 * @param {string} url - Request URL
 * @returns {Promise<any>} Response data
 */
export async function post(token, data, url) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			Authorization: token
		},
		body: JSON.stringify(data)
	});
	return handleResponse(response);
}

/**
 * Makes a POST request with file data
 * @param {string} token - Auth token
 * @param {FormData} data - File data
 * @param {string} url - Request URL
 * @returns {Promise<any>} Response data
 */
export async function postFile(token, data, url) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			Authorization: token
		},
		body: data
	});
	return handleResponse(response);
}

/**
 * Makes a PUT request
 * @param {string} token - Auth token
 * @param {any} data - Request payload
 * @param {string} url - Request URL
 * @returns {Promise<any>} Response data
 */
export async function put(token, data, url) {
	const response = await fetch(url, {
		method: 'PUT',
		headers: {
			'Content-type': 'application/json',
			Authorization: token
		},
		body: JSON.stringify(data)
	});
	return handleResponse(response);
}

/**
 * Makes a DELETE request
 * @param {string} token - Auth token
 * @param {any} data - Request payload
 * @param {string} url - Request URL
 * @returns {Promise<any>} Response data
 */
export async function deleteReq(token, data, url) {
	const response = await fetch(url, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json',
			Authorization: token
		},
		body: JSON.stringify(data)
	});
	return handleResponse(response);
}
