import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
	buttonText: string;
	onBtnClick?: MouseEventHandler<HTMLButtonElement>;
	color?: string;
	variant?: string;
};
const Button: React.FC<ButtonProps> = ({
	buttonText,
	onBtnClick,
	color,
	variant,
}) => {
	return (
		<button className={styles.btnWrapper} onClick={onBtnClick}>
			{buttonText}
		</button>
	);
};

export default Button;
