import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation';
import Content from './components/content';
import About from './components/about';
import NotFoundPage from './components/404';

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Content />} >
            <Route path=":id" element={<Content />} />
          </Route>
          <Route path='/about' element={< About />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
