import { cleanup, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import GridLayout from "./GridLayout";

describe("GridLayout molecular component", () => {
	afterEach(cleanup);
	it("renders GridLayout component", () => {
		render(<GridLayout data={[]} onEdit={jest.fn()} onDelete={jest.fn()} />);
		const gridLayoutWrapper = screen.getByTestId("grid-layout-wrapper");
		expect(gridLayoutWrapper).toBeInTheDocument();
	});
});
