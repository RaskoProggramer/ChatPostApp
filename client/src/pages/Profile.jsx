import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
    let {id} = useParams();
    const [username, setUsername] = useState("");
    const [listOfPosts, setListOfPosts] = useState([]);
    let history = useNavigate();
    
    useEffect(() => {
      axios.get(`http://localhost:3001/auth/basicInfo/${id}`).then((response) => {
      setUsername(response.data.username);
    });

    axios.get(`http://localhost:3001/posts/ByUserId/${id}`).then((response) => {
      setListOfPosts(response.data);
    });
    }, [id])

  return (
    <div className='profilePageContainer'>
      <div className='basicInfo'>
        {" "}
        <h1>UserName: {username}</h1>
      </div>
      <div className='listOfPost'>
        {listOfPosts.map((value, key) =>{
                return (
                  <div className='post' key={key}>
                    <div className='title'>{value.title}</div>
                    <div className='body' onClick={() => {history(`/posts/${value.id}`)}}>{" "}{value.postText}</div>
                    <div className="footer">
                      <div className="username">{value.username}</div>
                      <div className="buttons">
                        <label> {value.Likes.length}</label>
                      </div>
                    </div>
                  </div>
                )
              })}
      </div>
    </div>
  )
}

export default Profile
