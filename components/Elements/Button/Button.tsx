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
		<Button onClick={onBtnClick} variant={variant}>
			{buttonText}
		</Button>
	);
};

export default CustomButton;
