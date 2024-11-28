import { useState } from 'react'
import Header  from './components/Header'
import Home  from './pages/Home'
import Footer  from './components/Footer'

import { Routes, Route } from 'react-router-dom'
import Visualizer from './pages/Visualizer'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visualizer" element={<Visualizer />} />
    </Routes>
  )
}

export default App
