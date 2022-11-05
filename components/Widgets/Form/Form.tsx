import { Card, Col, Row } from "react-bootstrap";
import Button from "../../Elements/Button/Button";
import Dropdown from "../../Elements/Dropdown/Dropdown";
import InputText from "../../Elements/InputText/InputText";
import { Formik, useFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import EmployeeService from "../../../helpers/services/employee";
import { Employee, EmployeePayload } from "../../../models";
import { useRouter } from "next/router";

type FormProps = {
	//onSubmit: ({ values }: any) => void;
};

const FormN: React.FC<FormProps> = () => {
	const router = useRouter();

	const SignupSchema = Yup.object().shape({
		first_name: Yup.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		last_name: Yup.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		email: Yup.string().email("Invalid email").required("Required"),
		number: Yup.string().required("Required"),
		gender: Yup.string().required("Required"),
	});

	const onSubmit = async (values: EmployeePayload) => {
		await createEmployee(values).then((res) => {
			if (res) {
				router.push("/employee/list");
			}
		});
	};

	const createEmployee = async (emp: EmployeePayload) => {
		try {
			return await EmployeeService.createEmployee(emp);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Card>
				<Card.Body>
					<Formik
						initialValues={{
							first_name: "",
							last_name: "",
							email: "",
							number: "",
							gender: "",
						}}
						validationSchema={SignupSchema}
						onSubmit={onSubmit}
					>
						{({ errors, touched }) => (
							<Form>
								<Card.Body>
									<Row>
										<Col>
											<Field name="first_name" />
											{errors.first_name && touched.first_name ? (
												<div>{errors.first_name}</div>
											) : null}
										</Col>
									</Row>
									<Row>
										<Col>
											<Field name="last_name" />
											{errors.last_name && touched.last_name ? (
												<div>{errors.last_name}</div>
											) : null}
										</Col>
									</Row>
									<Row>
										<Col>
											<Field name="email" type="email" />
											{errors.email && touched.email ? (
												<div>{errors.email}</div>
											) : null}
										</Col>
									</Row>
									<Row>
										<Col>
											<Field name="number" />
											{errors.number && touched.number ? (
												<div>{errors.email}</div>
											) : null}
										</Col>
									</Row>
									<Row>
										<Col>
											<Field as="select" name="gender">
												<option value="M">Male</option>
												<option value="F">Female</option>
											</Field>

											{errors.gender && touched.gender ? (
												<div>{errors.gender}</div>
											) : null}
										</Col>
									</Row>
									<Row>
										<Col>
											<button type="submit">Submit</button>
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
