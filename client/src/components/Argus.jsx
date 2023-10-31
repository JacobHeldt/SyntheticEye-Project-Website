import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { DotLoader, RingLoader } from "react-spinners";
import { AiFillCheckCircle } from 'react-icons/ai';
import FaceDetectors from './FaceDetectors';
import ImageDetectors from './ImageDetectors';

const Argus = () => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const fileInput = useRef(null);
    const [fileSelected, setFileSelected] = useState(false);
    const [isConsentGiven, setIsConsentGiven] = useState(false);
    const [loading, setLoading] = useState(false);

    const [isLoaded, setIsLoaded] = useState(false);

    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleSubmit = async () => {
        const selectedFile = fileInput.current?.files[0];

        setError(null);

        if (!isConsentGiven) {
            setError("You must agree to the processing of the image as outlined in the Privacy Policy.");
            return;
        }

        if (!selectedFile) {
            setError("Please select a file first.");
            setFileSelected(false);  // No file selected
            return;
        }
    
        setFileSelected(true);

        setLoading(true);

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            let data;
    
            // Check if the environment is development or not
            if (process.env.NODE_ENV === "development") {
                data = await mockServerResponse();
            } else {
                const response = await fetch('https://syntheticeye-dev.onrender.com/predict-argus', {
                    method: 'POST',
                    mode: 'cors',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                data = await response.json();
            }
    
            setResult(data);
        } catch (err) {
            console.error('Error:', err);
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const getCategoryFromProbability = (probability) => {
        console.log('Probability:', probability);
        if (probability < 0.1) return { label: "Likely AI-Generated", color: "red" };
        else if (probability < 0.25) return { label: "Possibly AI-Generated", color: "light-red" };
        else if (probability < 0.5) return { label: "Unsure", color: "yellow" };
        else if (probability < 0.75) return { label: "Probably Real", color: "light-green" };
        else if (probability < 1) return { label: "Likely Real", color: "green" };
        else return { label: "Debug", color: "green" };
        // return { label: "Probably AI-Generated", color: "light-red" };
    }

    const mockServerResponse = () => {
        // Simulating a delay of 1 second (1000ms)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    // This is where you mock the probability value
                    probability: Math.random() // This will return a random value between 0 and 1
                });
            }, 800);
        });
    }

    const handleFileDrop = (event) => {
        event.preventDefault();
    
        let files = event.dataTransfer.files;
        if (files.length > 0) {
            handleFileChange({ target: { files } });
            fileInput.current.files = files; 
        }
    
        event.dataTransfer.clearData();
        setIsFileHovering(false);
    };

    useEffect(() => {
        return () => {
            if (imageSrc) {
                URL.revokeObjectURL(imageSrc);
            }
        };
    }, [imageSrc]);

    function triggerFileInput(e) {
        e.stopPropagation();
        fileInput.current.click();
    }


    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            const imageURL = URL.createObjectURL(file);
            setImageSrc(imageURL);
            setFileSelected(true);
        } else {
            setImageSrc(null);
            setFileSelected(false);
        }
    };

    const [isFileHovering, setIsFileHovering] = useState(false);

    return (
        <div className='bg-primary'>
        <Navbar />

        <div className={`text-center font-poppins mt-6 ${isLoaded ? 'fade-in' : ''}`}>
                <div className='text-white md:text-8xl text-5xl pt-16 pb-2 font-white font-righteous'>Argus</div>
                <div className='font-secondary font-poppins md:text-xl text-lg md:tracking-widest tracking-wide pb-4'>General AI-Image Detection</div>

                <div className="flex items-center justify-center">

        </div>

        <div className='absolute right-2/3 z-[0]'>
            <div className='blue__gradient h-64 w-80'></div>
        </div>

        <div className='absolute right-1/4 z-[0] top-1/3'>
            <div className='darkblue__gradient h-64 w-40'></div>
        </div>

        <div className='flex md:flex-row flex-col justify-center items-start mt-6 md:mx-24 mx-4'>

        <div className='md:w-1/2 md:mr-24 mb-6'> 
                <div className="text-gray-300 text-base w-full md:w-full text-center mb-4 md:text-base">
                Argus, named after the mythological giant with a hundred eyes, is our AI model capable of distinguishing between authentic and AI-generated images.
                </div>
                    <div className='bg-gray-700 text-white mt-12 md:mt-0 mx-[-20px] md:p-0 p-4 only-mobile'>Our AI-generated face detection model is currently optimized for desktop use only. For full functionality, please access our site on a computer.</div>
                    <h3 className='text-white text-lg mb-6 mt-8'>Argus can detect: </h3>
                    
                    <ImageDetectors/>
                    
                </div>
                
                <div className='md:w-2/3 right-column'>
                <div className="relative">

                <div 
                    onClick={triggerFileInput} 
                    onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }} 
                    onDragEnter={(e) => { e.stopPropagation(); console.log('Drag Enter'); setIsFileHovering(true); }} 
                    onDragLeave={(e) => {
                        e.stopPropagation(); 
                        console.log('Drag Leave', e.currentTarget.contains(e.relatedTarget));
                        if (e.currentTarget.contains(e.relatedTarget)) return;
                        setIsFileHovering(false);
                    }}
                    onDrop={handleFileDrop}
                    className={`h-[272px] md:py-16 py-6 px-16 border-secondary ${fileSelected ? 'opacity-100' : 'opacity-70'} file_border_radius text-center cursor-pointer ${isFileHovering ? 'bg-gray-800' : ''} hover:bg-gray-800 text-white flex items-center justify-center overflow-hidden`}
                >
                    <input 
                        type="file" 
                        accept="image/*"
                        className="absolute top-0 left-0 w-[0px] h-[0px] opacity-0 cursor-pointer text-gray-300 text-xl" 
                        ref={fileInput} 
                        onChange={handleFileChange}
                    />

                    <div className={`${fileSelected ? 'opacity-90' : 'opacity-90'} flex items-center justify-center h-full w-full text-lg`}>
                        {
                            fileSelected 
                            ? imageSrc && <img src={imageSrc} alt="Uploaded Preview" className="uploaded-image-height-fill" />
                            : "Click or drop file here to upload"
                        }
                    </div>
                </div>
                    </div>

                    <div className="flex justify-center items-center md:w-full mx-auto"> 
                    <div className="w-full bg-white flex items-center justify-center p-[12px] mb-0 bg-opacity-0 privacy_box">
                        <div className="h-4"> {/* This will constrain the width to a readable length */}
                            <label className="flex items-center text-sm text-gray-300">
                                <input 
                                    type="checkbox" 
                                    checked={isConsentGiven} 
                                    onChange={() => setIsConsentGiven(prev => !prev)} 
                                    className="mr-2"
                                />
                                <span className="ml-2 text-white md:text-xs text-sm">I agree to the processing of this image as outlined in the <Link to="/privacy-policy" className="underline hover:text-blue-500">Privacy Policy</Link>.</span>
                            </label>
                        </div>
                    </div>
                    </div>

                    <button 
                            onClick={handleSubmit} 
                            className={`primary-gradient tracking-wider font-righteous  md:px-2 md:py-2 text-lg uppercase rounded-md hover:rounded-lg py-1 mt-4 w-full relativ md:w-6/6 mx-auto ${fileSelected ? 'opacity-100' : 'opacity-30'} cursor-${fileSelected ? 'pointer' : 'not-allowed'} mb-8`}
                        >
                            Submit
                        </button>

                        {loading && (
                            <div className='overlayStyle backdrop-blur text-white'>
                                <div className='containerStyle'>
                                    <DotLoader color={"#32ffd6"} size={80} />
                                    <p className='loading_text mt-12 text-lg'>Argus is thinking...</p>
                                </div>
                            </div>
                        )}

                        <div className='text-gray-300 mb-2'>Argus classifies this image as:</div>
                        {result && (
                            <div className="flex items-center justify-center font-righteous mb-4">
                                <div className={`circle-${getCategoryFromProbability(result.probability).color} md:text-lg text-md`}>
                                    {getCategoryFromProbability(result.probability).label}
                                </div>
                            </div>
                        )}

                    {error && <div className="text-red-500">{error}</div>}

                    
                    </div>
                </div>
                
                <div className="mt-8 left-0 w-full bg-red-500 bg-opacity-60 text-gray-200 text-center p-4 text-base">
                    <b>Warning:</b> Although this model has archieved a high accuracy on mutlitple generators, please be mindful that its predictions may not always be correct.
                    </div>

                    <div className='text-gray-300 py-14 w-full bg-gray-50 bg-opacity-10'>
                        <h1 className='text-lg mb-4'>Argus was trained on images from the following sources:</h1>
                        <div className='md:mx-56 mx-2 text-sm'>
                        <a target='blank' className='underline p-2 bg-gray-900 rounded-lg shadow-md mb-6' href="https://www.kaggle.com/datasets/birdy654/cifake-real-and-ai-generated-synthetic-images">CIFAKE: Real and AI-Generated Synthetic Images</a> <br /><br />
                        <a target='blank' className='underline p-2 bg-gray-900 rounded-lg shadow-md mb-6' href="https://huggingface.co/datasets/dalle-mini/open-images">Dalle-Mini Open-Images</a> <br /><br />
                        <a target='blank' className='underline p-2 bg-gray-900 rounded-lg shadow-md mb-6' href="https://www.kaggle.com/datasets/superpotato9/dalle-recognition-dataset">dalle recognition dataset</a> <br /><br />
                        <a target='blank' className='underline p-2 bg-gray-900 rounded-lg shadow-md mb-6' href="https://www.kaggle.com/datasets/saberghaderi/google-universal-image-256x256-guie-jpgcsv">Google Universal Image 256x256 GUIE JPGCSV</a> <br /><br />
                        <a target='blank' className='underline p-2 bg-gray-900 rounded-lg shadow-md mb-6' href="https://www.bing.com/create">Bing Image Creator</a> <br /><br />
                        <a target='blank' className='underline p-2 bg-gray-900 rounded-lg shadow-md mb-6' href="https://lexica.art/">Lexica</a> <br /><br />
                        <a target='blank' className='underline p-2 bg-gray-900 rounded-lg shadow-md mb-6' href="https://www.craiyon.com/">Craiyon</a> <br /><br />


                        <div className="p-4 bg-gray-900 rounded-lg shadow-md mb-6">
                            <p className="text-xs font-semibold">Reference:</p>
                            <p className="text-sm">
                                Wang, Z. J., Montoya, E., Munechika, D., Yang, H., Hoover, B., & Chau, D. H. (2022).
                                <i className="font-medium">DiffusionDB: A Large-Scale Prompt Gallery Dataset for Text-to-Image Generative Models</i>. 
                                arXiv:2210.14896 [cs].
                            </p>
                            <a href="https://arxiv.org/abs/2210.14896" className="text-xs text-blue-500 underline mt-2 inline-block" target="_blank" rel="noopener noreferrer">
                                Link: https://arxiv.org/abs/2210.14896
                            </a>
                        </div>

                        <div className="p-4 bg-gray-900 rounded-lg shadow-md mb-6">
                            <p className="text-xs font-semibold">Reference:</p>
                            <p className="text-sm">
                                Li, F.-F., Andreeto, M., Ranzato, M., & Perona, P. (2022). 
                                <i className="font-medium">Caltech 101 (1.0)</i> [Data set]. CaltechDATA. 
                            </p>
                            <a href="https://doi.org/10.22002/D1.20086" className="text-xs text-blue-500 underline mt-2 inline-block" target="_blank" rel="noopener noreferrer">
                                https://doi.org/10.22002/D1.20086
                            </a>
                        </div>

                        <div className="p-4 bg-gray-900 rounded-lg shadow-md mb-6">
                        <p className="text-xs font-semibold">Reference:</p>
                        <p className="text-sm">
                            Russakovsky, O., Deng, J., Su, H., Krause, J., Satheesh, S., Ma, S., ... & Fei-Fei, L. (2015). 
                            <i className="font-medium">ImageNet Large Scale Visual Recognition Challenge</i>. 
                            International Journal of Computer Vision (IJCV), 115(3), 211-252.
                        </p>
                        <a href="https://doi.org/10.1007/s11263-015-0816-y" className="text-xs text-blue-500 underline mt-2 inline-block" target="_blank" rel="noopener noreferrer">
                            DOI: 10.1007/s11263-015-0816-y
                        </a>
                        </div>
                        

                        </div>
                    </div>
                </div>
                
            


                
        </div>

    );
}

export default Argus;