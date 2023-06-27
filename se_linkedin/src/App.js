import Navbar from './components/layout/NavBar';
import Home from './components/Pages/Home'
import PostLoggedUser from './components/Pages/Posts_LoggedUser';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/Sign_up';
import AddPost from './components/Pages/Add_post';
import searchComponent from './components/Pages/Search';
import Profile from './components/Pages/Profile'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Search } from '@mui/icons-material';

function App() {
	const [loggedInUser, setLoggedInUser] = useState('')
	const [posts, setPosts]=useState([])
	

	function getLoggedInUser(){
		fetch('/sessions')
			.then(res => res.json())
			.then(data => {
				if(data.user) 
				return setLoggedInUser(data.user.name)
			})
	}

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

	useEffect(getLoggedInUser, [setLoggedInUser])

	return (
		<>
			<Navbar loggedInUser={loggedInUser} />
			<Routes>
				<Route path='/Home' element={<Home  loggedInUser={loggedInUser} posts={posts}/> } />
				<Route path='/add_post' element={<AddPost loggedInUser={loggedInUser} />} />
				<Route path='/post_logged_user' element={<PostLoggedUser loggedInUser={loggedInUser} posts={posts}/>} />
				<Route path='/sign_up' element={<SignUp loggedInUser={loggedInUser} /> } />
				<Route path='/search_component' element={<Search loggedInUser={loggedInUser} /> } />
				<Route path='/log_in' element={<Login loggedInUser={loggedInUser} posts={posts}/>} />
			</Routes>
			
		</>
	);
}

export default App;
