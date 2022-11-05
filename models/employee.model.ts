export interface Employee {
	_id: string;
	first_name: string;
	last_name: string;
	email: string;
	number: string;
	gender: string;
	photo: string;
}

export interface IResponse {
	employeeData: Employee[];
	message?: string;
}
export interface EmployeeState {
	loading: boolean;
	response: IResponse;
	error: string;
}
