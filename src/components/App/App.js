import React from 'react';
import Navbar from '../Navbar';
import MainContent from '../MainContent';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Navbar />
      <MainContent />
    </Router>
  );
}
