import { useRef } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


type propsFormulario = {
	handleForm: React.Dispatch<React.SetStateAction<string>>
}

export default function FormularioLogin(props: propsFormulario) {
	// Component that renders the login form
	// The HTML blocks are created in functions to facilitate code readability and are called within the form in the function's return
	const invalidUser = useRef<HTMLDivElement>(null);
	const navigate = useNavigate()

	const activateValidAndInvalidFeedback = (username: string, password: string) => {
		const updateClassList = (elementId: string, isValid: boolean) => {
			const element = document.getElementById(elementId);
			if (element) {
				element.classList.remove('is-invalid');
				element.classList.toggle('is-invalid', !isValid);
			}
		};

		updateClassList('username', !!username);
		updateClassList('password', !!password);
	};

	//TODO: Quando erra sem nada e depois corrige ele nao some o is invalid
	// Function that checks if the user exists in the database
	const checkUser = () => {
		let formData = new FormData(document.getElementById('form__login') as HTMLFormElement);
		let username = formData.get('username') as string
		let password = formData.get('password') as string
		activateValidAndInvalidFeedback(username, password)
		let body = {
			login: formData.get('username'),
			password: formData.get('password')
		}
		axios.post('https://localhost/api/login', body, {timeout:  5000, withCredentials: true})
			.then((response) => {
				if (response.status === 200) {
					navigate('/game')
				}
			}).catch((error) => {
				if (error.response.status === 404) {
					invalidUser.current?.classList.add('d-block');
				}
			})
	}


	const Username_Password = () => {
		return (
			<>
				<div className="form-group mb-3">
					<label htmlFor="username">username</label>
					<input type="text" className="form-control my-2" name="username" id="username" placeholder="Login Name" />
				</div>

				<div className="form-group mb-3">
					<label htmlFor="password">password</label>
					<input type="password" className="form-control my-2" name="password" id="password" placeholder="Password" />
				</div>
			</>
		)
	}


	const ForgetPassword = () => {
		return (
			<div className='d-flex justify-content-between mb-5'>
				<a style={{ color: '#8c89a2' }} href="/">Forget your password?</a>
			</div>
		)
	}


	const Login_Register = () => {
		return (
			<div className='buttonsForm d-flex flex-column align-items-center'>
				<button type="button" className="btn btn-primary w-75 d-block mb-2" onClick={checkUser}>Login</button>
				<span className='div__signUp'
				>Need an account?
					<span className='singUp' onClick={() => props.handleForm('Register')}> Sign up </span>
				</span>
			</div>
		)
	}

	const PrintInvalidUser = () => {
		return (
			<div
			id='invalidUser'
			ref={invalidUser}
			style={{
				marginBottom: '1rem',
				color: '#b61758',
				display: 'none'
			}}
			>
				Invalid username or password
			</div>
		)
	}


	return (
		<>
			<form className='w-100' id='form__login'>
				{PrintInvalidUser()}
				{Username_Password()}
				{ForgetPassword()}
				{Login_Register()}
			</form>
		</>
	)
}
