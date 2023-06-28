import React from 'react'
import DefaultLayout from '../layout/DefaultLayout';

function PostLoggedUser({ posts, loggedInuser }) {
	return (
		<DefaultLayout>
			<div  style={{ textAlign: 'center' }}>
				<h1 style={{ textDecoration: 'Highlight', fontFamily:"Bold", color:'blue'}}>Posts: </h1>
				
				{posts && posts.map(post => (
				<div key={post.id}>
					<h3 style={{ textDecoration: 'Underline', fontFamily:"Arial", color:'green'}}> {post.name}'s Post</h3>
					<p style={{ textDecoration: 'plain', fontFamily:"Italian", color:'blue'}}>Post Message: {post.message}</p>
					<p style={{ textDecoration: 'dotted', fontFamily:"cursive", color:'blue'}}>Skills Gained: {post.skills}</p>
				</div>
				))}
				
				{loggedInuser && <p> Logged in as: {loggedInuser}</p>}
			</div>
		</DefaultLayout>	
	)
}

export default PostLoggedUser;