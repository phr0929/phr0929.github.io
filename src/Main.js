
import React, {Component} from 'react';
import './App.css';  
 
import { useNavigate } from 'react-router';
import imgAvatar from './resource/avatar.svg';

const Main =  (()=> {

  
  const navigate = useNavigate()


  return (
    <div className="App" onClick={()=>navigate('/button')}>
       <div>
          <div>버튼 스타일</div>
       </div>
        
    </div>
  );
})

export default Main;
