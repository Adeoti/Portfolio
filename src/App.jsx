import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './components/Home';
import './styles/Portfolio.css';
import Navbar from './components/Navbar';
//import hero from 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar/>
     <Home />
    </div>
  )
}

export default App
