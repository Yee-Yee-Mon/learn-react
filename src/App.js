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
  return (
    <div className="app">
      <h1>Hello {name}</h1>
      <button onClick={changeName}>change name</button>

      <h1>Posts</h1>
      <ul>
        {posts.map((post)=>(
           <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
   
  );
}

// what is virtual DOM


export default App;
