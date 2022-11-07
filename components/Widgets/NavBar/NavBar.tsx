import { MouseEventHandler } from "react";
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
