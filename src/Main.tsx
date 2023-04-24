
import React, {Component} from 'react';
import './App.css';  
import { useNavigate } from 'react-router';

const Main =  (()=> {

  
  const navigate = useNavigate()


  return (
    <div className="App" onClick={()=>navigate('/avatar')}>
       <div>
          <div>아바타 수정</div>
       </div>
       <div>
          아바타
        </div>
    </div>
  );
})

export default Main;
