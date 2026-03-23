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
import Pagenotfound from './pages/pagenotfound';

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
        <div className="navbar">
            <div className="links">
              <Link to="/"> Home Page</Link>
              <Link to="/createpost"> Create A Post</Link>
              {!authState.status && (
                <>
                  <Link to="/login"> Login</Link>
                  <Link to="/registration"> Registration</Link>
                </>
              )}
            </div>
            <div className="loggedInContainer">
              <h1>{authState.username} </h1>
              {authState.status && <button onClick={logout}> Logout</button>}
            </div>
          </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts' element={<Create/>}/>
          <Route path='/posts/:id' element={<Post/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Register/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
        </Routes>
      </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App