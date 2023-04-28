
import React, {Component} from 'react';
import './App.css';  
 
import { useNavigate } from 'react-router';
import imgAvatar from './resource/avatar.svg';

const Main =  (()=> {

  
  const navigate = useNavigate()


  return (
    <div className="App">
       <div className='menuList'>
          <div onClick={()=>navigate('/button')}>버튼 스타일</div>
          <div onClick={()=>navigate('/button/radio')}>라디오버튼</div>
          <div onClick={()=>navigate('/animation')}>애니메이션</div>
       </div>
        
    </div>
  );
})

export default Main;
