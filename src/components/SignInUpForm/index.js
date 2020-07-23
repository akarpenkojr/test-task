import React, {Component} from 'react';
import RegistrationForm from "../RegistrationForm";
import SignInForm	from "../SignInForm"
import "./SignInUpForm.css"
import "../App/App.css"

class SignInUpForm extends Component {

	state = {
		isRegistrationForm: true
	};

	render() {
		const usingForm = this.state.isRegistrationForm ? <RegistrationForm /> : <SignInForm />;
		const buttonTitle = this.state.isRegistrationForm ? 'Вход' : 'Регистрация';
		return (
				<div className="FormArea">
					<div className="FormArea__input-area">{usingForm}</div>
					<div className="App-button FormArea__button" onClick={this.switchForms}>{buttonTitle}</div>
				</div>
		);
	};

	switchForms = () => {
		this.setState(state => {
			return {
				isRegistrationForm: !this.state.isRegistrationForm
			}
		})
	}
}

export default SignInUpForm;
