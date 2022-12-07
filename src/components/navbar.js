import React from 'react'
import { useState } from 'react'


const Navbar = () => {

  const [open, setOpen] = useState(false)

  const lists = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Projects" },
    { name: "Contact Us" },
  ]
  return (
    <>
      <nav>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 fixed cursor-pointer md:hidden left-5 top-6 z-30" onClick={() => setOpen(!open)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div className={`bg-gray-200 md:bg-white md:static fixed p-10 md:p-0 top-0 right-0 text-right backdrop-blur-xl z-10 w-screen md:h-auto h-screen ${!open ? 'left-[-100%]' : 'left-0'} duration-500`}>

          <ul className="md:flex justify-between md:p-10 pr-8">
            {lists.map((list, index) => (
              <li key={index} className='text-3xl pb-10 md:text-xl'>
                <a href='#'>{list.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>



  )
}

export default Navbar