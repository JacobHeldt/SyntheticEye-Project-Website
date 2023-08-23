import React, { useState } from 'react';
import styles from '../style'

const Popup = ({ isOpen, handleClose }) => {
    return (
        isOpen && (
            <div style={{backdropFilter: "blur(10px)"}} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div 
            className="md:w-4/5 md:h-64 h-92 w-[55%] rounded-3xl"
            style={{ 
              background: 'linear-gradient(to right, #33F5FF, #32ffd6, #33FF9C)', 
              padding: '0.1rem',
            }}
          >
            <div className="p-8 bg-gray-800 rounded-3xl text-white">
                <h2 className="text-2xl mb-[14.4px]">Coming Soon!</h2>
                <p className="text-sm md:text-base">We are currently developing advanced AI models for detecting AI-generated images. This feature will allow you to test the system's capabilities firsthand.<br></br></p>
                <p className="text-sm md:text-base mb-[14.4px]">We appreciate your interest and invite you to stay updated for the upcoming release.</p>
                <button onClick={handleClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
            </div>
            </div>
          </div>
        )
        );
}

export default Popup