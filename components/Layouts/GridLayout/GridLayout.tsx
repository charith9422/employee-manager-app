import { Col, Container, Row } from "react-bootstrap";
import { Trash3 } from "react-bootstrap-icons";
import { Employee, EmployeePayload } from "../../../models";
import Icon from "../../Elements/Icon/Icon";
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
