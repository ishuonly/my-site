// Import necessary modules and components
import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Decks from './Decks';
import Art from './Art';
import Contact from './Contact';


// Define the main App component
function App() {
  return (
    <div className="App">
      {/* Set up routing with BrowserRouter */}
      <BrowserRouter>
        {/* Define routes */}
        <Routes>
          {/* Route for the index */}
          <Route index element={<Home />} />
          {/* Other routes */}
          <Route path="about-me" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="art" element={<Art />} />
          <Route path="decks" element={<Decks />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* Footer component */}
      {/* <Footer /> */}
    </div>
  );
}

// Export the App component
export default App;