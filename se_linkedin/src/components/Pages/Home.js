import React from 'react';
import PostList from '../Post_list';
import PostLoggedUser from './Posts_LoggedUser';
import DefaultLayout from '../layout/DefaultLayout';
import Paragraph from '../layout/Paragraph';


function Home() {

	const contentA = ` Introducing the Ultimate LinkedIn App for Software Developers!`

	const contentB=`Are you a software developer looking to take your career to new heights? Look no further! This cutting-edge LinkedIn app is specifically designed to cater to the needs of software developers like you.`

	const contentC= `This app provides a seamless networking experience, allowing you to expand your professional network .

	 Join the community of software developers who are already leveraging our app to achieve their career goals.
	 Start connecting, collaborating, and thriving in the software development industry like never before.
	Download now and let your software development career soar!`;
	// const [posts, setPosts] = useState([])
	// const [loggedInUser, setLoggedInUser] = useState('')


	// useEffect(() => {
	// 	fetch('/posts')
	// 		.then(res => res.json())
	// 		.then(posts => {
	// 			console.log(posts)
	// 			setPosts(posts)
	// 		})

	// 	fetch('/sessions')
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			if(data.result === 'successful') {
	// 				setLoggedInUser(data.name)
	// 			}
	// 		})
	// }, [])

	return (
		<DefaultLayout>
			<div style={{ textAlign: 'center' , backgroundColor:'pink', padding:'20px'}}>
				<h1 style={{ textDecoration: 'Highlight', fontFamily:"Bold", color:'blue', fontSize:'36px'}}>Welcome to Software Engineering LinkedIn App</h1>
				{/* <PostLoggedUser posts={posts} loggedInuser={loggedInUser}/>
				<PostList posts={posts} loggedInUser={loggedInUser} /> */}
				<Paragraph text={contentA}/>
				<Paragraph text={contentB}/>
				<Paragraph text={contentC}/>
			</div>
		</DefaultLayout>
	);
}

export default Home;
