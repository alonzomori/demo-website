import { useState } from 'react'
import Header from './components/Header'
import './index.css'
import Navigation from './components/Navigation'

function App() {
  return (
      <main className='bg-[#C0C0C0] h-[100vh] w-[100vw] flex justify-center'>
      <Header /> 
      <Navigation />
      </main>
  )
}

export default App
