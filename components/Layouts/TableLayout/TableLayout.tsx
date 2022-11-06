import { Col, Container, Row } from "react-bootstrap";
import { Employee, EmployeePayload } from "../../../models";
import Table from "../../Widgets/Table/Table";

type TableLayoutProps = {
	data: Employee[];
	onEdit: (operation: string, employee: EmployeePayload) => void;
};
const TableLayout: React.FC<TableLayoutProps> = ({ data, onEdit }) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<Table data={data} onEdit={onEdit} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TableLayout;
