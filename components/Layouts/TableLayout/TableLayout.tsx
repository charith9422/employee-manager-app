import { Col, Container, Row } from "react-bootstrap";
import { Employee } from "../../../models";
import Table from "../../Widgets/Table/Table";

type TableLayoutProps = {
	data: Employee[];
};
const TableLayout: React.FC<TableLayoutProps> = ({ data }) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<Table data={data} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TableLayout;
