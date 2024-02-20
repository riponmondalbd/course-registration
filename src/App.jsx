import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Courses></Courses>
    </>
  )
}

export default App
