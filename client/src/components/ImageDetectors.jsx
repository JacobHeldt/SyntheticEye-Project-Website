import React from 'react'

const ImageDetectors = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 flex-wrap justify-center">
    <div 
        className="md:h-24 md:w-24 h-20 w-20 rounded-3xl z-10 mx-2"
        style={{ 
            background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
            padding: '0.1rem',
        }}
    >
    <a href="https://www.bing.com/create" target="_blank" rel="noopener noreferrer">
        <div className="z-10 h-full w-full md:text-sm text-xs md:tracking-wide tracking-tight md:p-6 bg-gray-800 rounded-3xl p-4 text-white font-poppins flex items-center justify-center">
            Bing Image Creator
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
    <a href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer">
        <div className="z-10 h-full w-full md:text-sm text-xs md:tracking-wide tracking-tight md:p-6 bg-gray-800 rounded-3xl p-4 text-white font-poppins flex items-center justify-center whitespace-nowrap">
            Dall-E 2 <br />
            & Dall-E 3
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


    <div 
        className="md:h-24 md:w-24 h-20 w-20 rounded-3xl z-10 mx-2"
        style={{ 
            background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
            padding: '0.1rem',
        }}
    >
    <a href="https://www.craiyon.com/" target="_blank" rel="noopener noreferrer">
        <div className="z-10 h-full w-full md:text-sm text-xs md:tracking-wide tracking-tight md:p-6 bg-gray-800 rounded-3xl p-4 text-white font-poppins flex items-center justify-center">
            Craiyon
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
    <a href="https://lexica.art/" target="_blank" rel="noopener noreferrer">
        <div className="z-10 h-full w-full md:text-sm text-xs md:tracking-wide tracking-tight md:p-6 bg-gray-800 rounded-3xl p-4 text-white font-poppins flex items-center justify-center">
            Lexica Aperture
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
    <a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">
        <div className="z-10 h-full w-full md:text-sm text-xs md:tracking-wide tracking-tight md:p-6 bg-gray-800 rounded-3xl p-4 text-white font-poppins flex items-center justify-center">
            Midjourney
        </div>
    </a>
    
    </div>

</div>
  )
}

export default ImageDetectors