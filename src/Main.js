
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
          <div onClick={()=>navigate('/game')}>똥피하기 게임</div>
          <div onClick={()=>navigate('/mbti')}>MBTI 테스트</div>
       </div>
        
    </div>
  );
})

export default Main;
