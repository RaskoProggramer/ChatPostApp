import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
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

    const likeAPost = (postId) => {
      try {
        axios.post("http://localhost:3001/likes", {PostId: postId}, {
          headers: {
            accessToken: localStorage.getItem('accessToken'),
          }
        }).then((response) => {
          setListOfPosts(
            listOfPosts.map((post) => {
              if (post.id === postId) {
                // Ensure Likes is always an array
                const likes = post.Likes || [];

                if (response.data.liked) {
                  return {
                    ...post,
                    Likes: [...likes, 0],
              };
            } else {
                return {
                  ...post,
                  Likes: likes.slice(0, -1),
                };
              }
            }
          return post;
          })
        );
        });
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div>
        {listOfPosts.map((value, key) =>{
        return (
          <div className='post' key={key}>
            <div className='title'>{value.title}</div>
            <div className='body' onClick={() => {history(`/posts/${value.id}`)}}>{" "}{value.postText}</div>
            <div className='footer'>{value.username}<button onClick={() => likeAPost(value.id)}>{" "}Like</button>
            <label>{value.Likes.length}</label></div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
