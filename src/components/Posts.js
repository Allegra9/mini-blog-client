import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostCreate from './PostCreate'
import PostList from './PostList'

const Posts = () => {
  const [posts, setPosts] = useState({})

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts')
    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="container">
      <PostCreate fetchPosts={fetchPosts} />
      <hr />
      <PostList posts={Object.values(posts)} fetchPosts={fetchPosts} />
    </div>
  )
}
export default Posts
