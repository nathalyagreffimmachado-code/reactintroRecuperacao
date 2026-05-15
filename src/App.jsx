import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import irlanda from './pages/irlanda/inde'
import calculadora from './pages/calculadora'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/irlanda" element={<irlanda />} />
        <Route path="/calculadora" element={<calculadora />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
