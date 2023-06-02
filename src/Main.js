
import React, {Component} from 'react';
import './App.css';  
 
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import imgAvatar from './resource/avatar.svg';

const Main =  (()=> {

  
  const navigate = useNavigate()
  const location = useLocation();
  

  return (
    <div className="App">
       <div className='menuList'>
          {/* <div onClick={()=>navigate('/button')}>버튼 스타일</div>
          <div onClick={()=>navigate('/button/radio')}>라디오버튼</div>
          <div onClick={()=>navigate('/animation')}>애니메이션</div>
          <div onClick={()=>navigate('/game')}>똥피하기 게임(PC용)</div> */}
          {/* <div onClick={()=>window.location.href='https://phr0929.github.io/mbti'}>MBTI 카톡 스타일 테스트</div> */}
          <div onClick={()=>navigate('/Mbti')}>MBTI 카톡 스타일 테스트</div>
       </div>
        
    </div>
  );
})

export default Main;
