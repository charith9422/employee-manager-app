import { cleanup, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import TableLayout from "./TableLayout";

describe("TableLayout molecular component", () => {
	afterEach(cleanup);
	it("renders TableLayout component", () => {
		render(<TableLayout data={[]} onEdit={jest.fn()} onDelete={jest.fn()} />);
		const tableLayoutWrapper = screen.getByTestId("table-layout-wrapper");
		expect(tableLayoutWrapper).toBeInTheDocument();
	});
});
