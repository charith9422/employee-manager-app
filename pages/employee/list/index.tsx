import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import ListAllEmployees from "../../../components/Views/ListAllEmployees/ListAllEmployees";
import EmployeeContext from "../../../context/EmployeeContext";
import { useAllEmployees } from "../../../helpers/hooks/useAllEmployees";
import { EmployeeInitial } from "../../../helpers/initialValues/initialValues";
import EmployeeService from "../../../helpers/services/employee";
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
		router.push(`/employee/edit/${data._id}`);
		setSelectedEmployee(data);
	};

	const onDelete = (operation: string, id: string) => {
		deleteEmployee(id).then((res) => {
			console.log(res);
			if (res?.status === 200) {
				router.push("/employee/list");
			}
		});
	};
	const deleteEmployee = async (id: string) => {
		try {
			return await EmployeeService.deleteEmployee(id);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<ListAllEmployees
				addEmployee={onClickAdd}
				data={employees}
				onClickEdit={editEmployee}
				//onDelete={onDelete}
			/>
		</>
	);
};

export default Index;
