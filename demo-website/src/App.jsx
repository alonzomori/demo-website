import { useState } from 'react'
import Header from './components/Header'
import './index.css'
import Navigation from './components/Navigation'
import Banner from './components/Banner'
import About from './components/About'

function App() {
  return (
      <main className='bg-[#C0C0C0] min-h-screen w-full flex flex-col items-center'>
      <Navigation />
      <Banner />
      <About />
      </main>
  )
}

export default App
