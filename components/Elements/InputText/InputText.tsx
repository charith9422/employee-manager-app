import { Field } from "formik";
import { Col, Row } from "react-bootstrap";
import { getBorderStyles } from "../../../helpers/validators";
import styles from "./InputText.module.scss";

type InputTextProps = {
	label: string;
	error?: string;
	touch?: boolean;
	fieldName: string;
	type?: string;
	errors?: any;
};

const InputText: React.FC<InputTextProps> = ({
	label,
	error,
	touch,
	fieldName,
	type,
	errors,
}) => {
	return (
		<>
			<Row>
				<Col>
					<div
						className={styles.customControls}
						data-testid="input-text-wrapper"
					>
						<label>{label}</label>
						<Field
							autoComplete="off"
							name={fieldName}
							style={getBorderStyles(errors, fieldName)}
							type={type}
						/>
					</div>
					{error && touch ? <div className={styles.errors}>{error}</div> : null}
				</Col>
			</Row>
		</>
	);
};

export default InputText;
