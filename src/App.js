import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Base from '../src/component/layout/Base';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Protocol from './component/element/Protocol';
import Glob from './component/element/Glob';


const App = () => {
  AOS.init({
    // initialise with other settings
    duration : 2000
  });
    return (
     
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/protocol' element={<Protocol />} />
            <Route path='/Glob' element={<Glob />} />

          </Routes>
        </Base>
      </BrowserRouter>
        
   
    )
  }
  
  export default App
