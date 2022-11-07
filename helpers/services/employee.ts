import { axiosClient } from "../../fetchers/employee.fetcher";
import { EmployeePayload } from "../../models";

const getAllEmployees = () => {
	return axiosClient
		.get("/employee")
		.then((response) => response.data)
		.catch((error) => {
			console.log(error);
		});
};

const createEmployee = (data: EmployeePayload) => {
	return axiosClient.post("/employee", data).catch((error) => {
		console.log(error);
	});
};

const updateEmployee = (id: string, data: EmployeePayload) => {
	return axiosClient.put(`/employee/${id}`, data).catch((error) => {
		console.log(error);
	});
};

const deleteEmployee = (id: string) => {
	return axiosClient.delete(`/employee/${id}`);
};

const EmployeeService = {
	getAllEmployees,
	createEmployee,
	updateEmployee,
	deleteEmployee,
};

export default EmployeeService;
