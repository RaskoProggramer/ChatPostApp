import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Create from './pages/createpost';
import Post from './pages/post';

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/createPost'>Create A Post</Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createPost' element={<Create/>}/>
          <Route path='/posts/:id' element={<Post/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App