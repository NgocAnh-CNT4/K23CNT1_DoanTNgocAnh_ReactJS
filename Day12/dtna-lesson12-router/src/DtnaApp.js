
import React from 'react'
import {Link, Route, Routes, BrowserRouter  as Router} from 'react-router-dom'
import DtnaHome from './components/DtnaHome'
import DtnaAbout from './components/DtnaAbout'
import DtnaContact from './components/DtnaContact'

export default function DtnaApp() {
  return (
    <div className='container border my-3'>
        <h1> React Router Demo</h1>
        <hr/>
        <router>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div className='alert alert-danger'>
              <Routes>
                  <Route path="/" element={<DtnaHome />} />
                  <Route path="/about" element={<DtnaAbout />} />
                  <Route path="/contact" element={<DtnaContact />} />
              </Routes>
            </div>
        </router>
        </div>
  )
}
