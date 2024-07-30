import axios from 'axios';
import './Login.css';
import React, { useRef } from 'react';
import { TiArrowBack } from "react-icons/ti";


type propsFormulario = {
	handleForm: React.Dispatch<React.SetStateAction<string>>
}

export default function Formulario(props: propsFormulario) {
	// Component that renders the register form
	// The HTML blocks are created in functions to facilitate code readability and are called within the form in the function's return

	const usernameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmPasswordRef = useRef<HTMLInputElement>(null);
	let was_wrong: boolean = false;

	const activateFeedback = () => {
		const updateClassList = (element: React.RefObject<HTMLInputElement>, isValid: boolean) => {
			if (element) {
				element.current?.classList.toggle('is-invalid', !isValid);
			}
		};

		updateClassList(usernameRef, !!usernameRef.current?.value);
		updateClassList(emailRef, !!emailRef.current?.value);
		updateClassList(passwordRef, !!passwordRef.current?.value);
		updateClassList(confirmPasswordRef, !!confirmPasswordRef.current?.value);
	};


	const registerUser = (event: React.MouseEvent<HTMLButtonElement>) => {
		let username = usernameRef.current?.value as string
		let email = emailRef.current?.value as string
		let password = passwordRef.current?.value as string
		let confirmPassword = confirmPasswordRef.current?.value as string

		activateFeedback()
		if (password !== confirmPassword) {
			confirmPasswordRef.current?.classList.add('is-invalid');
			return alert('Passwords do not match')
		}

		let body = {
			login: username,
			password: password,
			email: email
		}

		axios.post('https://localhost/api/login/register', body)
			.then((response) => {
				if (response.status === 201) {
					props.handleForm('Login')
				}
				console.log(response)
			}).catch((error) => {
				if (error.status === 209) {

				}
			})
	}

	const validateEqualPasswords = () => {
		if (passwordRef.current && confirmPasswordRef.current) {
			const password = passwordRef.current.value;
			const confirmPassword = confirmPasswordRef.current.value;

			if (password === confirmPassword) {
				confirmPasswordRef.current.classList.remove('is-invalid');
				confirmPasswordRef.current.classList.add('is-valid');
				passwordRef.current.classList.add('is-valid');
				was_wrong = false;
			} else if (!was_wrong) {
				was_wrong = true;
				confirmPasswordRef.current.classList.add('is-invalid');
				passwordRef.current.classList.remove('is-valid');
			}
		}
	}


	const FieldsForm = () => {
		return (
			<>
				<div className="form-group mb-3">
					<label htmlFor="username">username</label>
					<input
						id="username"
						ref={usernameRef}
						type="text"
						className="form-control my-2"
						placeholder="Login Name"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">email address</label>
					<input
						id="email"
						ref={emailRef}
						type="email"
						className="form-control"
						placeholder="name@example.com"
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="password">password</label>
					<input
						ref={passwordRef}
						id="password"
						type="password"
						className="form-control my-2"
						placeholder="Password"
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="confirmPassword">confirm password</label>
					<input
						id="confirmPassword"
						ref={confirmPasswordRef}
						type="password"
						className="form-control my-2"
						placeholder="Confirm Password"
						onChange={validateEqualPasswords}
					/>
				</div>
			</>
		)
	}


	const Login_Register = () => {
		return (
			<div className='buttonsForm d-flex flex-column align-items-center'>
				<button type="button" className="btn btn-primary w-75 d-block mt-3" onClick={registerUser}>Register</button>
				<span className='div__signUp' id='sign_in__register'>Have an account?
					<span className='singUp' onClick={() => props.handleForm('Login')}> Sign in </span>
				</span>
			</div>
		)
	}


	return (
		<form className='w-100' id='form__register'>
			<div className='to__back__login' onClick={() => props.handleForm('Login')}>
				<TiArrowBack color='white' size={25} />
			</div>
			{FieldsForm()}
			{Login_Register()}
		</form>
	)
}
