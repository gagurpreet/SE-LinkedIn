import Navbar from './components/layout/NavBar';
import Home from './components/Pages/Home'
import PostLoggedUser from './components/Pages/Posts_LoggedUser';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/Sign_up';
import AddPost from './components/Pages/Add_post';
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/add_post' element={<AddPost />} />
				<Route path='/Posts_loggedUser' element={<PostLoggedUser />} />
				<Route path='/sign_up' element={<SignUp />} />
				<Route path='/log_in' element={<Login />} />
			</Routes>
			
		</>
	);
}

export default App;
