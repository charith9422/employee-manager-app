import { Form } from "react-bootstrap";

export interface List {
	label: string;
	value: string;
}
type DropdownProps = {
	options: List[];
	label: string;
};
const Dropdown: React.FC<DropdownProps> = ({ options, label }) => {
	return (
		<>
			<Form.Label>{label}</Form.Label>
			<Form.Select>
				{options.map((d, i) => (
					<option value={d.value} key={i}>
						{d.label}
					</option>
				))}
			</Form.Select>
		</>
	);
};

export default Dropdown;
