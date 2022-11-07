import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import Notification from "../../../components/Elements/Notification/Notification";
import ListAllEmployees from "../../../components/Views/ListAllEmployees/ListAllEmployees";
import EmployeeContext from "../../../context/EmployeeContext";
import NotificationContext from "../../../context/NotificationContext";
import { useAllEmployees } from "../../../helpers/hooks/useAllEmployees";
import { EmployeeInitial } from "../../../helpers/initialValues/initialValues";
import { Employee } from "../../../models";

const Index: NextPage = () => {
	const router = useRouter();
	const { employees } = useAllEmployees();
	const { setSelectedEmployee } = useContext(EmployeeContext);
	const { notificationMessage } = useContext(NotificationContext);

	const onClickAdd = () => {
		router.push("/employee/add");
		setSelectedEmployee(EmployeeInitial);
	};

	const editEmployee = (operation: string, data: Employee) => {
		router.push(`/employee/edit/${data._id}`);
		setSelectedEmployee(data);
	};

	return (
		<>
			{notificationMessage ? (
				<Notification message={notificationMessage} />
			) : null}
			<ListAllEmployees
				addEmployee={onClickAdd}
				data={employees}
				onClickEdit={editEmployee}
			/>
		</>
	);
};

export default Index;
