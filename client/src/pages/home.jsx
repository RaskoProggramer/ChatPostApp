import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { AuthContext } from '../helpers/AuthContext';

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);
    let history = useNavigate();
    const { authState } = React.useContext(AuthContext);

   
    useEffect(() =>{
      try {
        if (!localStorage.getItem('accessToken')) {
        history('/login');
      }else {
        axios.get("http://localhost:3001/posts", {
          headers: {
            accessToken: localStorage.getItem('accessToken'),
          }
        }).then((response) => {
        setListOfPosts(response.data.allPosts);
        setLikedPosts(response.data.liked.map((post) => {
          return post.Likes.map((like) => like.UserId);
        }).flat()
       );
      });
    }
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
        if (likedPosts.includes(postId)) {
          setLikedPosts(
            likedPosts.filter((id) => {
              return id != postId;
            })
          );
        } else {
          setLikedPosts([...likedPosts, postId]);
        }
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
            <div className="footer">
              <div className="username">{value.username}</div>
              <div className="buttons">
                <ThumbUpIcon
                  onClick={() => {
                    likeAPost(value.id);
                  }}
                  className={
                    likedPosts.includes(value.id) ? "likeBttn" : "unlikeBttn"
                  }
                />

                <label> {value.Likes.length}</label>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
