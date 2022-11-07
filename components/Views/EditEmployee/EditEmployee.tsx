import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../Elements/Button/Button";
import FormWidget from "../../Widgets/FormWidget/FormWidget";

type EditEmployeeProps = {
	operation: string;
};
const EditEmployee: React.FC<EditEmployeeProps> = () => {
	const router = useRouter();

	const getListView = () => {
		router.push("/employee/list");
	};
	return (
		<>
			<Container>
				<Row>
					<Col md={{ span: 2, offset: 11 }}>
						<Button buttonText="List View" onBtnClick={getListView}></Button>
					</Col>
				</Row>
				<br></br>
				<Row>
					<Col>
						<div className="d-flex justify-content-center">
							<FormWidget operation="EDIT" />
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default EditEmployee;
