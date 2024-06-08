import { useState } from 'react'
import Provider from './context/Provider'

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <Provider>
      <h1>Hiiii</h1>
      <Login/>
      <Profile/>
    </Provider>
  )
}

export default App
