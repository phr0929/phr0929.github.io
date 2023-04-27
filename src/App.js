import React, {Component} from 'react';
import { HashRouter, Routes ,Route, Router,BrowserRouter} from 'react-router-dom'
import './App.css'; 
import Main from './Main';
import Avatar from './Avatar';
import Button from './Button';
import Radio from './Button/Radio';
import RadioButton from './Button/RadioButton';
import { ReactComponent as Testing} from './resource/avatar.svg'
 
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <HashRouter>
            <Routes>
              <Route path="/" element={<Main/>} /> 
              <Route path="/avatar" element={<Avatar/>} /> 
              <Route path="/button" element={<Button/>} /> 
              <Route path="/button/radio" element={<Radio/>}/>
              <Route path="/button/radiobutton" element={<RadioButton/>}/>
            </Routes>
        </HashRouter>
      </React.StrictMode>
 
    </div>
  );
}

export default App;
