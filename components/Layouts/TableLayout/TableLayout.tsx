import { Col, Container, Row } from "react-bootstrap";
import Table from "../../Widgets/Table/Table";

const TableLayout: React.FC = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<Table />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TableLayout;
