import { Col, Container, Row } from "react-bootstrap";
import Button from "../../Elements/Button/Button";
import Form from "../../Widgets/Form/Form";

const AddEmployee: React.FC = () => {
	return (
		<>
			<Container>
				<Row>
					<Col md={{ span: 2, offset: 11 }}>
						<Button buttonText="List View"></Button>
					</Col>
				</Row>
				<br></br>
				<Row>
					<Col>
						<Form />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AddEmployee;
