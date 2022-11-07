import { cleanup, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import InputText from "./InputText";
import { Formik } from "formik";
import { EmployeeInitial } from "../../../helpers/initialValues/initialValues";

describe("InputText atomic component", () => {
	afterEach(cleanup);
	it("renders with props", () => {
		render(
			<Formik
				validate={jest.fn()}
				initialValues={EmployeeInitial}
				onSubmit={jest.fn()}
			>
				<InputText label={"Test Label"} fieldName={"test"} />
			</Formik>
		);
		const inputTextWrapper = screen.getByTestId("input-text-wrapper");
		expect(inputTextWrapper).toBeInTheDocument();
	});
});
