import React from 'react'

import { Aboutus, Button, Hero, Imgslider, Models, Navbar, Personimg, Persontext, Project, ProjectCard, ProjectText, Quote, Teamcard, Divider } from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div>
        <div>
          <Navbar />
        </div>
      </div>

      <div className='bg-primary'>
        <div>
          <Hero /> 
        </div>
      </div>

      <Divider />

      <div className='bg-primary dark-bg '>
        <Project />
        <Divider />
        <Aboutus />
        <Models />
      </div>

    </div>
  )
}

export default App