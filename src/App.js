import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index'
import Modal from './components/Modal'
import PostsList from './components/PostList/index'
import PostForm from './components/PostForm/index'
//hook - useStateHook
function App() {
  let [showModal, setShowModal] = useState()
  let [name, setName]= useState("Yee Yee Mon") // return array [getter, setterFun]
  //let [name, setName] array destructuring format

  let[posts, setPosts] = useState([
    {
      id : 1,
      title : "first Post",
      status : "blocked",
    },
    {
      id : 2,
      title : "Second Post",
      status : "upcoming",
    },

  ])

  let addPost = (post)=>{
    setPosts(prevState => [...prevState, post])
    setShowModal(false)
  }
  
  return (
    // react fragement
    <> 
   <Navbar setShowModal={setShowModal} />
   <PostsList posts={posts}/>
    {showModal && 
      <Modal setShowModal={setShowModal}> 
        <PostForm addPost={addPost}/>
      </Modal>}
    
   </>
  );
}

// what is virtual DOM


export default App;
