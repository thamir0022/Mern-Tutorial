import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


const App = () => {
  return (
    <BrowserRouter className='flex flex-col'>
      <Header/>
          <Layout>
              <Routes>
                  <Route path='/' element={<HomePage/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/contact' element={<Contact/>} />
                  <Route path='/cart' element={<Cart/>} />
                  <Route path='/orders' element={<Orders/>} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/sign-up' element={<SignUp/>} />
              </Routes>
          </Layout>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
