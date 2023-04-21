import React, {Component} from 'react';
import { Routes ,Route, Router,BrowserRouter} from 'react-router-dom'
import './App.css'; 
import Main from './Main';
import Avatar from './Avatar';
 
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main/>} /> 
              <Route path="/avatar" element={<Avatar/>} /> 
            </Routes>
        </BrowserRouter>
      </React.StrictMode>
 
    </div>
  );
}

export default App;
