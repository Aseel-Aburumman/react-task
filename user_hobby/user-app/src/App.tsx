import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import User from './components/User';

function App() {
 
  const username = "Aseel Aburumman";
  const age  = 25;
  const hobbies= ["Reading", "Coding", "Traveling"];

  return (
   <div className="container mt-5">
    <User  username={username} age={age} hobbies={hobbies} />
   </div>
  )
}

export default App
