import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock.jsx'

function App() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>My Blog</h1>
      <p>Welcome to my blog!</p>
      <select onChange={(e) => setColor(e.target.value)} style={{ width: '200px', padding: '5px', marginBottom: '20px' }}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
      </select><br /><br />
      <Clock color={color} />
    </div>
  )
}

export default App
