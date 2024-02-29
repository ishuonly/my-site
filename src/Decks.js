import React from 'react';
import './project.scss';
import Header_1 from './header-1';
import swiggy from './images/swiggy.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Decks() {
    return (
      <div className="Decks">
        <Header_1/>
        {/* <div className="page-head">PRODUCT DECKS</div> */}
        <div className="cards">
            <div className="card-1">
                <img src={swiggy} alt="logo" className="card-img" style={{width:"50%", borderRadius: "50%"}}/><br/>
                <a href='https://github.com/ishuonly/ExpirationDateTracker'  style={{color:"#f9e9d5"}} target='_blank' className="card-head">Converting Casual Users into Transacting Users on Swiggy</a>
            </div>
        </div>
      </div>
    );
  }
  
  export default Decks;