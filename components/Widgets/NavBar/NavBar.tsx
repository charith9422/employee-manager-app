import { MouseEventHandler, ReactNode } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

type NavbarProps = {
	brandName: string;
	onBrandClick?: MouseEventHandler<HTMLButtonElement>;
};
const NavigationBar: React.FC<NavbarProps> = ({ brandName, onBrandClick }) => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
			className="nav-wrapper"
		>
			<Container>
				<Navbar.Brand className="nav-brand" onClick={onBrandClick}>
					{brandName}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
