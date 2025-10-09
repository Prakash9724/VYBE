import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Footer from './components/Footer'
import Page4 from './Pages/Page4'
import LimitedAddition from './components/LimitedAddition'
import Page5 from './Pages/Page5'
import SmoothScroll from './components/SmoothScroll'

const App = () => {
  return (
    <SmoothScroll>
      <div className='h-screen w-full'>
        <Navbar/>
        <div className='w-full h-full px-20'>
          <Home/>
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5/>
          <LimitedAddition/>
          <Footer/>
        </div>
      </div>
    </SmoothScroll>
  )
}

export default App