import logo from './logo.svg';
import './App.css';
import Image from './asset/burger.jpg'

function App() {
  let name = "Yee Yee Mon"
  return (
    <div>
      <h1>Hello {name}</h1>
      {/* first way -public folder way */}
      {/* <img src="/burger.jpg" alt="" ></img> */}

      {/* 2nd way- Import */}
      {/* <img src={Image} alt="" ></img> */}

      {/* real world way */}
      <img src={Image} alt="" ></img>

    </div>
   
  );
}

export default App;
