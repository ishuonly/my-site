import React from 'react';
import './about.scss';
import Header_1 from './header-1';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import resume from './documents/Resume_IkshitaAgarwal.pdf'

function About() {
    return (
      <div className="About">
        <Header_1/>
        <p className="about-text">Hi, I'm Ikshita! I am an aspiring data analyst with a background in Environmental Engineering. I am doing my undergrad and masters in <a href='https://www.iitkgp.ac.in/' target='_blank' className="about-link">IIT Kharagpur</a> studying Civil Engineering (major in Environmental Engineering and Management). I absolutely love building products that brings change in peoples' life. <br/>I consider myself a passionate creator with a love for building things that bridge the gap between technology and human experience. Whether it's crafting websites, diving into the intricacies of software development, or exploring the fascinating world of AI, I'm fueled by the potential these fields hold to propel human development. <br/>Beyond the realm of code and algorithms, you'll find me immersed in the realms of art, poetry, and gazals. I believe in the power of creativity to transcend boundaries, and I occasionally express my own artistic inclinations through sketching and playing the guitar. Traveling is not just a hobby for me; it's a source of inspiration and a way to connect with diverse perspectives.

<br/>And and and...Entrepreneurial at heart, I'm always open to new ideas and collaborations. If you have a project or concept that aligns with my passion for creating meaningful and impactful solutions, don't hesitate to reach out.

<br/>Thank you for your time to go through my website. You can reach me via <a href='mailto:agarwalikshita13@gmail.com' target='_blank' className="about-link">agarwalikshita13@gmail.com</a> or <a href='https://www.linkedin.com/in/ikshita02/' target='_blank' className="about-link">LinkedIn</a>.
<br/> PS You can find my resume <a href={resume} target='_blank' className="about-link">here</a>

</p>
      </div>
    );
  }
  
  export default About;