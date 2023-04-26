
import React from 'react'
import './App.css'
import { ReactComponent as Testing} from './resource/avatar.svg'
import { useNavigate } from 'react-router'

const Test =  ()=> {

  
  const navigate = useNavigate()


  return (
    <div className="App">
       <div className='menuList'>
          <div onClick={()=>navigate('/button')}>버튼 스타일</div>
          <div onClick={()=>navigate('/button/radio')}>라디오버튼</div>
       </div>
        
    </div>
  );
}

export default Test;
