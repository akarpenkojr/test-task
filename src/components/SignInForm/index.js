import React, {Component} from 'react';
import "./SignInForm.css"
import "../App/App.css"

class SignInForm extends Component {
	render() {
		return (
				<div className="SignInForm">
					<h3 className="SignInForm__title">Вход</h3>
					<div className="App-button SignInForm__next-button">Далее</div>
				</div>
		);
	}
}

export default SignInForm;
