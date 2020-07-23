import React, {Component} from 'react';
import "./RegistrationForm.css"

class RegistrationForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			registrationStep: 0,
			lastName: '',
			firstName: '',
			patronymic: '',
			password1: '',
			password2: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.switchSteps = this.switchSteps.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	switchSteps = () => {
		this.setState(state => {
			if (this.state.registrationStep === 1) {
				return;
			}
			if (this.state.lastName && this.state.firstName && this.state.patronymic) {
				return {
					registrationStep: this.state.registrationStep++
				}
			}
		})
	};



	render() {
		return (
				<div className="RegistrationForm">
					<h3 className="RegistrationForm__title">Регистрация</h3>
					{this.state.registrationStep === 0 &&
					<form>
						<label>
							<div
									className="App-label">Фамилия</div>
							<input
									name="lastName"
									className="App-input RegistrationForm__input"
									type="text"
									value={this.state.lastName}
									onChange={this.handleInputChange}
							/>
						</label>
						<br />
						<label>
							<div
									className="App-label">Имя</div>
							<input
									name="firstName"
									className="App-input RegistrationForm__input"
									type="text"
									value={this.state.firstName}
									onChange={this.handleInputChange}
							/>
						</label>
						<br />
						<label>
							<div
									className="App-label">Отчество</div>
							<input
									name="patronymic"
									className="App-input RegistrationForm__input"
									type="text"
									value={this.state.patronymic}
									onChange={this.handleInputChange}
							/>
						</label>
					</form>
					}

					{this.state.registrationStep === 1 &&
					<form>
						<label>
							<div
									className="App-label">Пароль</div>
							<input
									name="password1"
									className="App-input RegistrationForm__input"
									type="password"
									autoComplete="current-password"
									value={this.state.password1}
									onChange={this.handleInputChange}
							/>
						</label>
						<br />
						<label>
							<div
									className="App-label">Повторите пароль</div>
							<input
									name="password2"
									className="App-input RegistrationForm__input"
									type="password"
									autoComplete="current-password"
									value={this.state.password2}
									onChange={this.handleInputChange}
							/>
						</label>
					</form>
					}

					<div className="App-button RegistrationForm__next-button" onClick={this.switchSteps}>Далее</div>
				</div>
		);
	}
}

export default RegistrationForm;
