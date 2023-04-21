
import React, {Component} from 'react';
import './App.css';  
import { useNavigate } from 'react-router';

const Main =  (()=> {

  
  const navigate = useNavigate()


  return (
    <div className="App" onClick={()=>navigate('/avatar')}>
        아바타
    </div>
  );
})

export default Main;
