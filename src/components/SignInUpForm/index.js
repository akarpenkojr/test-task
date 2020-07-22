import React, {Component} from 'react';
import RegistrationForm from "../RegistrationForm";
import SignInForm	from "../SignInForm"
import "./SignInUpForm.css"

class SignInUpForm extends Component {

	render() {
		return (
				<div className="FormBody">
					<RegistrationForm />
					<SignInForm />

				</div>
		);
	}
}

export default SignInUpForm;
