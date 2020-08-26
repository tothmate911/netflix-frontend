import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route>
          <Route exact path="/" component={MainPage} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
