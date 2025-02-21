import axios from 'axios';

const API_URL = 'https://api.tvmaze.com/shows';

const moviesApi = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getRequest = async <T>(
	url: string,
	params?: Record<string, any>,
): Promise<T> => {
	try {
		const response = await moviesApi.post<T>(url, params);

		return response.data;
	} catch (error) {
		throw error;
	}
};
