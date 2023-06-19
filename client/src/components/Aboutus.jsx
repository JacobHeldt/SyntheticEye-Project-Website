import React from 'react'
import Imgslider from './Imgslider'
import imgslider1 from '../assets/imgslider1.png'
import imgslider2 from '../assets/imgslider2.png'
import imgslider3 from '../assets/imgslider3.png'

const Aboutus = () => {

  const images = [
    imgslider1,
    imgslider2,
    imgslider3
  ]

  return (
    <div>
        <div className='flex justify-center text-center '>
        <div>
          <h1 className='font-righteous text-white text-6xl tracking-wide mb-1'>About Us</h1>
          <h3 className='text-gray-300 tracking-wide font-poppins font-light'>Who we are and what we do</h3>
        </div>
        <Imgslider images={images}/>
      </div>
    </div>
  )
}

export default Aboutus