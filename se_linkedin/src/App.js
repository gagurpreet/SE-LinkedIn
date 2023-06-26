import Home from './components/Home'
import PostLoggedUser from './components/Posts_LoggedUser';
import './App.css';
import {Link } from 'react-router-dom'

function App() {
  return (

    <div>
      <Home/>
      <PostLoggedUser/>
      <nav>
        <Link to= "/Home"> Home </Link>
        <Link to="/PostLoggedUser">PostLoggedUser:</Link>
      </nav>
    </div>
      
   
  );
}

export default App;
