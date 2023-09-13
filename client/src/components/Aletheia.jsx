import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { DotLoader, RingLoader } from "react-spinners";
import { AiFillCheckCircle } from 'react-icons/ai';
import FaceDetectors from './FaceDetectors';

const Aletheia = () => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const fileInput = useRef(null);
    const [fileSelected, setFileSelected] = useState(false);
    const [isConsentGiven, setIsConsentGiven] = useState(false);
    const [loading, setLoading] = useState(false);

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
            const response = await fetch('https://syntheticeye-dev.onrender.com/predict', {
                method: 'POST',
                mode: 'cors',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            setResult(data);
        } catch (err) {
            console.error('Error:', err);
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    function triggerFileInput(e) {
        e.stopPropagation();
        fileInput.current.click();
    }


    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileSelected(true);
        } else {
            setFileSelected(false);
        }
    };

    return (
        <div className='bg-primary'>
        <Navbar />

        <div className='text-center font-poppins mt-2'>
                <div className='text-white md:text-8xl text-5xl pt-16 pb-2 font-white font-righteous'>Aletheia</div>
                <div className='font-secondary font-poppins md:text-xl text-lg md:tracking-widest tracking-wide pb-4'>AI-GENERATED FACE DETECTION</div>

                <div className="flex items-center justify-center">
                <div className="text-gray-300 text-sm w-5/6 md:w-4/6 text-center mb-4 md:text-sm">
                    Aletheia, named after the Greek goddess of truth, is our AI model that differentiates real human faces from AI-generated ones using advanced machine learning.
                </div>
        </div>

        <div className='flex md:flex-row flex-col justify-center items-start mt-6 md:mx-24 mx-4'>

        <div className='md:w-1/2 md:mr-12 mb-6'> 
                    <div className='iframe-container glow-video md:rounded-3xl rounded-lg'>
                        <iframe src="https://player.vimeo.com/video/859624153?h=05cfed9838" width="100%" height="440" className='primary-border-2' allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='bg-gray-700 text-white mt-12 md:mt-0 mx-[-20px] md:p-0 p-4 only-mobile'>Our AI-generated face detection model is currently optimized for desktop use only. For full functionality, please access our site on a computer.</div>
                    <h3 className='text-white text-lg mb-2 mt-8'>Aletheia can detect: </h3>
                    <FaceDetectors />
                </div>
                
                <div className='md:w-1/2 right-column'>
                <div className="relative">

                    <div onClick={triggerFileInput} className="h-80 md:py-16 py-6 px-16 border-secondary file_border_radius text-center cursor-pointer hover:bg-gray-800 text-gray-300 flex items-center justify-center overflow-hidden">
                        <input 
                            type="file" 
                            accept="image/*"
                            className="absolute top-0 left-0 w-[0px] h-[0px] opacity-0 cursor-pointer text-gray-300 text-xl" 
                            ref={fileInput} 
                            onChange={handleFileChange}
                        />
                        <div className={`${fileSelected ? 'opacity-80' : 'opacity-80'} flex items-center justify-center h-full w-full text-lg`}>
                            {
                                fileSelected 
                                ? <AiFillCheckCircle size={26} />
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
                            <div className='overlayStyle text-white'>
                                <div className='containerStyle'>
                                    <DotLoader color={"#32ffd6"} size={75} />
                                    <p className='loading_text'>Aletheia is thinking...</p>
                                </div>
                            </div>
                        )}

                    <div className='text-gray-300 mb-2'>This face is most likely</div>
                    {result && (
                    <div className={`flex items-center justify-center font-righteous mb-4`}>
                        <div className={`text-center ${result.prediction ? 'bg-secondary' : 'bg-fake'} md:text-2xl text-xl md:w-3/6 w-4/6 md:p-4 p-2`}>
                            {result.prediction ? "HUMAN" : "AI-GENERATED"}
                        </div>
                    </div>
                    )}

                    {error && <div className="text-red-500">{error}</div>}

                    
                    </div>
                </div>
                
                <div className="mt-8 left-0 w-full bg-red-500 bg-opacity-50 text-gray-200 text-center p-4 text-sm">
                    <b>Warning:</b> Although our model excels with StyleGAN images, it may not always be accurate. It's designed to spot faces from AI sources like 'This Person Does Not Exist', but not AI art generators like 'Stable Diffusion'. For broader AI-image detection, consider our Argus model.
                    </div>

                    <div className='text-gray-300 py-14 w-full bg-gray-50 bg-opacity-10'>
                        <h1 className='text-lg mb-4'>Aletheia was trained on images from the following sources:</h1>
                        <div className='md:mx-56 mx-2 text-sm'>
                        <a target='blank' className='underline' href="https://www.kaggle.com/datasets/xhlulu/140k-real-and-fake-faces">The 140k Real and Fake Faces dataset created by Gaurav Dutta and Xhlulu.</a> <br /><br />
                        <a target='blank' className='underline' href="https://www.kaggle.com/datasets/selfishgene/synthetic-faces-high-quality-sfhq-part-4">The Synthetic Faces High Quality (SFHQ) part 4.</a> <br /><br />
                        <a target='blank' className='underline' href="https://generated.photos">Free Dataset for Academic Research by Generated Photos</a> <br /><br />
                        <a target='blank' className='underline' href="https://www.kaggle.com/datasets/uditsharma72/real-vs-fake-faces">Real vs fake faces from kaggle</a> <br /><br />
                        <a target='blank' className='underline' href="https://www.kaggle.com/datasets/sbaghbidi/human-faces-object-detection?select=images">Human Faces (Object Detection) from kaggle</a> <br /><br />
                        <p>
                            CelebA: Liu, Ziwei; Luo, Ping; Wang, Xiaogang; Tang, Xiaoou. (2015). 
                            <i> Deep Learning Face Attributes in the Wild</i>. 
                            Proceedings of International Conference on Computer Vision (ICCV), December 2015.
                            [<a target='blank' href="https://mmlab.ie.cuhk.edu.hk/projects/CelebA.html" rel="noopener noreferrer">Link</a>]
                        </p><br />
                        <p>
                            Bae, Gwangbin; de La Gorce, Martin; Baltrušaitis, Tadas; Hewitt, Charlie; Chen, Dong; 
                            Valentin, Julien; Cipolla, Roberto; Shen, Jingjing. (2023). 
                            <i> DigiFace-1M: 1 Million Digital Face Images for Face Recognition</i>. 
                            2023 IEEE Winter Conference on Applications of Computer Vision (WACV), IEEE.
                            [<a target='blank' href="https://microsoft.github.io/DigiFace1M/">Link</a>]
                        </p><br />
                        <a target='blank' className='underline' href="https://www.kaggle.com/datasets/ashwingupta3012/human-faces?select=Humans">Human Faces from kaggle</a> <br /><br />
                        <p>
                            Gary B. Huang, Manu Ramesh, Tamara Berg, Erik Learned-Miller. (2007). 
                            <i>Labeled Faces in the Wild: A Database for Studying Face Recognition in Unconstrained Environments</i>. 
                            University of Massachusetts, Amherst, Technical Report 07-49. [<a target='blank' href="http://vis-www.cs.umass.edu/lfw/">Labeled Faces in the Wild</a>]
                        </p> <br />
                        <div className="citation">
                            N. Kumar, A. C. Berg, P. N. Belhumeur, and S. K. Nayar, 
                            <i>"Attribute and Simile Classifiers for Face Verification,"</i> 
                            in Proceedings of the International Conference on Computer Vision (ICCV), 2009.
                        </div>
                        </div>
                    </div>
                </div>
                
            


                
        </div>

    );
}

export default Aletheia;