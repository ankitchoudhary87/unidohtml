
import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Partnering from './pages/Partnering';
import Events from './pages/Events';
import Project_list from './pages/Project_list';
import Project_Details from './pages/Project_Details';
import './App.css';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/partnering' element={<Partnering />} />
        <Route path='/events' element={<Events />} />
        <Route path='/project_list' element={<Project_list />} />
        <Route path='/project_details' element={<Project_Details />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;