import { Card, Col, Row } from "react-bootstrap";
import Button from "../../Elements/Button/Button";
import Dropdown from "../../Elements/Dropdown/Dropdown";
import InputText from "../../Elements/InputText/InputText";

const Form: React.FC = () => {
	return (
		<>
			<Card>
				<Card.Body>
					<Row>
						<Col>
							<InputText label={"First Name"} />
						</Col>
					</Row>
					<Row>
						<Col>
							<InputText label={"Last Name"} />
						</Col>
					</Row>
					<Row>
						<Col>
							<InputText label={"Email"} />
						</Col>
					</Row>
					<Row>
						<Col>
							<InputText label={"Phone"} />
						</Col>
					</Row>
					<Row>
						<Col>
							<Dropdown
								label={"Gender"}
								options={[{ label: "gyd", value: "test" }]}
							/>
						</Col>
					</Row>
					<br />
					<Row>
						<Col md={{ span: 1, offset: 11 }}>
							<Button buttonText="Add" variant="outline-primary"></Button>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</>
	);
};

export default Form;
