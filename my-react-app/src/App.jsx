import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './component/nav'
import Footer from './footer'
import Form from './Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>,
      <Footer/>,
      

    </>
  )
}

export default App
