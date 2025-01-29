import React from 'react'
import Login from './components/login'
import { Route, Routes ,Link } from 'react-router-dom'
import SignUp from './components/SignUp'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        </Routes>

    </div>
  )
}

export default App