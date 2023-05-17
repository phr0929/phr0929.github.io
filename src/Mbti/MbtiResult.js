import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import '../App.css'
import './mbti.css'

 



const MbtiResult =  (()=> {

  const location = useLocation();
  const mbtiContents = location.state.contents
  const navigate = useNavigate()
 
  const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setOneVh()

  useEffect(()=>{
    setOneVh();

    function onResize(){ 
        setOneVh();
    }
    window.addEventListener('resize',onResize);
  },[])

  return (
    <div className='mbtiLayout'>
          <div className='questionLayout'>
              
              <div className='mbtiTitle'>
                <div>MBTI 테스트</div>
                <div onClick={()=>navigate(-1)}>
                    다시하기
                </div>
                
              </div>
              
              <div className='questionList' style={{display:'flex'}}>
                  
                  
                  <div className='questionItemLayout'>
                    <div className='qProfileImg'>
                      <div/> <div/>
                    </div>

                    <div className='chatListLayout'>
                      <div className='qChatbox'>
                        <div>◀</div> <div>당신의 MBTI는 '{mbtiContents.mbti}' 입니다.</div>
                      </div>
                      
                      
            
                      <div style={{width:'auto',height:'auto',backgroundColor:'#fff',borderRadius:10,
                           margin:'5px 5px 15px 5px',}}>
                        <img src={mbtiContents.img} alt='' style={{width:130,height:130}}/>
                        <div style={{padding:'0px 15px 0px 15px'}}>
                          {mbtiContents.animal}
                        </div>
                        <div style={{padding:'5px 5px 20px 5px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                          <div style={{fontWeight:700,fontSize:18}}>{mbtiContents.animal2}</div>
                          <div style={{marginLeft:2}}>유형</div>
                        </div>
                      </div>
 

                      <div className='qChatbox'>
                        <div>◀</div> <div>{mbtiContents.mbti}는요</div>
                      </div>

                      {mbtiContents.contents.map((val,idx)=>
                        <div className='qChatbox' key={idx}>
                          <div>◀</div> <div>{val}</div>
                        </div>
                      )}
                    </div>
                  </div> 

              

              </div>
          
            </div>
          
     

    
    </div>
  );
})

export default MbtiResult;
