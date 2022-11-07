import { Col, Row } from "react-bootstrap";
import { Employee, EmployeePayload } from "../../../models";
import CardWidget from "../../Widgets/CardWidget/CardWidget";

type GridLayoutProps = {
	data: Employee[];
	onEdit: (operation: string, employee: EmployeePayload) => void;
	onDelete: (id: string) => void;
};
const GridLayout: React.FC<GridLayoutProps> = ({ data, onEdit, onDelete }) => {
	return (
		<>
			<Row>
				{data.map((d, i) => (
					<Col key={i} lg={3}>
						<CardWidget data={d} key={i} onEdit={onEdit} onDelete={onDelete} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default GridLayout;
