import React from 'react';
import './styles/App.css';

import HomePage from './Pages/HomePage.js'
import AboutPage from './Pages/AboutPage.js'
import ServicesPage from './Pages/ServicesPage.js'
import WorkPage from './Pages/WorkPage.js'
import ContactPage from './Pages/ContactPage.js'

function App() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <WorkPage />
      <ContactPage />
    </>
  );
}

export default App;