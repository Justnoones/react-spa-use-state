import React from 'react'
import Navbar from './components/Navbar/index'
import PostLists from './components/PostLists/index'
import Modal from './components/Modals/index'

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
  ])
  return (
    <>
      <Navbar />
      <PostLists posts={posts} />
      <Modal>
        {/* modal content */}
        <h1>Zoom class is available now</h1>
        <p>free to <a href='#'>join</a> here</p>
      </Modal>
    </>
  )
}
