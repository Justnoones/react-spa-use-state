import React from 'react'
import Navbar from './components/Navbar/index'
import PostsList from './components/PostsLists/index'
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
    }
  ]);
  return (
    // react fragment
    <>
      <Navbar />
      {/* exports props */}
      <PostsList posts={posts} testData="test data" />
    </>
  )
}
