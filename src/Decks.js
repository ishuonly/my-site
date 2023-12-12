import React from 'react';
import './project.scss';
import Header_1 from './header-1';
import logo from './images/logo-black.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Decks() {
    return (
      <div className="Decks">
        <Header_1/>
        <div className="page-head">PRODUCT DECKS</div>
        <div className="cards">
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"50%"}}/>
                <p className="card-head">India in pixels</p>
                <p className="card-subhead">2017 . SELF PROJECT</p>
                <p className="card-text">A series of dynamic bar ranking videos illustrating social and entertainment stats centred around India.</p>
            </div>
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"50%"}}/>
                <p className="card-head">India in pixels</p>
                <p className="card-subhead">2017 . SELF PROJECT</p>
                <p className="card-text">A series of dynamic bar ranking videos illustrating social and entertainment stats centred around India.</p>
            </div>
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"50%"}}/>
                <p className="card-head">India in pixels</p>
                <p className="card-subhead">2017 . SELF PROJECT</p>
                <p className="card-text">A series of dynamic bar ranking videos illustrating social and entertainment stats centred around India.</p>
            </div>
        </div>
        <div className="cards">
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"50%"}}/>
                <p className="card-head">India in pixels</p>
                <p className="card-subhead">2017 . SELF PROJECT</p>
                <p className="card-text">A series of dynamic bar ranking videos illustrating social and entertainment stats centred around India.</p>
            </div>
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"50%"}}/>
                <p className="card-head">India in pixels</p>
                <p className="card-subhead">2017 . SELF PROJECT</p>
                <p className="card-text">A series of dynamic bar ranking videos illustrating social and entertainment stats centred around India.</p>
            </div>
            <div className="card-1">
                <img src={logo} alt="logo" className="card-img" style={{width:"50%"}}/>
                <p className="card-head">India in pixels</p>
                <p className="card-subhead">2017 . SELF PROJECT</p>
                <p className="card-text">A series of dynamic bar ranking videos illustrating social and entertainment stats centred around India.</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Decks;