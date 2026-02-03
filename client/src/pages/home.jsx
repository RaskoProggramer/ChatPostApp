import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function home() {
    const [listOfPosts, setListOfPosts] = useState([]);
    let history = useNavigate();
    useEffect(() =>{
      try {
        axios.get("http://localhost:3001/posts").then((response) => {
        setListOfPosts(response.data);
        });
      } catch (error) {
        console.log(error)
      }
       
    }, []);

    return (
        <div>
        {listOfPosts.map((value, key) =>{
        return (
          <div className='post' key={key} onClick={() => {history(`/posts/${value.id}`)}}>
            <div className='title'>{value.title}</div>
            <div className='body'>{value.postText}</div>
            <div className='footer'>{value.username}</div>
          </div>
        )
      })}
    </div>
  )
}

export default home
