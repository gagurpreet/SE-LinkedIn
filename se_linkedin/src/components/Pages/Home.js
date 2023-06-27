import React, { useEffect, useState } from 'react';
import PostList from '../Post_list';
import PostLoggedUser from './Posts_LoggedUser';


function Home() {
	const [posts, setPosts] = useState([])
	const [loggedInUser, setLoggedInUser] = useState('')


	useEffect(() => {
		fetch('/posts')
			.then(res => res.json())
			.then(posts => {
				setPosts(posts)
			})

		fetch('/sessions')
			.then(res => res.json())
			.then(data => {
				if(data.result === 'successful') {
					setLoggedInUser(data.name)
				}
			})
	}, [])

	return (
		<div>
			<h1>Welcome to Software Engineering LinkedIn App</h1>
			<PostLoggedUser posts={posts} loggedInuser={loggedInUser}/>
			<PostList posts={posts} loggedInUser={loggedInUser} />
		</div>
	);
}

export default Home;
