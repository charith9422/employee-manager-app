import axios from "axios";

export const axiosClient = axios.create({
	baseURL: "https://employee-api-production.up.railway.app",
	headers: {
		"Content-Type": "application/json",
	},
});
