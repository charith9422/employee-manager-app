import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Employee } from "../../../models";
import Button from "../../Elements/Button/Button";
import Drawer from "../../Elements/Drawer/Drawer";
import GridLayout from "../../Layouts/GridLayout/GridLayout";
import TableLayout from "../../Layouts/TableLayout/TableLayout";

type ListAllEmployeesProps = {
	addEmployee: () => void;
	data: Employee[];
	onClickEdit: any;
};

const ListAllEmployees: React.FC<ListAllEmployeesProps> = ({
	addEmployee,
	data,
	onClickEdit,
}) => {
	const [isGrid, setIsGrid] = useState<boolean>(true);

	return (
		<>
			<Container>
				<Row>
					<Col md={{ span: 2, offset: 9 }}>
						<Button buttonText="Add Employee" onBtnClick={addEmployee}></Button>
					</Col>
					<Col md={1}>
						<Drawer isGrid={isGrid} setIsGrid={() => setIsGrid(!isGrid)} />
					</Col>
				</Row>
				<br></br>
				<Row>
					<Col>
						{isGrid ? (
							<GridLayout data={data} onEdit={onClickEdit} />
						) : (
							<TableLayout data={data} onEdit={onClickEdit} />
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ListAllEmployees;
