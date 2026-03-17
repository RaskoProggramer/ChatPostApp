import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Create from './pages/createpost';
import Post from './pages/post';
import Login from './pages/login';
import Register from './pages/register';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './helpers/AuthContext';

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false});

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({...authState, status: false});
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({username: "", id: 0, status: false});
  }

  return (
    <div className='App'>
      <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
        <div className='navbar'>
          <Link to='/'>Home</Link>
          <Link to='/posts'>Create A Post</Link>
          {!authState.status ? (
              <>
                <Link to="/login"> Login</Link>
                <Link to="/registration"> Registration</Link>
              </>
            ) : (
              <button onClick={logout}>Logout</button>
            )}
          </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts' element={<Create/>}/>
          <Route path='/posts/:id' element={<Post/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Register/>}/>
        </Routes>
      </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App