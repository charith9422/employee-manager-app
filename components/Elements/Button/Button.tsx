import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";
import Button from "react-bootstrap/Button";

type ButtonProps = {
	buttonText: string;
	onBtnClick?: MouseEventHandler<HTMLButtonElement>;
	variant?: string;
};
const CustomButton: React.FC<ButtonProps> = ({
	buttonText,
	onBtnClick,
	variant,
}) => {
	return (
		<div className={styles.btnWrapper} data-testid="button-wrapper">
			<Button onClick={onBtnClick} variant={variant}>
				{buttonText}
			</Button>
		</div>
	);
};

export default CustomButton;
