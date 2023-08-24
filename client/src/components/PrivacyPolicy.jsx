import React from 'react'
import Navbar from './Navbar'

const PrivacyPolicy = () => {
  return (
    <div className='bg-primary min-h-screen font-poppins mx-24 mt-12 text-gray-300'>
        <Navbar className='relative'/>
        <h1 className='text-3xl mb-4 text-secondary font-righteous text-center relative mt-24'>Privacy Policy for SyntheticEye</h1>

        <h3 className='text-2xl font-righteous text-white'>Introduction</h3>
        <div className='mb-2'>
            Welcome to SyntheticEye. We respect your privacy and want to protect your personal data. This Privacy Policy will tell you how we handle and process your data when you use our service. 
        </div>

        <h3 className='text-2xl font-righteous text-white'>Data We Collect</h3>
        <div className='mb-2'>
        Given the design of our service: <br />
        We do not require or collect any personal identification information. 
        <br />
        Images uploaded for analysis are processed in real-time and are not stored on our servers or any third-party servers. Once the analysis is done, the image is discarded. 
        </div>

        <h3 className='text-2xl font-righteous text-white'>How We Use Your Data </h3>
        <div className='mb-2'>
            We use the uploaded images for the sole purpose of providing an analysis based on our trained model. These images are not stored, shared, or used for any other purpose. 
        </div>

        <h3 className='text-2xl font-righteous text-white'>Data Security</h3>
        <div className='mb-2'>
            We have implemented appropriate security measures to prevent your data from being accidentally lost, used, or accessed in an unauthorized way. The processing of your images is done securely, and the data is not stored beyond the immediate processing time. 
        </div>

        <h3 className='text-2xl font-righteous text-white'>Data Retention</h3>
        <div className='mb-2'>
            We do not retain the images uploaded to our service. Once the image is processed and a response is sent back to you, the image is discarded from our temporary memory.
        </div>

        <h3 className='text-2xl font-righteous text-white'>Changes to This Privacy Policy</h3>
        <div className='mb-2'>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page. </div>

        <h3 className='text-2xl font-righteous text-white'>Your Legal Rights</h3>
        <div>
            Under certain regulations, such as the General Data Protection Regulation (GDPR), users have specific rights concerning their personal data. At SyntheticEye:  <br />
            Processing without storage: We process the images you upload for prediction purposes, but we do not retain, store, or reuse them after the predictions is made. <br />
            No personal data collection: We do not collect any additional personal data, identifiers, or metadata associated with the images or the users who upload them. <br />
            Right ot information: You have the right to be informed about how we handle data, even if it's only processed transiently. <br />
            Right to Erasure (Right to be Forgotten): Given that we do not store your images or any associated data post-prediction, there is no persistent data to erase. However, you can always contact us if you have concerns about how your data is handled. <br />
        </div>

        <div className='mb-8'>
            We prioritize your privacy and are committed to maintaining the confidentiality and security of any data you entrust to our service. If you have any questions about our data practices, please contact us.
        </div>
    </div>
  )
}

export default PrivacyPolicy