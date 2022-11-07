import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";
import Button from "react-bootstrap/Button";
import { buttonRoundedStyle } from "../../../helpers/common";

type ButtonProps = {
	buttonText?: string;
	onBtnClick?: MouseEventHandler<HTMLButtonElement>;
	variant?: string;
	isRounded?: boolean;
	icon?: React.ReactNode;
};
const CustomButton: React.FC<ButtonProps> = ({
	buttonText,
	onBtnClick,
	variant,
	isRounded,
	icon,
}) => {
	return (
		<div className={styles.btnWrapper} data-testid="button-wrapper">
			<Button
				onClick={onBtnClick}
				variant={variant}
				style={isRounded ? buttonRoundedStyle : {}}
			>
				{icon}
				{buttonText}
			</Button>
		</div>
	);
};

export default CustomButton;
