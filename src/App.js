import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//hook - useStateHook
function App() {
  //let name = "Yee Yee Mon";
  let [name, setName]= useState("Yee Yee Mon") // return array [getter, setterFun]
  //let [name, setName] array destructuring format

  let changeName = () =>{

    setName("Aung Aung")
    console.log(name)
  }
  return (
    <div className="app">
      <h1>Hello {name}</h1>
      <button onClick={changeName}>change name</button>
    </div>
   
  );
}

// what is virtual DOM


export default App;
