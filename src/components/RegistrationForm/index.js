import React, {Component} from 'react';
import "./RegistrationForm.css"

class RegistrationForm extends Component {
	render() {
		return (
				<div className="RegistrationForm">
					<h3 className="RegistrationForm__title">Регистрация</h3>
					<div className="App-button RegistrationForm__next-button">Далее</div>
				</div>
		);
	}
}

export default RegistrationForm;
