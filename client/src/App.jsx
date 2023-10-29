import {React, useEffect} from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Aboutus, Button, Hero, Imgslider, Models, Navbar, Personimg, Persontext, Project, ProjectCard, ProjectText, Quote, Teamcard, Divider } from './components'
import HomePage from './components/HomePage';
import Aletheia from './components/Aletheia';
import Argus from './components/Argus';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContentLibrary from './components/ContentLibrary';
import ContentLibraryTechnical from './components/ContentLibraryTechnical';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto" // instant scroll
      });
    }, 1);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
        <ScrollToTop />
        <div className='bg-primary w-full overflow-hidden'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aletheia" element={<Aletheia />} />
          <Route path="/argus" element={<Argus />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path='content-library-general' element={<ContentLibrary />}></Route>
          <Route path='content-library-technical' element={<ContentLibraryTechnical />}></Route>
        </Routes>
        </div>
    </Router>
  )
}

export default App;
