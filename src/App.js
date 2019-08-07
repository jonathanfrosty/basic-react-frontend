import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Page/Page';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Page />
      </Router>
    </>
  );
}
