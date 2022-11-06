import { Card, Col, Row } from "react-bootstrap";
import Button from "../../Elements/Button/Button";
import Dropdown from "../../Elements/Dropdown/Dropdown";
import InputText from "../../Elements/InputText/InputText";
import { Formik, useFormik, Form, Field, getIn, FormikErrors } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import EmployeeService from "../../../helpers/services/employee";
import { Employee, EmployeePayload } from "../../../models";
import { useRouter } from "next/router";
import styles from "./Form.module.scss";
import EmployeeContext from "../../../context/EmployeeContext";
import { EmployeeInitial } from "../../../helpers/initialValues/initialValues";

type FormProps = {
	//selectedEmployee?: Employee;
	//onSubmit: ({ values }: any) => void;
	operation: string;
};

function getStyles(errors: any, fieldName: string) {
	if (getIn(errors, fieldName)) {
		return {
			border: "1px solid red",
		};
	}
}
const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FormN: React.FC<FormProps> = ({ operation }) => {
	const router = useRouter();
	const { selectedEmployee, setSelectedEmployee } = useContext(EmployeeContext);
	const [formValues, setFormValues] = useState<EmployeePayload>();
	const id: any = router?.query?.id;
	useEffect(() => {
		setFormValues(selectedEmployee);
	}, [selectedEmployee]);

	const ValidationSchema = Yup.object().shape({
		first_name: Yup.string()
			.min(6, "Should be 6 character of min length")
			.max(10, "Should not be exceed 10 character of max length")
			.required("Field cannot be empty"),
		last_name: Yup.string()
			.min(6, "Should be 6 character of min length")
			.max(10, "Should not be exceed 10 character of max length")
			.required("Field cannot be empty"),
		email: Yup.string().email("Invalid email").required("Required"),
		number: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
		gender: Yup.string().required("Required"),
	});

	const onSubmit = async (values: EmployeePayload) => {
		if (operation === "EDIT") {
			await updateEmployee(id, values).then((res) => {
				if (res) {
					router.push("/employee/list");
					setFormValues(EmployeeInitial);
				}
			});
		} else {
			await createEmployee(values).then((res) => {
				if (res) {
					router.push("/employee/list");
					setFormValues(EmployeeInitial);
				}
			});
		}
		setSelectedEmployee({
			first_name: "",
			last_name: "",
			email: "",
			number: "",
			gender: "",
		});
	};

	const createEmployee = async (emp: EmployeePayload) => {
		try {
			return await EmployeeService.createEmployee(emp);
		} catch (error) {
			console.error(error);
		}
	};

	const updateEmployee = async (id: string, emp: EmployeePayload) => {
		try {
			return await EmployeeService.updateEmployee(id, emp);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Card style={{ width: "40%" }}>
				<Card.Body>
					<Formik
						initialValues={formValues || EmployeeInitial}
						validationSchema={ValidationSchema}
						onSubmit={onSubmit}
						enableReinitialize
					>
						{({ errors, touched, values }) => (
							<Form>
								<Card.Body>
									<Row>
										<Col>
											<div className={styles.customControls}>
												<label>First Name</label>
												<Field
													autoComplete="off"
													name="first_name"
													style={getStyles(errors, "first_name")}
												/>
											</div>
											{errors.first_name && touched.first_name ? (
												<div className={styles.errors}>{errors.first_name}</div>
											) : null}
										</Col>
									</Row>
									<Row>
										<Col>
											<div className={styles.customControls}>
												<label>Last Name</label>
												<Field
													autoComplete="off"
													name="last_name"
													style={getStyles(errors, "last_name")}
												/>
											</div>

											{errors.last_name && touched.last_name ? (
												<div className={styles.errors}>{errors.last_name}</div>
											) : null}
										</Col>
									</Row>
									<Row>
										<Col>
											<div className={styles.customControls}>
												<label>Email</label>
												<Field
													autoComplete="off"
													name="email"
													type="email"
													style={getStyles(errors, "email")}
												/>
											</div>

											{errors.email && touched.email ? (
												<div className={styles.errors}>{errors.email}</div>
											) : null}
										</Col>
									</Row>
									<Row>
										<Col>
											<div className={styles.customControls}>
												<label>Number</label>
												<Field
													autoComplete="off"
													name="number"
													style={getStyles(errors, "number")}
												/>
											</div>

											{errors.number && touched.number ? (
												<div className={styles.errors}>{errors.number}</div>
											) : null}
										</Col>
									</Row>
									<Row>
										<Col>
											<div className={styles.customControls}>
												<label>Gender</label>
												<Field
													as="select"
													name="gender"
													style={getStyles(errors, "gender")}
												>
													<option defaultValue={"Select"}>Please Select</option>
													<option value="M">Male</option>
													<option value="F">Female</option>
												</Field>
											</div>

											{errors.gender && touched.gender ? (
												<div className={styles.errors}>{errors.gender}</div>
											) : null}
										</Col>
									</Row>
									<Row>
										<Col md={{ offset: 10 }}>
											<button type="submit" className="btn btn-outline-primary">
												{operation === "EDIT" ? "SAVE" : "ADD"}
											</button>
										</Col>
									</Row>
								</Card.Body>
							</Form>
						)}
					</Formik>
				</Card.Body>
			</Card>
		</>
	);
};

export default FormN;
