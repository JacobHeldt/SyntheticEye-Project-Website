import React from 'react'
import Imgslider from './Imgslider'
import imgslider1 from '../assets/imgslider1.png'
import imgslider2 from '../assets/imgslider2.png'
import imgslider3 from '../assets/imgslider3.png'
import noah from '../assets/noahimg.png'
import jacob from '../assets/jacobimg.webp'
import grainient1 from '../assets/grainient-person.webp'
import grainient2 from '../assets/grainient-person2.webp'

const Aboutus = () => {

  const images = [
    imgslider1,
    imgslider2,
    imgslider3
  ]

  return (
    <div id="about_us">
         <div className='absolute right-1/3 z-[0] mt-[-50px]'>
        <div className='blue__gradient h-52 w-80'></div>
        </div>
        <div className='absolute right-1/2 z-[0] mt-[800px]'>
          <div className='darkblue__gradient h-64 w-64'></div>
        </div>
        <div className='absolute right-1/2 z-[0]'>
          <div className='darkblue__gradient h-64 w-64'></div>
        </div>
        <div className='flex justify-center text-center '>
        <div className='pb-12'>
          <h1 className='font-righteous text-white text-6xl tracking-wide mb-1 z-10'>About Us</h1>
          <h3 className='text-gray-300 tracking-wide font-poppins font-light z-10'>Who we are and what we do</h3>
        </div>
      </div>
      <div>
        <Imgslider images={images}/>
      </div>

      <div>
        
      </div>
      <div className='md:ml-36 md:mr-36 ml-8 mr-8 md:mt-24 mt-[-360px] flex md:space-x-4 space-x-1'>
        <div className='md:w-1/5 w-[45%] h-86 flex items-center justify-center text-center text-4xl font-bold font-poppins rounded-3xl' style={{backgroundImage: `url(${grainient1})`}}>
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
          className="h-86 md:w-4/5 w-[55%] rounded-3xl"
          style={{ 
            background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
            padding: '0.1rem',
          }}
        >
        <div className="z-10 h-full w-full md:text-lg text-sm md:tracking-wide tracking-tight bg-gray-800 rounded-3xl md:p-6 p-2 text-white font-poppins flex items-center justify-center">
        <span className='md:p-3 p-1'>
          <span className='md:text-4xl text-lg font-bold font-poppins'>Noah Brömme</span><div className="md:h-3 h-0 mt-[-3px]"></div><span className='md:text-lg text-[0.75rem] md:leading-5 leading-[0rem]'>I have lived in NY for 9 years. I have found interest in technology and AI. I also play the piano and the guitar and I am amazed by the art of photography. With the rise of deepfakes and AI-generated content in our everyday lives, I found myself interested in these topics.</span>
        </span>
        </div>
        </div>
      </div>

      <div className='md:ml-36 md:mr-36 ml-8 mr-8 mt-12 flex md:space-x-4 space-x-1'>
        <div 
            className="md:w-4/5 md:h-64 h-92 w-[55%] rounded-3xl"
            style={{ 
              background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
              padding: '0.1rem',
            }}
          >
          <div className="z-10 h-full w-full md:text-lg text-sm md:tracking-wide tracking-tight  bg-gray-800 rounded-3xl md:p-6 p-2 text-white font-poppins flex items-center justify-center">
          <span className='p-1'>
            <span className='md:text-4xl text-lg font-bold font-poppins'>Jacob Heldt</span><div className="md:h-3 h-0 md:mt-0 mt-[-3px]"></div><span className='md:text-lg text-[0.75rem] md:leading-5 leading-[0rem]'>After living in the Netherlands for 6 years, I now live in New York and have developed passion for technology, creativity, and innovation. Machine Learning is a significant area of interest for me, and I want to improve my understanding and expertise in this field.</span>
          </span>
          </div>
          </div>
        <div className='md:w-1/5 w-[45%] md:h-64 h-92 flex items-center justify-center text-center text-4xl font-bold font-poppins rounded-3xl' style={{backgroundImage: `url(${grainient2})`}}>
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



      <div className='z-10 w-full h-12 primary-gradient flex items-center justify-center text-center font-extralight font-poppins mt-20'>
          <span className=' z-10 uppercase md:mr-12 mr-1 md:tracking-widest tracking-tight md:text-base text-xs'>SyntheticEye</span><a href="https://www.linkedin.com/groups/12854518/" className='text-gray-600 md:mr-12 mr-4 z-10 md:text-base text-xs'>Our LinkedIn Group</a><a href="https://www.linkedin.com/in/jacob-heldt-92559327a/" className='text-gray-600 md:mr-12 mr-4 md:text-base text-xs z-50'>Jacob on LinkedIn</a><a href="https://www.linkedin.com/in/noah-br%C3%B6mme-63b90827a/" className='text-gray-600 md:text-base text-xs md:mr-12 mr-4'>Noah on LinkedIn</a><a href="https://github.com/JacobHeldt/SyntheticEye" className='text-gray-600 md:text-base text-xs'>GitHub Repo</a>
      </div>


    </div>

  )
}

export default Aboutus