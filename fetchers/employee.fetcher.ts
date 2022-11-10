import axios from "axios";

export const axiosClient = axios.create({
	baseURL: "https://employee-api-6wj7.vercel.app",
	headers: {
		"Content-Type": "application/json",
	},
});
