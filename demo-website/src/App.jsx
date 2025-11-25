import { useState } from 'react'
import Header from './components/Header'
import './index.css'
import Navigation from './components/Navigation'
import Banner from './components/Banner'

function App() {
  return (
      <main className='bg-[#C0C0C0] h-[100vh] w-[100vw] flex justify-center'>
      <Header /> 
      <Navigation />
      <Banner />
      </main>
  )
}

export default App
