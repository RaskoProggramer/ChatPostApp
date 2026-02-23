import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Create from './pages/createpost';
import Post from './pages/post';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='navbar'>
          <Link to='/'>Home</Link>
          <Link to='/createPost'>Create A Post</Link>
          <Link to='/login'>Login</Link>
          <Link to='/registration'>Registration</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createPost' element={<Create/>}/>
          <Route path='/posts/:id' element={<Post/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App