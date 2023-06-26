import React, { useEffect, useState } from 'react';
import PostList from './Post_list';
import PostLoggedUser from './Posts_LoggedUser';


function Home() {
	const [posts, setPosts] = useState([])
	const [loggedInUser, setLoggedInUser] = useState('')


	useEffect(() => {
		fetch('/api/posts')
			.then(res => res.json())
			.then(posts => {
				setPosts(posts)
			})

		fetch('/api/sessions')
			.then(res => res.json())
			.then(data => {
				if(data.result === 'successful') {
					setLoggedInUser(data.email)
				}
			})
	}, [])

	return (
		<div>
			<h1>Welcome to Software Enggineering LinkedIn</h1>
			<PostLoggedUser posts={posts} loggedInuser={loggedInUser}/>
			<PostList posts={posts} loggedInUser={loggedInUser} />
		</div>
	);
}

export default Home;
