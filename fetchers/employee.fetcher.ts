import axios from "axios";

export const axiosClient = axios.create({
	baseURL: "https://employee-api-six.vercel.app",
	headers: {
		"Content-Type": "application/json",
	},
});
