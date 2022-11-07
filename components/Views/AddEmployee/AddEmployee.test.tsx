import { cleanup, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import AddEmployee from "./AddEmployee";

describe("AddEmployee molecular component", () => {
	afterEach(cleanup);
	xit("renders AddEmployee component", () => {
		render(<AddEmployee />);
		const addEmployeeWrapper = screen.getByTestId("add-employee-wrapper");
		expect(addEmployeeWrapper).toBeInTheDocument();
	});
});
