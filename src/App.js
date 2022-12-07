import React from 'react'
import './index.css'
import Navbar from './components/navbar'
import './App.css'
import logo from './Images/logo_of_MI.svg'

const App = () => {
  return (
    <>
    <section className='bg-white h-screen sect'>
      <Navbar />
      <div className='flex flex-col  lg:flex-row justify-center md:justify-around mt-28 md:mt-20'>
        <div className='m-auto md:m-0 mt-20'>
          <h1 className='text-7xl text-center font-head font-bold md:text-9xl lg:text-left'>Manoj
          <br/>Industries</h1>
        </div>
        <div>
          <img src={logo} className="w-72 md:mt-0 m-auto mt-14"/>
        </div>
      </div>
    </section>
    </>
  )
}

export default App