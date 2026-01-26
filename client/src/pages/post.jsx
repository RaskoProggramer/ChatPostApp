import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function post() {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/ById/${id}`).then((response) => {
        setPostObject(response.data);
    });
    }, []);

  return (
    <div className='postPage'>
        <div className='leftSide'>
            <div className='post'id="individual">
                <div className='title'>{postObject.title}</div>
                <div className='body'>{postObject.postText}</div>
                <div className='footer'>{postObject.username}</div>
            </div>
        </div>
        <div className='rightSide'>
            <p>comment section</p>
        </div>
    </div>
  )
}

export default post
