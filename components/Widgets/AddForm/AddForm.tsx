import { Card, Col, Row } from "react-bootstrap";
import Button from "../../Elements/Button/Button";
import Dropdown from "../../Elements/Dropdown/Dropdown";
import InputText from "../../Elements/InputText/InputText";
import { Formik, useFormik, Form, Field, getIn } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import EmployeeService from "../../../helpers/services/employee";
import { Employee, EmployeePayload } from "../../../models";
import { useRouter } from "next/router";

type FormProps = {
	//onSubmit: ({ values }: any) => void;
};

function getStyles(errors: any, fieldName: string) {
	if (getIn(errors, fieldName)) {
		return {
			border: "1px solid red",
		};
	}
}

const AddForm: React.FC<FormProps> = () => {
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

	const formik = useFormik({
		initialValues: {
			first_name: "",
			last_name: "",
			email: "",
			number: "",
			gender: "",
		},
		onSubmit,
		validationSchema: SignupSchema,
	});

	return (
		<>
			<Card>
				<Card.Body>
					<form autoComplete="off">
						<Row>
							<Col>
								<input
									id="first_name"
									name="first_name"
									type="text"
									onChange={formik.handleChange}
									value={formik.values.first_name}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<input
									id="last_name"
									name="last_name"
									type="text"
									onChange={formik.handleChange}
									value={formik.values.last_name}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<input
									id="email"
									name="email"
									type="text"
									onChange={formik.handleChange}
									value={formik.values.email}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<input
									id="number"
									name="number"
									type="text"
									onChange={formik.handleChange}
									value={formik.values.number}
								/>
							</Col>
						</Row>
						<button type="submit">Submit</button>
					</form>
				</Card.Body>
			</Card>
		</>
	);
};

export default AddForm;
