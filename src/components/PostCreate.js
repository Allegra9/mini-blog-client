import React, { useState } from 'react'
import axios from 'axios'

const PostCreate = ({ fetchPosts }) => {
  const [title, setTitle] = useState('')

  const onSubmit = async event => {
    event.preventDefault()
    await axios.post('http://posts.com/posts/create', {
      title
    })
    setTitle('')
    await fetchPosts()
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default PostCreate
