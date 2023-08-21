import React from 'react'
import Navbar from './components/Navbar/index'
import PostsList from './components/PostsLists/index'
import Modal from './components/Modal/index'
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
      <Modal>
            {/* modal content */}
            <h1>Zoom class is available now</h1>
            <p>free to <a href='#'>join</a> here</p>
      </Modal>
    </>
  )
}
