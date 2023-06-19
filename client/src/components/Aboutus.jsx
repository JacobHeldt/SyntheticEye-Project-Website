import React from 'react'
import Imgslider from './Imgslider'
import imgslider1 from '../assets/imgslider1.png'
import imgslider2 from '../assets/imgslider2.png'
import imgslider3 from '../assets/imgslider3.png'
import noah from '../assets/noahimg.png'
import jacob from '../assets/jacobimg.png'
import grainient1 from '../assets/grainient-person.png'
import grainient2 from '../assets/grainient-person2.png'

const Aboutus = () => {

  const images = [
    imgslider1,
    imgslider2,
    imgslider3
  ]

  return (
    <div>
        <div className='flex justify-center text-center '>
        <div className='pb-12'>
          <h1 className='font-righteous text-white text-6xl tracking-wide mb-1'>About Us</h1>
          <h3 className='text-gray-300 tracking-wide font-poppins font-light'>Who we are and what we do</h3>
        </div>
      </div>
      <div>
        <Imgslider images={images}/>
      </div>

      <div>
        
      </div>
      <div className='md:ml-36 md:mr-36 ml-8 mr-8 mt-24 flex space-x-4'>
        <div className='w-1/5 h-72 flex items-center justify-center text-center text-4xl font-bold font-poppins rounded-3xl' style={{backgroundImage: `url(${grainient1})`}}>
          <div 
            style={{  
              backgroundImage: `url(${noah})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px #32ffd6'
            }} 
            className="w-full h-full rounded-3xl"
          >
          </div>
        </div>

        
        <div 
          className="h-72 w-4/5 rounded-3xl"
          style={{ 
            background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
            padding: '0.1rem',
          }}
        >
        <div className="h-full w-full text-lg tracking-wide bg-gray-800 rounded-3xl p-12 text-white font-poppins flex items-center justify-center">
        <span className='p-3'>
          <span className='text-4xl font-bold font-poppins'>Noah Brömme</span><div className="h-3"></div><span>Hello! I have lived in NY for 9 years. I have found interest in technology and AI. I also play the piano and the guitar and I am amazed by the art of photography. With the rise of deepfakes and AI-generated content in our everyday lives, I found myself interested in these topics.</span>
        </span>
        </div>
        </div>
      </div>

      <div className='md:ml-36 md:mr-36 ml-8 mr-8 mt-12 flex space-x-4'>
        <div 
            className="h-72 w-4/5 rounded-3xl"
            style={{ 
              background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
              padding: '0.1rem',
            }}
          >
          <div className="h-full w-full text-lg tracking-wide bg-gray-800 rounded-3xl p-12 text-white font-poppins flex items-center justify-center">
          <span className='p-3'>
            <span className='text-4xl font-bold font-poppins'>Jacob Heldt</span><div className="h-3"></div><span>Hello! After living in the Netherlands for 7 years, I now live in New York since 2 years and have developed passion for technology, creativity, and innovation. Machine Learning is a significant area of interest for me, and I am constantly striving to improve my understanding and expertise in this field. </span>
          </span>
          </div>
          </div>
        <div className='w-1/5 h-72 flex items-center justify-center text-center text-4xl font-bold font-poppins rounded-3xl' style={{backgroundImage: `url(${grainient2})`}}>
          <div 
            style={{  
              backgroundImage: `url(${jacob})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px #32ffd6'
            }} 
            className="w-full h-full rounded-3xl"
          >
          </div>
        </div>

      </div>

    </div>

  )
}

export default Aboutus