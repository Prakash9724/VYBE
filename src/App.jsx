import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Page2 from './Pages/Page2'

const App = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <div className='w-full h-full px-20'>
      <Home/>
      <Page2/>
    </div>
      </div>
  )
}

export default App