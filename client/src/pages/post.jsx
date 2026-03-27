import React, {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../helpers/AuthContext';
import { useNavigate } from 'react-router-dom';

function Post() {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const {authState } = useContext(AuthContext);
    let history = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/ById/${id}`).then((response) => {
        setPostObject(response.data);
    });
        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
        setComments(response.data);
    });
    }, []);

    const addcomment = () => {
        try {
           axios.post("http://localhost:3001/comments", 
            {PostId: id , comment : newComment},
        {
            headers: {
                accessToken: localStorage.getItem('accessToken'),
            }
        }).then((response) => {
            if (response.data.error){
                alert(response.data.error)
            }
            const commentToAdd = {comment: newComment, username: response.data.username};
            setComments([...comments, commentToAdd])
            setNewComment("");
        }); 
        } catch (error) {
          console.log(error);  
        }   
    }

    const deleteComment = (id) => {
            axios.delete(`http://localhost:3001/comments/${id}`, {
                headers: {
                    accessToken: localStorage.getItem('accessToken'),
                }
            }).then(() => {
                setComments(comments.filter((val) => {
                    return val.id !== id;
                }));
            });
    };

    const deletePost = (id) => {
        axios.delete(`http://localhost:3001/posts/${id}`, {
            headers: {
                accessToken: localStorage.getItem('accessToken'),
            }
        }).then(() => {
            history('/');
        }
        );
    }

  return (
    <div className='postPage'>
        <div className='leftSide'>
            <div className='post'id="individual">
                <div className='title'>{postObject.title}</div>
                <div className='body'>{postObject.postText}</div>
                <div className='footer'>{postObject.username}
                    {authState.username === postObject.username && (
                        <button onClick={deletePost(postObject.id)}>{""} Delete</button>)}
                </div>
            </div>
        </div>
        <div className='rightSide'>
            <div className='addCommentContainer'>
                <input type='text'
                placeholder='Comment...'
                autoComplete='off'
                value={newComment}
                onChange={(event) => {
                    setNewComment(event.target.value);
                }}
                />
                <button onClick={addcomment}>Add Comment</button>
            </div>
            <div className='listOfComments'>
                {comments.map((comment, key) => {
                    return (
                        <div key={key} className='comment'>
                            {comment.comment}<br></br>
                            <label>Username: {comment.username}</label>
                            {authState.username === comment.username && (
                                <button onClick={() => {deleteComment(comment.id);}}>
                                    X
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Post;
