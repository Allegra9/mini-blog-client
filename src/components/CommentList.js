import React from 'react'

const contentWithState = comment => {
  const { state, content } = comment
  if (state === 'pending') return 'pending moderation'
  if (state === 'rejected') return 'comment suspended'
  return content
}

const CommentList = ({ comments }) => {
  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{contentWithState(comment)}</li>
  })

  return <ul>{renderedComments}</ul>
}

export default CommentList
