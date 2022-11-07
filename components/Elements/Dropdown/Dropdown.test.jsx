import { cleanup, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Dropdown from "./Dropdown";
import { mockDropdownOptions } from "../../../helpers/mocks/index";
import { Formik } from "formik";
import { EmployeeInitial } from "../../../helpers/initialValues/initialValues";

describe("Dropdown atomic component", () => {
	afterEach(cleanup);
	it("renders with props", () => {
		render(
			<Formik
				validate={jest.fn()}
				initialValues={EmployeeInitial}
				onSubmit={jest.fn()}
			>
				<Dropdown options={mockDropdownOptions} />
			</Formik>
		);
		const dropdownWrapper = screen.getByTestId("dropdown-wrapper");
		expect(dropdownWrapper).toBeInTheDocument();
	});
});
