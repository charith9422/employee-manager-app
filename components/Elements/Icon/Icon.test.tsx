import { cleanup, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Icon from "./Icon";

describe("Icon atomic component", () => {
	afterEach(cleanup);
	it("renders icon component without props", () => {
		render(<Icon icon={undefined} />);
		const iconWrapper = screen.getByTestId("icon");
		expect(iconWrapper).toBeInTheDocument();
	});
});
