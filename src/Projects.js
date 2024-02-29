import React from 'react';
import './project.scss';
import Header_2 from './header-2';
import wastenot from './images/wastenot.jpg'
import vegex from './images/vegex.jpg'
import slm from './images/slm.jpg'
import game from './images/game.jpg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Projects() {
    return (
        <div className="Projects">
            <Header_2 />
            {/* <div className="page-head">PROJECTS</div> */}
            <div className="cards">
                <div className="card-1">
                    <img src={wastenot} alt="logo" className="card-img" style={{ width: "50%", borderRadius: "50%" }} /><br />
                    <a href='https://github.com/ishuonly/ExpirationDateTracker' target='_blank' className="card-head">WasteNot: Expiration Date Tracker</a>
                    <p className="card-subhead">2023 . HACKATHON PROJECT</p>
                    <p className="card-text">A series of dynamic bar ranking videos illustrating social and entertainment stats centred around India.</p>
                </div>
                <div className="card-1">
                    <img src={vegex} alt="logo" className="card-img" style={{ width: "50%", borderRadius: "50%" }} /><br />
                    <a href='https://github.com/ishuonly/VegCoverDetection' target='_blank' className="card-head">VegEx</a>
                    <p className="card-subhead">2023 . INTERNSHIP PROJECT</p>
                    <p className="card-text">Webapp to detect vegetation cover in satellite images using deep learning</p>
                </div>
                <div className="card-1">
                    <img src={slm} alt="logo" className="card-img" style={{ width: "50%", borderRadius: "50%"  }} /><br />
                    <a href='https://github.com/ishuonly/astica-lms' target='_blank' className="card-head">Software License Managament</a>
                    <p className="card-subhead">2023 . INTERNSHIP PROJECT</p>
                    <p className="card-text">A series of dynamic bar ranking videos illustrating social and entertainment stats centred around India.</p>
                </div>
            </div>
            <div className="cards">
                <div className="card-1">
                    <img src={game} alt="logo" className="card-img" style={{ width: "50%", borderRadius: "50%"  }} /><br />
                    <a href='https://github.com/ishuonly/SlidingPuzzle' target='_blank' className="card-head">Sliding Puzzle</a>
                    <p className="card-subhead">2021 . SELF PROJECT</p>
                    <p className="card-text">Harry Potter themed sliding puzzle game developed using HTML, CSS & Javascript</p>
                </div>
                {/* <div className="card-1">
                    <img src={logo} alt="logo" className="card-img" style={{ width: "50%" }} /><br />
                    <a href='https://github.com/ishuonly/astica-lms' target='_blank' className="card-head">Software License Managament</a>
                    <p className="card-subhead">2023 . INTERNSHIP PROJECT</p>
                    <p className="card-text">A series of dynamic bar ranking videos illustrating social and entertainment stats centred around India.</p>
                </div>
                <div className="card-1">
                    <img src={logo} alt="logo" className="card-img" style={{ width: "50%" }} /><br />
                    <a href='https://github.com/ishuonly/SlidingPuzzle' target='_blank' className="card-head">Sliding Puzzle</a>
                    <p className="card-subhead">2021 . SELF PROJECT</p>
                    <p className="card-text">Harry Potter themed sliding puzzle game developed using HTML, CSS & Javascript</p>
                </div> */}
            </div>
        </div>
    );
}

export default Projects;