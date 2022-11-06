import { createContext, ReactNode, useState } from "react";
import { Employee, EmployeePayload } from "../models";

type EmployeeProviderProps = {
	children: ReactNode;
};
export interface IEmployee {
	selectedEmployee: EmployeePayload;
	setSelectedEmployee(v: EmployeePayload): void;
}
export const EmployeeContext = createContext<IEmployee>(
	null as unknown as IEmployee
);

export const EmployeeContextProvider = ({
	children,
}: EmployeeProviderProps) => {
	const [selectedEmployee, setSelectedEmployee] = useState<EmployeePayload>();

	const value = {
		selectedEmployee,
		setSelectedEmployee,
	} as IEmployee;

	return (
		<EmployeeContext.Provider value={value}>
			{children}
		</EmployeeContext.Provider>
	);
};

export default EmployeeContext;
