import axios from "axios";

const API_URL = "https://api.tvmaze.com/shows";

const moviesApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRequest = async <T>(
  url: string,
  params?: Record<string, unknown>
): Promise<T> => {
  try {
    const response = await moviesApi.get<T>(url, { params });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `API Error: ${error.message} - ${error.response?.status} ${error.response?.statusText}`
      );
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
