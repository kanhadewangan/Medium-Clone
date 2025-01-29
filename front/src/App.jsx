import React from 'react'
import Login from './components/login'
import { Route, Routes ,Link } from 'react-router-dom'
import SignUp from './components/SignUp'
import Blog from './components/Blog'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path ="home" element={<h1>Home</h1>} />
        <Route path ="blog" element={<Blog/>} />
        </Routes>

    </div>
  )
}

export default App