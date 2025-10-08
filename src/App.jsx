import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <div className='w-full h-full px-20'>
      <Home/>
      <Page2/>
    <Page3/>
    <Footer/>
    </div>
      </div>
  )
}

export default App