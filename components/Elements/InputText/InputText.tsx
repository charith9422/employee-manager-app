import { Form } from "react-bootstrap";

type InputTextProps = {
	textInput: string;
};
const InputText: React.FC<InputTextProps> = ({ textInput }) => {
	return (
		<>
			<Form.Label>Label</Form.Label>
			<Form.Control type="text" />
		</>
	);
};

export default InputText;
