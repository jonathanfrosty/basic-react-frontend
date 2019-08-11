import React from 'react';
import Navbar from '../Navbar/Navbar';
import MainContent from '../MainContent/MainContent';
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
