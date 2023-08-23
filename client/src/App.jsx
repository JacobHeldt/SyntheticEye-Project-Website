import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Aboutus, Button, Hero, Imgslider, Models, Navbar, Personimg, Persontext, Project, ProjectCard, ProjectText, Quote, Teamcard, Divider } from './components'
import HomePage from './components/HomePage';
import Aletheia from './components/Aletheia';
import PrivacyPolicy from './components/PrivacyPolicy';

const App = () => {
  return (
    <Router>
        <div className='bg-primary w-full overflow-hidden'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aletheia" element={<Aletheia />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
        </Routes>
        </div>
    </Router>
  )
}

export default App