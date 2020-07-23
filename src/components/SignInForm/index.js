import React, {Component} from 'react';
import "./SignInForm.css"
import "../App/App.css"

class SignInForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
			password: '',
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}


	render() {
		return (
				<div className="SignInForm">
					<h3 className="SignInForm__title">Вход</h3>
					<form>
						<label>
							<div
									className="App-label">Почта</div>
							<input
									name="login"
									type="email"
									className="App-input SignInForm__input"
									value={this.state.login}
									onChange={this.handleInputChange}
							/>
						</label>
						<br />
						<label>
							<div
									className="App-label">Пароль</div>
							<input
									name="password"
									type="text"
									className="App-input SignInForm__input"
									value={this.state.password}
									onChange={this.handleInputChange}
							/>
						</label>
					</form>

					<div className="App-button SignInForm__next-button">Далее</div>
				</div>
		);
	}
}

export default SignInForm;
