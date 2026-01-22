import React from 'react';
import {Formik, Form, Field} from 'formik';

function createpost() {
  return (
    <div className='createPostPage'>
      <Formik>
        <Form className='formContainer'>
            <label>Title</label>
            <Field id="inputCreatePost" name='title' placeholder="Title"/>
            <label>Post</label>
            <Field id="inputCreatePost" name='post' placeholder="Whats on your Mind?"/>
            <label>Username</label>
            <Field id="inputCreatePost" name='username' placeholder="e.g Mpho"/>
            <button type='submit'>Create Post</button>
        </Form>
      </Formik>
    </div>
  )
}

export default createpost
