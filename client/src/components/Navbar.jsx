import React from 'react'
import { useState } from 'react'
import logo from '../assets/Logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { navLinks } from '../constants'
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='flex py-6 justify-between items-center md:ml-36 md:mr-36 ml-8 mr-8 navbar'>
      <img src={logo} alt="syntheticeye logo" className='w-[40px] h-[40px]'/>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-base text-white mr-10' ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] text-blue-500' onClick={() => setToggle((prev) => !prev)}/>

        <div className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex-col justify-end items-start flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins mb-4 font-normal cursor-pointer text-base text-white ' ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

        </div>

      </div>

    </div>
  )
}

export default Navbar