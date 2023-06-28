import React, { useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';

function SetLoggedInUser() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage ] = useState('')

	const loggedInUser = (event) => {
		event.preventDefault()
		const data = {
			email, 
			password
		}
		console.log(data)
		fetch('/sessions', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(res => {
				console.log(res)
				if(res.error){
					setErrorMessage(res.error)
				}else {
					
				}
			})
	}

	return(
		<DefaultLayout>
			<div style={{ textAlign: 'center' }}>
				<section className='log-in'>
					<form onSubmit={loggedInUser}>
						<h2 style={{ textDecoration: 'Highlight', fontFamily:"Bold", color:'blue'}}>Login:</h2>
						<fieldset>
							<label htmlFor="email">Email:</label>
							<input type="text" id='email' 
							value={email} 
							onChange={event => setEmail(event.target.value)} />
						</fieldset>
						<fieldset>
							<label htmlFor="password">Password:</label>
							<input type="password" id='password' 
							value={password} 
							onChange={event => setPassword(event.target.value)} />
						</fieldset>
						<button type='submit'>Log in</button>
					</form>
					{errorMessage && <h2 style={{ color: 'red' }}> {errorMessage}</h2>}
				</section>
			</div>
		</DefaultLayout>
	);
}

export default SetLoggedInUser;
