import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'material-icons/iconfont/material-icons.css';
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
// import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certificate from './pages/Certificate';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/certificate' element={<Certificate />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      
    </Router>
  )
}

export default App