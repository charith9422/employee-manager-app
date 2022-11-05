import { MouseEventHandler, ReactNode } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.scss";

type NavbarProps = {
	title: string;
	onTitleClick?: MouseEventHandler<HTMLLIElement>;
};
const NavigationBar: React.FC<NavbarProps> = ({ title, onTitleClick }) => {
	return (
		<ul className={styles.navBar}>
			<li onClick={onTitleClick}>{title}</li>
		</ul>
	);
};

export default NavigationBar;
