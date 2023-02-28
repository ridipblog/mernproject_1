import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Singup from './components/Singup';
import Navbar from './components/Navbar';
import Logout from './components/Logout';
import Errorpage from './components/Errorpage';
import './App.css';
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/singup' element={<Singup />} />
          <Route exact path='/singup' element={<Singup />} />
          <Route exact path='/logout' element={<Logout />} />
          <Route exact path='/*' element={<Errorpage /> }/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;