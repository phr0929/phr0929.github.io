
import React, {Component} from 'react';
import './App.css';  
 
import { useNavigate } from 'react-router';
import imgAvatar from './resource/avatar.svg';

const Main =  (()=> {

  
  const navigate = useNavigate()


  return (
    <div className="App" onClick={()=>navigate('/avatar')}>
       <div>
          <div>아바타 수정</div>
       </div>
       <div>
          <img src={imgAvatar} alt='' style={{width:'100%',height:'100%'}}/>
        </div>
    </div>
  );
})

export default Main;
