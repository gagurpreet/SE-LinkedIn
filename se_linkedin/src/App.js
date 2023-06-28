import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './components/Pages/Home'
import PostLoggedUser from './components/Pages/Posts_LoggedUser';
import SignUp from './components/Pages/Sign_up';
import AddPost from './components/Pages/Add_post';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import SearchComponent from './components/Pages/Search';
import SetLoggedInUser from './components/Pages/Login';

function App() {
	const [loggedInUser, setLoggedInUser] = useState('')
	const [posts, setPosts]=useState([])
	const [search, setSearch]= useState('')
	

	function getLoggedInUser(){
		fetch('/sessions')
			.then(res => res.json())
			.then(data => {
				if(data.user) 
				return setLoggedInUser(data.email)
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

	const handleSearch = (searchTerm) => {
		setSearch(searchTerm)

	}

	return (
		<>
			{loggedInUser}
			<Navbar loggedInUser={loggedInUser} />
			<Routes>
				<Route path='/Home' element={<Home  loggedInUser={loggedInUser} posts={posts}/> } />
				<Route path='/add_post' element={<AddPost loggedInUser={loggedInUser}  AddPost={AddPost}/>} />
				<Route path='/post_logged_user' element={<PostLoggedUser loggedInUser={loggedInUser} posts={posts}/>} />
				<Route path='/sign_up' element={<SignUp loggedInUser={loggedInUser} /> } />
				<Route path='/search_component' element={<SearchComponent onSearch={handleSearch} loggedInUser={loggedInUser}  posts={posts}/> } />
				<Route path='/log_in' element={<SetLoggedInUser loggedInUser={loggedInUser} posts={posts}/>} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
