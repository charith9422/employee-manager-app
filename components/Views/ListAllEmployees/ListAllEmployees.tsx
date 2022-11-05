import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../Elements/Button/Button";
import Drawer from "../../Elements/Drawer/Drawer";
import GridLayout from "../../Layouts/GridLayout/GridLayout";
import TableLayout from "../../Layouts/TableLayout/TableLayout";

const ListAllEmployees: React.FC = () => {
	const [isGrid, setIsGrid] = useState<boolean>(true);
	return (
		<>
			<Container>
				<Row>
					<Col md={{ span: 2, offset: 9 }}>
						<Button buttonText="Add Employee"></Button>
					</Col>
					<Col md={1}>
						<Drawer isGrid={isGrid} setIsGrid={() => setIsGrid(!isGrid)} />
					</Col>
				</Row>
				<br></br>
				<Row>
					<Col>{isGrid ? <GridLayout /> : <TableLayout />}</Col>
				</Row>
			</Container>
		</>
	);
};

export default ListAllEmployees;
