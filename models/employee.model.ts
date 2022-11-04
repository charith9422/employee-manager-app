export interface Employee {
	_id: string;
	first_name: string;
}
export interface EmployeeState {
	loading: boolean;
	employees: Employee[];
	error: string;
}
