import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import ListAllEmployees from "../../../components/Views/ListAllEmployees/ListAllEmployees";
import EmployeeContext from "../../../context/EmployeeContext";
import { useAllEmployees } from "../../../helpers/hooks/useAllEmployees";
import { EmployeeInitial } from "../../../helpers/initialValues/initialValues";
import { Employee } from "../../../models";

const Index: NextPage = () => {
	const router = useRouter();
	const { employees } = useAllEmployees();
	const { setSelectedEmployee } = useContext(EmployeeContext);

	const onClickAdd = () => {
		router.push("/employee/add");
		setSelectedEmployee(EmployeeInitial);
	};

	const editEmployee = (operation: string, data: Employee) => {
		console.log(operation);
		router.push(`/employee/edit/${data._id}`);
		setSelectedEmployee(data);
	};
	return (
		<>
			{employees && (
				<ListAllEmployees
					addEmployee={onClickAdd}
					data={employees}
					onClickEdit={editEmployee}
				/>
			)}
		</>
	);
};

export default Index;
