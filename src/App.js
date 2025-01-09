import './App.css';
import { useState } from 'react';

//hook - useStateHook
function App() {
  //let name = "Yee Yee Mon";
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
  let changeName = () =>{

    setName("Aung Aung")
    console.log(name)
  }
  let deletePost = (id) =>{
    setPosts((prevState) => prevState.filter(post => post.id != id))
  }
  return (
    <div className="app">
      <h1>Hello {name}</h1>
      <button onClick={changeName}>change name</button>

      <h1>Posts</h1>
      <ul>
        {!!posts.length && posts.map((post)=>(
          // if you need to pass parameter to function you need to call function as function reference
           <li key={post.id}>{post.title} <span></span><button onClick={() => deletePost(post.id)}>delete</button></li>
        ))}
        { !posts.length && <p>No Post Available</p>}
      </ul>
    </div>
   
  );
}

// what is virtual DOM


export default App;
