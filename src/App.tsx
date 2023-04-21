import React, {Component} from 'react';
import { HashRouter, Routes ,Route, Router,BrowserRouter} from 'react-router-dom'
import './App.css'; 
import Main from './Main';
import Avatar from './Avatar';
 
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <HashRouter>
            <Routes>
              <Route path="/" element={<Main/>} /> 
              <Route path="/avatar" element={<Avatar/>} /> 
            </Routes>
        </HashRouter>
      </React.StrictMode>
 
    </div>
  );
}

export default App;
