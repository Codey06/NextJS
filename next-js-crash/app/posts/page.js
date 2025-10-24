import Link from 'next/link'
import React from 'react'

const PostsPage = async () => {
      const posts=await fetch(`http://localhost:3000/api/post`)
      const postsData =await posts.json()
  return (
    <>
{
  postsData.map((post) =>(
    <div key={post.id}>
      <Link href={`/posts/${post.id}`} className="list-item">{post.body}</Link>
    </div>
  ))
 }

    </>
  )
}

export default PostsPage
