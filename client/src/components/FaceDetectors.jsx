import React from 'react'

const Detectors = () => {
  return (
    <div className="flex justify-center">
    <div 
        className="md:h-24 md:w-24 h-20 w-20 rounded-3xl z-10 mx-2"
        style={{ 
            background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
            padding: '0.1rem',
        }}
    >
    <a href="https://thispersondoesnotexist.com/" target="_blank" rel="noopener noreferrer">
        <div className="z-10 h-full w-full md:text-sm text-xs md:tracking-wide tracking-tight md:p-6 bg-gray-800 rounded-3xl p-4 text-white font-poppins flex items-center justify-center">
            StyleGAN
        </div>
    </a>
    </div>

    <div 
        className="md:h-24 md:w-24 h-20 w-20 rounded-3xl z-10 mx-2"
        style={{ 
            background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
            padding: '0.1rem',
        }}
    >
    <a href="https://github.com/microsoft/DigiFace1M" target="_blank" rel="noopener noreferrer">
        <div className="z-10 h-full w-full md:text-sm text-xs md:tracking-wide tracking-tight md:p-6 bg-gray-800 rounded-3xl p-4 text-white font-poppins flex items-center justify-center">
            DigiFace-1M
        </div>
    </a>
    
    </div>

     <div 
        className="md:h-24 md:w-24 h-20 w-20 rounded-3xl z-10 mx-2"
        style={{ 
            background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
            padding: '0.1rem',
        }}
    >
    <a href="https://stablediffusionweb.com/" target="_blank" rel="noopener noreferrer">
        <div className="z-10 h-full w-full md:text-sm text-xs md:tracking-wide tracking-tight md:p-6 bg-gray-800 rounded-3xl p-4 text-white font-poppins flex items-center justify-center">
            Stable Diffusion
        </div>
    </a>
    
    </div>
</div>
  )
}

export default Detectors