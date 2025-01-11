import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index'
import PostsList from './components/PostList/index';
import Modal from './components/Modal/index';

//hook - useStateHook
function App() {
  let [showModal, setShowModal] = useState()
  let [name, setName]= useState("Yee Yee Mon") // return array [getter, setterFun]
  //let [name, setName] array destructuring format

  let[posts, setPosts] = useState([
    {
      id : 1,
      title : "first Post"
    },
    {
      id : 2,
      title : "Second Post"
    },
    {
      id : 3,
      title : "Third Post"
    },

  ])
  
  return (
    // react fragement
    <> 
   <Navbar setShowModal={setShowModal} />
   <PostsList posts={posts}/>
    {showModal &&<Modal >
    <h1>Terms and Conditions</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio impedit cumque eius fuga asperiores repellendus iusto amet cupiditate ad consequatur eligendi, molestias doloremque est perspiciatis et beatae at aliquam!</p>
    <button onClick={() =>setShowModal(false)}>close</button>
    </Modal>}
    
   </>
  );
}

// what is virtual DOM


export default App;
