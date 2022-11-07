import { Col, Container, Row } from "react-bootstrap";
import { Employee, EmployeePayload } from "../../../models";
import Table from "../../Widgets/Table/Table";

type TableLayoutProps = {
	data: Employee[];
	onEdit: (operation: string, employee: EmployeePayload) => void;
	onDelete: (id: string) => void;
};
const TableLayout: React.FC<TableLayoutProps> = ({
	data,
	onEdit,
	onDelete,
}) => {
	return (
		<>
			<Container>
				<Row data-testid="table-layout-wrapper">
					<Col>
						<Table data={data} onEdit={onEdit} onDelete={onDelete} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TableLayout;
