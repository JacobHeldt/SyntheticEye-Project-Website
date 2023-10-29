import React from 'react'
import aiimage from '../assets/aigeneratedimage.jpeg'
import aiface from '../assets/aigeneratedface.jpeg'
import aiaudio from '../assets/aigeneratedautio.jpeg'
import aitext from '../assets/aigeneratedtext.jpeg'
import aideepfake from '../assets/aigenerateddeepfake.jpeg'
import aletheia from '../assets/models/aletheia.png'
import { useNavigate } from 'react-router-dom';
import Button from './Button'
import { BsLinkedin } from 'react-icons/bs'

const Models = () => {
  const navigate = useNavigate();

  const handleOpenPopupAletheia = () => {
    navigate('/aletheia');
    console.log('Aletheia Click');
  };
  return (


    // Image Detector


    <div className='font-poppins relative' id="models">
             <div className='absolute right-1/3 z-10 mt-[-50px]'>
        <div className='blue__gradient h-52 w-80'></div>
        </div>
        <div className='absolute right-1/2 z-10 mt-[800px]'>
          <div className='darkblue__gradient h-64 w-64'></div>
        </div>
        <div className='absolute right-1/2 z-10'>
          <div className='darkblue__gradient h-64 w-64'></div>
        </div>

      <div className='flex justify-center text-center '>
        <div>
          <h1 className='font-righteous text-white text-6xl tracking-wide mb-1'>The Models</h1>
          <h3 className='text-gray-300 tracking-wide font-poppins font-light'>The invisible power behind our project</h3>
        </div>
      </div>

      <div className='md:ml-36 md:mr-36 ml-8 mr-8 mt-12 md:flex md:flex-row sm:flex-col md:space-x-4 space-x-0'>
        <div 
          style={{  
            backgroundImage: `url(${aiimage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
          className="md:w-1/3 w-3/3 h-60 flex items-center justify-center text-center md:text-4xl text-3xl font-bold font-poppins md:rounded-3xl rounded-tr-3xl rounded-tl-3xl font-secondary-outline p-6"
        >
          <div className='font-secondary-outline font-secondary-outline bg-black bg-opacity-40 rounded-lg primary-border p-3'>Image Detector <div className='h-2'></div><span className='text-xs font-light text-white'><div>"A renaissance painting of an elephant in a tuxedo" by bing image creator</div></span></div>
        </div>
        <div 
          className="md:h-60 h-44 md:w-2/3 w-3/3 md:rounded-3xl rounded-bl-3xl rounded-br-3xl"
          style={{ 
            background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
            padding: '0.1rem',
          }}
        >
        <div className="h-full w-full md:text-lg text-base tracking-wide bg-gray-800 md:rounded-3xl rounded-br-3xl rounded-bl-3xl md:p-12 p-4 text-white font-poppins flex items-center justify-center">
        <div>
        A machine learning model that can detect AI generated images and can distinguish them from real images. <br />
        <i className='text-gray-300 text-sm'>This model can be used <a href='/argus' className='underline'>here</a></i>
        </div>
        </div>
        </div>
      </div>


      {/* Face Detector */}


      <div className='md:ml-36 md:mr-36 ml-8 mr-8 mt-12 flex flex-row justify-center space-x-8'>
      <div 
          className="md:h-[500px] h-48 w-1/3 md:rounded-3xl rounded-tl-3xl rounded-tr-3xl z-50"
          style={{ 
            background: 'linear-gradient(to right, #33FF9C, #32ffd6, #33F5FF)', 
            padding: '0.1rem',
          }}
        >
        <div className="h-full w-full md:text-lg text-base tracking-wide bg-gray-800 md:rounded-3xl rounded-tr-3xl rounded-tl-3xl md:p-12 p-4 font-poppins items-center justify-center flex flex-col">
        <img src={aletheia} className='h-36'></img>
        <div>
        <div className='w-full text-center text-4xl mt-4 text-white'>Aletheia</div>
        <div className='w-full text-center text-xl font-secondary'>AI-Face Detector</div>
        <div className='font-light text-base mt-2 text-white mb-4'>Aletheia, named after the Greek goddess of truth, is our AI model that differentiates real human faces from AI-generated ones using advanced machine learning.</div>
        <Button handleClick={handleOpenPopupAletheia} text="Try it!" style={{ zIndex: 5000 }} className="text-black"/>
        </div>
        </div>
        </div>
        

      </div>

      {/* Text Detector */}


      <div className='md:ml-36 md:mr-36 ml-8 mr-8 mt-12 md:flex md:flex-row sm:flex-col md:space-x-4 space-x-0'>
        <div 
          style={{  
            backgroundImage: `url(${aitext})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
          className="md:w-1/3 w-3/3 h-60 flex items-center justify-center text-center md:text-4xl text-3xl font-bold font-poppins md:rounded-3xl rounded-tr-3xl rounded-tl-3xl font-secondary-outline p-6"
        >
          <div className='font-secondary-outline font-secondary-outline bg-black bg-opacity-40 rounded-lg primary-border p-3'>Text Detector<div className='h-2'></div><span className='text-xs font-light text-white'><div>"Text" by bing image creator</div></span></div>
        </div>
        <div 
          className="md:h-60 h-40 md:w-2/3 w-3/3 md:rounded-3xl rounded-bl-3xl rounded-br-3xl"
          style={{ 
            background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
            padding: '0.1rem',
          }}
        >
        <div className="h-full w-full md:text-lg text-base tracking-wide bg-gray-800 md:rounded-3xl rounded-br-3xl rounded-bl-3xl md:p-12 p-4 text-white font-poppins flex items-center justify-center">
        <div>
        A machine learning model that detects AI generated text. These texts can for example be based on ChatGPT generations. <br />
        <i className='text-gray-300 text-sm'>We are currently working on this model.</i>
        </div>

        </div>
        </div>
      </div>


      {/* Audio Detector */}


      <div className='md:ml-36 md:mr-36 ml-8 mr-8 mt-12 md:flex md:flex-row sm:flex-col md:space-x-4 space-x-0'>
      <div 
          className="md:h-60 h-44 md:w-2/3 w-3/3 md:rounded-3xl rounded-tl-3xl rounded-tr-3xl"
          style={{ 
            background: 'linear-gradient(to right, #33FF9C, #32ffd6, #33F5FF)', 
            padding: '0.1rem',
          }}
        >
        <div className="h-full w-full md:text-lg text-base tracking-wide bg-gray-800 md:rounded-3xl rounded-tr-3xl rounded-tl-3xl md:p-12 p-4 text-white font-poppins flex items-center justify-center">
        <div>
        A machine learning model that can detect AI generated audio. This can be very helpful for detecting misinformation.<br />
        <i className='text-gray-300 text-sm'>We plan to develop this model in the future.</i>
        </div>
        </div>
        </div>
        <div 
          style={{  
            backgroundImage: `url(${aiaudio})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
          className="md:w-1/3 w-3/3 h-60 flex items-center justify-center text-center md:text-4xl text-3xl font-bold font-poppins md:rounded-3xl rounded-br-3xl rounded-bl-3xl font-secondary-outline p-6"
        >
        <div className='font-secondary-outline font-secondary-outline bg-black bg-opacity-40 rounded-lg primary-border p-3'>Audio Detector<div className='h-2'></div><span className='text-xs font-light text-white'><div>"Audio" by bing image creator</div></span></div>
        </div>

      </div>


      {/* Deepfake Detector */}


      <div className='md:ml-36 md:mr-36 ml-8 mr-8 mt-12 md:flex md:flex-row sm:flex-col md:space-x-4 space-x-0'>
        <div 
          style={{  
            backgroundImage: `url(${aideepfake})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
          className="md:w-1/3 w-3/3 h-60 flex items-center justify-center text-center md:text-4xl text-3xl font-bold font-poppins md:rounded-3xl rounded-tr-3xl rounded-tl-3xl font-secondary-outline p-6"
        >
        <div className='z-10 font-secondary-outline font-secondary-outline bg-black bg-opacity-40 rounded-lg primary-border p-3'>Video Detector<div className='h-2'></div><span className='text-xs font-light text-white'><div>"Video" by bing image creator</div></span></div>
        </div>
        <div 
          className="md:h-60 h-40 md:w-2/3 w-3/3 md:rounded-3xl rounded-bl-3xl rounded-br-3xl"
          style={{ 
            background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
            padding: '0.1rem',
          }}
        >

      <div className='absolute right-1/3 mt-44'>
        <div className='z-[0] blue__gradient h-52 w-80'></div>
      </div>
      
        <div className="h-full w-full md:text-lg text-base tracking-wide bg-gray-800 md:rounded-3xl rounded-br-3xl rounded-bl-3xl md:p-12 p-4 text-white font-poppins flex items-center justify-center">
        <div>
        A machine learning model that can detect advanced deepfakes and AI-generated Video. This is one of the biggest challenges in AI-generated content detection.<br />
        <i className='text-gray-300 text-sm'>We plan to develop this model in the future.</i>
        </div>
        </div>
        </div>
      </div>


      <div className='z-10 w-full h-12 primary-gradient flex items-center justify-center text-center font-extralight font-poppins mt-20'>
          <span className=' z-10 uppercase md:mr-12 mr-1 md:tracking-widest tracking-tight md:text-base text-xs'>SyntheticEye</span><a href="https://www.linkedin.com/groups/12854518/" className='text-gray-600 md:mr-12 mr-4 z-10 md:text-base text-xs'>Our LinkedIn Group</a><a href="https://www.linkedin.com/in/jacob-heldt-92559327a/" className='text-gray-600 md:mr-12 mr-4 md:text-base text-xs z-50'>Jacob on LinkedIn</a><a href="https://www.linkedin.com/in/noah-br%C3%B6mme-63b90827a/" className='text-gray-600 md:text-base text-xs md:mr-12 mr-4'>Noah on LinkedIn</a><a href="https://github.com/JacobHeldt/SyntheticEye" className='text-gray-600 md:text-base text-xs'>GitHub Repo</a>
      </div>



    </div>
  )
}

export default Models