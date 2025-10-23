import React from 'react'

const PostInfoPage = async ({params}) => {
    const post=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postInfo=await post.json()
    return (
    <div>
      <h1>PostInfoPage {params.id} </h1>
      <span>{postInfo.body}</span>
    </div>
  )
}

export default PostInfoPage
