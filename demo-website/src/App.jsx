import { useState } from 'react'
import Header from './components/Header'
import './index.css'
import Navigation from './components/Navigation'
import Banner from './components/Banner'
import About from './components/About'
import Servies from './components/Services'

function App() {
  return (
      <main className='bg-[#C0C0C0] min-h-screen w-full flex flex-col items-center'>
      <Navigation />
      <Banner />
      <About />
      <Servies />
      </main>
  )
}

export default App
