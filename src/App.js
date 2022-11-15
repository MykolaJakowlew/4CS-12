import React from 'react';
import './App.css';
import MainCarousel from './components/carousel';
import Navigation from './components/navigation';

function App () {
  return (
    <div className="App">
      <Navigation />
      <MainCarousel />
    </div>
  );
}

export default App;
