import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import NotificationContext from "../../../context/NotificationContext";
import EmployeeService from "../../../helpers/services/employee";
import { Employee } from "../../../models";
import { fetchEmployees } from "../../../store/slices/employeeSlice";
import { AppDispatch } from "../../../store/store";
import Button from "../../Elements/Button/Button";
import Drawer from "../../Elements/Drawer/Drawer";
import GridLayout from "../../Layouts/GridLayout/GridLayout";
import TableLayout from "../../Layouts/TableLayout/TableLayout";
import styles from "./ListAllEmployee.module.scss";

type ListAllEmployeesProps = {
	addEmployee: () => void;
	data: Employee[];
	onClickEdit: any;
};

const ListAllEmployees: React.FC<ListAllEmployeesProps> = ({
	addEmployee,
	data,
	onClickEdit,
	//onDelete,
}) => {
	const [isGrid, setIsGrid] = useState<boolean>(true);
	const router = useRouter();
	const dispatch = useDispatch<AppDispatch>();
	const { setNotificationMessage } = useContext(NotificationContext);

	const onDelete = (id: string) => {
		deleteEmployee(id).then((res) => {
			console.log(res);
			if (res?.status === 200) {
				router.push("/employee/list");
				dispatch(fetchEmployees());
				setNotificationMessage(res.data.message);
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
			<Container>
				<Row>
					<Col>
						<div className={styles.actionItems}>
							<Button
								buttonText="Add Employee"
								onBtnClick={addEmployee}
								isRounded
							></Button>
							<Drawer isGrid={isGrid} setIsGrid={() => setIsGrid(!isGrid)} />
						</div>
					</Col>
				</Row>
				<br></br>
				<Row>
					<Col>
						{data && isGrid && (
							<GridLayout
								data={data}
								onEdit={onClickEdit}
								onDelete={onDelete}
							/>
						)}
						{data && !isGrid && (
							<TableLayout
								data={data}
								onEdit={onClickEdit}
								onDelete={onDelete}
							/>
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ListAllEmployees;
