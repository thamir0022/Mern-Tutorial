import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col'>
    <Header/>
      <div className="h-[calc(100vh-4rem)] w-screen">
      <div className='text-green-700 text-3xl text-center'>Hello World!</div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
