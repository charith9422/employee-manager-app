import { cleanup, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button atomic component", () => {
	afterEach(cleanup);
	it("renders Button component", () => {
		render(<Button buttonText={"Test button"} />);
		const buttonWrapper = screen.getByTestId("button-wrapper");
		expect(buttonWrapper).toBeInTheDocument();
	});
});
