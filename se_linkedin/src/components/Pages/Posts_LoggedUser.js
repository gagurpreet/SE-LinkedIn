import React from 'react'

function PostLoggedUser({ posts, loggedInuser }) {
	return (
		<div>
			<h2>Posts: </h2>
			{posts && posts.map(post => (
			<div key={post.id}>
				<h3>{post.name}</h3>
				<p>{post.message}</p>
				<p>{post.skills}</p>
			</div>
			))}
			{loggedInuser && <p> Logged in as: {loggedInuser}</p>}
		</div>
	)
}

export default PostLoggedUser;