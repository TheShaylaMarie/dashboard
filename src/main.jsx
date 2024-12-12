import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/Pages/About.jsx'
import Contact from './components/Pages/Contact.jsx'
import Projects from './components/Pages/Projects.jsx'
import Home from './components/Pages/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'








createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/project" element={<Projects/>}/>

          
        </Routes>
      </Router>
    
  </StrictMode>,
)
