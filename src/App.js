import React, {Component} from 'react';
import { HashRouter, Routes ,Route, Router,BrowserRouter} from 'react-router-dom'
import './App.css'; 
import Main from './Main';
import Avatar from './Avatar';
import Button from './Button';
import Radio from './Button/Radio';
import RadioButton from './Button/RadioButton';
import Home from './Home'
import Animation from './Animation'
import Game from './Game'
import Mbti from './Mbti'
import MbtiResult from './Mbti/MbtiResult'
// import MbtiTest from './MbtiTest'
import { ReactComponent as Testing} from './resource/avatar.svg'


function App() {
  
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) kakao.init('152cff34a176ba19c22f2f1b6260b315')
  }


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
              <Route path="/home" element={<Home/>} />
              <Route path="/Animation" element={<Animation/>}/>
              <Route path="/Game" element={<Game/>}/>
              <Route path="/Mbti" element={<Mbti/>}/>
              <Route path="/Mbti/MbtiResult" element={<MbtiResult/>}/>
              {/* <Route path="/MbtiTest" element={<MbtiTest/>}/> */}
            </Routes>
        </HashRouter>
      </React.StrictMode>
 
    </div>
  );
}

export default App;
