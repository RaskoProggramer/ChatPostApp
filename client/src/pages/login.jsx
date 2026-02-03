import React, {useState} from 'react';
import axios from 'axios';

function login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        
        try {
            const data = {username: username, password: password};
            axios.post('http://localhost:3001/auth/login', data).then((response) => {
            console.log(response.data);
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
      <button onClick={login}>Loging</button>
    </div>
  )
}

export default login
