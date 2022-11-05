import { Form } from "react-bootstrap";

type InputTextProps = {
	label: string;
};
const InputText: React.FC<InputTextProps> = ({ label }) => {
	return (
		<>
			<Form.Label>{label}</Form.Label>
			<Form.Control type="text" />
		</>
	);
};

export default InputText;
