import React from 'react';
import './about.scss';
import Header_1 from './header-1';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function About() {
    return (
      <div className="About">
        <Header_1/>
      </div>
    );
  }
  
  export default About;