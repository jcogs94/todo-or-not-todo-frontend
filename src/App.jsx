import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import ListsContainer from './components/ListsContainer/ListsContainer.jsx'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <h1>Start</h1>
      <ListsContainer />
    </>
  )
}

export default App
