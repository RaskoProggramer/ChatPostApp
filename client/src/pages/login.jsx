import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let history = useNavigate();

    const login = () => {
        
        try {
            const data = {username: username, password: password};
            axios.post('http://localhost:3001/auth/login', data).then((response) => {
            if (response.data.error) {
              alert(response.data.error);
            } else{
              localStorage.setItem("accessToken", response.data);
              history("/");
            }
        }); 
        } catch (error) {
           console.log(error) 
        }
    }
  return (
    <div className="loginContainer">
        <label>Username: </label>
        <input type="text" onChange={(event) => {setUsername(event.target.value);}}/>
        <label>Password:</label>
        <input type='password' onChange={(event) => {setPassword(event.target.value)}}/>
      <button onClick={login}>Log In</button>
    </div>
  )
}

export default login
