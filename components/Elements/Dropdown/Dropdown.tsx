import { Field } from "formik";
import { Col, Row } from "react-bootstrap";
import { getBorderStyles } from "../../../helpers/validators";
import styles from "./Dropdown.module.scss";

export interface List {
	label: string;
	value: string;
}
type DropdownProps = {
	options: List[];
	label: string;
	errors?: any;
	fieldName: string;
	error?: string;
	touch?: boolean;
};
const Dropdown: React.FC<DropdownProps> = ({
	options,
	label,
	errors,
	fieldName,
	error,
	touch,
}) => {
	return (
		<>
			<Row>
				<Col>
					<div className={styles.customControls} data-testid="dropdown-wrapper">
						<label>{label}</label>
						<Field
							as="select"
							name={fieldName}
							style={getBorderStyles(errors, fieldName)}
						>
							<option defaultValue={"Select"}>Please Select</option>
							{options.map((d) => (
								<option value={d.value} key={d.value}>
									{d.label}
								</option>
							))}
						</Field>
					</div>
					{error && touch ? <div className={styles.errors}>{error}</div> : null}
				</Col>
			</Row>
		</>
	);
};

export default Dropdown;
