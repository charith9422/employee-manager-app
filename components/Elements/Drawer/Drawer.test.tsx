import { cleanup, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Drawer from "./Drawer";

describe("Drawer atomic component", () => {
	afterEach(cleanup);
	it("renders Drawer component", () => {
		render(<Drawer isGrid={false} setIsGrid={jest.fn()} />);
		const drawerWrapper = screen.getByTestId("drawer-wrapper");
		expect(drawerWrapper).toBeInTheDocument();
	});
});
