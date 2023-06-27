import React, { useState } from 'react';

function SignUp({setLoggedInUser, PostList}) {
	const [name, setName] = useState('')
	const [email, setEmail]= useState('')
	const [password, setPassword] = useState('')

	const signUp = (event) => {
		event.preventDefault()
		const data = {
			name,
			email,
			password
		}

		fetch('http://localhost:3001/api/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(user => {
				setLoggedInUser(user)
				PostList()
			})
			.catch(error =>{
				console.error('Error:', error)
			})
	}

	return(
		<section className='sign-up'>
			<form onSubmit={signUp}>
				<h2>Sign Up:</h2>
				<fieldset>
					<label htmlFor="name">Name:</label>
					<input type="text" id='name'
					value={name}
					onChange={event => setName(event.target.value)} />
				</fieldset>
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
				<button type='submit'>Sign Up</button>
			</form>
		</section>
	);
}

export default SignUp;