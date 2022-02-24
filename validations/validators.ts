import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
type Params = {
	email: string;
	password: string;
};
type Errors = {
	email?: string;
	password?: string;
};

export function signinValidator({ email, password }: Params) {
	const errors: Errors = {};

	if (!isEmail(email)) {
		errors.email = "Email is not valid";
	}

	if (!password.length) {
		errors.password = "Password is required";
	}

	//   if (!isStrongPassword(password)) {
	//     errors.password = "Password is not Strong";
	//   }

	return {
		errors,
		isValid: () => Object.keys(errors).length === 0,
	};
}
