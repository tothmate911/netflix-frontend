import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import DetailedVidePage from './pages/DetailedVideoPage';

import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/videos/:id" component={DetailedVidePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
