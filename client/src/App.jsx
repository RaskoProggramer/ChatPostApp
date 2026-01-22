import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home'
import Create from './pages/createpost'

function App() {

  return (
    <div className='App'>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/createPost'>Create A Post</Link>
        </nav>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createPost' element={<Create/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
