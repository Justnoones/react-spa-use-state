import React from 'react'
import './index.css'

export default function PostLists({posts}) {
    return (
        <div className='postList'>
          {posts.map(post => <div key={post.id} className='single-post'>{post.title}</div>)}
        </div>
      )
}
