import { getIn } from "formik";
import * as Yup from "yup";

export const phoneRegExpLk =
	/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

export const ValidationSchema = Yup.object().shape({
	first_name: Yup.string()
		.min(6, "Should be 6 character of min length")
		.max(10, "Should not be exceed 10 character of max length")
		.required("First name cannot be empty"),
	last_name: Yup.string()
		.min(6, "Should be 6 character of min length")
		.max(10, "Should not be exceed 10 character of max length")
		.required("Last name cannot be empty"),
	email: Yup.string().email("Invalid email").required("Email Required"),
	number: Yup.string().matches(phoneRegExpLk, "Invalid phone number"),
	gender: Yup.string().required("Required"),
});

export const getBorderStyles = (errors: any, fieldName: string) => {
	if (getIn(errors, fieldName)) {
		return {
			border: "1px solid red",
		};
	}
};
