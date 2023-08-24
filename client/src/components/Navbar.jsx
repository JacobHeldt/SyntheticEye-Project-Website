import React from 'react'
import { useState } from 'react'
import logo from '../assets/Logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { navLinks } from '../constants'
import { AiOutlineMenu } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const navigation = (link) => {
    navigate(`/${link}`);
  }

  return (
    <div>
      <div className='flex py-4 justify-between items-center fixed top-0 z-50 w-full px-8 md:px-36 navbar black-opac-bg'>
        <img src={logo} alt="syntheticeye logo" className='w-[40px] h-[40px] z-10' onClick={navigateHome} />

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={nav.id} onClick={() => navigation(nav.id)} className={`font-poppins font-normal cursor-pointer text-base text-white mr-10' ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' } ${active === nav.title ? "text-white" : "text-dimWhite"}`}>
                {nav.title}
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
    </div>

  )
}

export default Navbar