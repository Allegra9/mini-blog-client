import React from 'react'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'
import styled from 'styled-components'

const PostList = ({ posts }) => {
  const renderedPosts = posts.map(post => {
    return (
      <PostCard className="card" key={post.id}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </PostCard>
    )
  })

  return (
    <div>
      <h1>Posts</h1>
      <Posts>{renderedPosts}</Posts>
    </div>
  )
}

export default PostList

const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const PostCard = styled.div`
  margin: 0 20px 20px 0;
`
