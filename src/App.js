import React from 'react'
import Navbar from './components/Navbar/index'
import PostLists from './components/PostLists/index'
import Modals from './components/Modals/index'

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
  let [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <PostLists posts={posts} />
      {showModal && <Modals>
        <h1>Terms and Conditions</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </Modals>}
    </>
  )
}
