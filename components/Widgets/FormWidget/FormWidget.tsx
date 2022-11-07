import { Card, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";

import { useContext, useEffect, useState } from "react";
import EmployeeService from "../../../helpers/services/employee";
import { EmployeePayload } from "../../../models";
import { useRouter } from "next/router";
import EmployeeContext from "../../../context/EmployeeContext";
import { EmployeeInitial } from "../../../helpers/initialValues/initialValues";
import { ValidationSchema } from "../../../helpers/validators";
import InputText from "../../Elements/InputText/InputText";
import Dropdown from "../../Elements/Dropdown/Dropdown";
import { formStyles } from "../../../helpers/common";
import { useTranslation } from "next-i18next";
import NotificationContext from "../../../context/NotificationContext";

type FormProps = {
	operation: string;
};

const FormWidget: React.FC<FormProps> = ({ operation }) => {
	const router = useRouter();
	const { selectedEmployee, setSelectedEmployee } = useContext(EmployeeContext);
	const { setNotificationMessage } = useContext(NotificationContext);
	const [formValues, setFormValues] = useState<EmployeePayload>();
	const id: any = router?.query?.id;
	const { t } = useTranslation();

	useEffect(() => {
		setFormValues(selectedEmployee);
	}, [selectedEmployee]);

	const onSubmit = async (values: EmployeePayload) => {
		if (operation === "EDIT") {
			await updateEmployee(id, values).then((res) => {
				if (res) {
					router.push("/employee/list");
					setFormValues(EmployeeInitial);
					setNotificationMessage(res.data.message);
				}
			});
		} else {
			await createEmployee(values).then((res) => {
				if (res) {
					router.push("/employee/list");
					setFormValues(EmployeeInitial);
					setNotificationMessage(res.data.message);
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
			<Card style={formStyles}>
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
									<InputText
										label={t("formLabels.firstName")}
										error={errors.first_name}
										touch={touched.first_name}
										fieldName={"first_name"}
										errors={errors}
									/>
									<InputText
										label={t("formLabels.lastName")}
										error={errors.last_name}
										touch={touched.last_name}
										fieldName={"last_name"}
										errors={errors}
									/>
									<InputText
										label={t("formLabels.email")}
										error={errors.email}
										touch={touched.email}
										fieldName={"email"}
										type={"email"}
										errors={errors}
									/>
									<InputText
										label={t("formLabels.number")}
										error={errors.number}
										touch={touched.number}
										fieldName={"number"}
										errors={errors}
									/>
									<Dropdown
										options={[
											{ value: "M", label: "Male" },
											{ value: "F", label: "Female" },
										]}
										label={t("formLabels.gender")}
										fieldName={"gender"}
										error={errors.gender}
										touch={touched.gender}
										errors={errors}
									/>
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

export default FormWidget;
