import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Sign_up from './signup'
import Login_page from './login'
import { useState } from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Sign_up/>}/>
      <Route path='/login' element={<Login_page/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App