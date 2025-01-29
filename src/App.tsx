import Header from "./components/global-header"
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Header />
        <div className="bg-animation">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
        </div>
      </div>
    </>
  )
}

export default App
