import React from 'react';
import './project.scss';
import Header_1 from './header-1';
import logo from './images/logo-white.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Art() {
  return (
    <div className="Art">
      <Header_1 />
      {/* <div className="page-head" style={{color:"#f9e9d5"}}>MY ARTWORK</div> */}
      <div className="cards">
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"100%"}}/>
            </div>
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"100%"}}/>
            </div>
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"100%"}}/>
            </div>
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"100%"}}/>
            </div>
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"100%"}}/>
            </div>
        </div>
        <div className="cards">
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"100%"}}/>
            </div>
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"100%"}}/>
            </div>
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"100%"}}/>
            </div>
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"100%"}}/>
            </div>
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"100%"}}/>
            </div>
        </div>
    </div>
  );
}

export default Art;