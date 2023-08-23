import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Aboutus, Button, Hero, Imgslider, Models, Navbar, Personimg, Persontext, Project, ProjectCard, ProjectText, Quote, Teamcard, Divider } from './components'
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
        <div className='bg-primary w-full overflow-hidden'>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        </div>
    </Router>
  )
}

export default App