import React from 'react';
import './App.scss';
import Header_1 from './header-1';
import me from './images/me.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
      <div className="Home">
        <div className="home-1">
            <Header_1/>
            <p className="name">Ikshita <br/> Agarwal</p>
            <p className="sub-name">I like to build and tinker with stuff. I like to build and tinker with stuff.</p>
        </div>
        <div className="me-img"><img src={me} alt="me" className="me" /></div>
        <div className="home-2"></div>
      </div>
    );
  }
  
  export default Home;