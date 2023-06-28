import React, { useState } from 'react';
import PostLoggedUser from './Posts_LoggedUser';
import DefaultLayout from '../layout/DefaultLayout';

function AddPost({PostLoggedUser, PostList}) {
	const [name, setName ] = useState('')
	const [message, setMessage ] = useState('')
	const [skills, setSkills] = useState('')


	const createPost = (event) => {
		event.preventDefault()
		const data = {
			name,
			message,
			skills
		}

		fetch('/posts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' }, 
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(post => {
				console.log(post)
				// setPosts(posts => [...posts, post])
				// PostList()
				// PostLoggedUser()
			})
	}


	return (
		<DefaultLayout>
			<div style={{ textAlign: 'center' }}>
				<section className='create-post'>
					<form onSubmit={createPost}>
						<h2 style={{ textDecoration: 'Highlight', fontFamily:"Bold", color:'blue'}}>Add Post to Linkedin Account</h2>
						<fieldset>
							<label htmlFor="name">Name:</label>
							<input type="text" id='name' 
							value={name}
							onChange={event => setName(event.target.value)} />
						</fieldset>
						<fieldset>
							<label htmlFor="message">Message:</label>
							<textarea id="message"  
							value={message}
							onChange={event => setMessage(event.target.value)} cols='30' rows='10'>
							</textarea>
						</fieldset>
						<fieldset>
							<label htmlFor="skills">Skills:</label>
							<input type="text"  id='skills'
							value={skills}
							onChange={event => setSkills(event.target.value)} />
						</fieldset>
						<button type='submit'>Add Post</button>
					</form>	
				</section>
			</div>
		</DefaultLayout>
	);
}

export default AddPost;