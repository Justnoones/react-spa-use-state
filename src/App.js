import React from 'react'
import { useState } from 'react'

export default function App() {
  let [posts, setPosts] = useState([
    {
      id : 1,
      title : "First Title"
    },
    {
      id : 2,
      title : "Second Title"
    },
    {
      id : 3,
      title : "Third Title"
    },
  ])
  let deletePost = id => {
    setPosts(prevState => prevState.filter(post => post.id != id));
  }
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {/* "!!" returns bollean value */}
        {/* true && console.log("hello world"); // hello world */}
        {/* fakse && console.log("hello world"); // false */}
        {!!posts.length && posts.map(post => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
        {!posts.length && <p>No Posts Available</p>}
      </ul>
    </div>
  )
}
