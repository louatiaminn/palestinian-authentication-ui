import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, ResetPassword } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
