import './App.css'
import {useState} from 'react';

function App() {
  function Counter() { 
    const [score, setlike] = useState(0);

  function handleclick() {
    setlike(score + 1);
  } 
   return (
  <h1>
    This is some sample text
  </h1>
   )
  }
}

export default App;
