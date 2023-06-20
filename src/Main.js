
import React, {Component, useEffect} from 'react';
import './App.css';  
 
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import mainImg from './resource/mainimg.webp'
import icInsta from './resource/instar_ffffff.svg'
import icYoutube from './resource/youtube_ffffff.svg'
import imgProfile from './resource/profile.webp'

const Main =  (()=> {

  
  const navigate = useNavigate()
  const location = useLocation();

 

  return (
    <div className="App">
     

      <div style={{width:'100vw',height:'100vh',position:'fixed',alignItems:'center',flexDirection:'column'}}>
          <div style={{position:'absolute',width:'100vw',height:'100vh',top:0,left:0,zIndex:30,display:'flex',
          flexDirection:'column',alignItems:'center'}}>
            <div style={{width:1050,display:'flex',justifyContent:'center', }}>
              <img src={icYoutube} style={{width:30,height:30,margin:15}} alt=''/>
              <img src={icInsta} style={{width:30,height:30,margin:15}} alt=''/>
            </div>
            <div style={{height:'100%',display:'flex',flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <img src={imgProfile} alt='' style={{width:120,height:120,borderRadius:100,border:'5px solid #dcdcdc',
              marginBottom:30,objectFit:'cover'}}/>
              <div style={{fontFamily:'EliceDigitalBaeum_Bold',fontSize:45,}}>
              서산개백수's
              </div>
              <div style={{fontFamily:'EliceDigitalBaeum_Bold',fontSize:50,marginTop:-20}}>
              Workspace
              </div>
              <div style={{fontSize:20,color:'#969696',marginTop:15}}>
              유튜브 서산개백수의 작업공간
              </div>
            </div>
            
            <div style={{position:'absolute',zIndex:25,width:'100vw',display:'flex',flexDirection:'column',
              alignItems:'center',justifyContent:'center',bottom:0,left:0,
              padding:30,boxSizing:'border-box'}}>
              <div className='mainScrollIcon'>
                  <div className='aniScrollDown'></div>
              </div>
              
              <div className='mainScrollText'>scroll</div>
            </div>

            {/* <div className='menuList'>  */}
                {/* <div onClick={()=>window.location.href='https://phr0929.github.io/mbti'}>MBTI 카톡 스타일 테스트</div> 
                <div onClick={()=>window.location.href='https://phr0929.github.io/todolist'}>투두리스트</div> 
                <div onClick={()=>window.location.href='https://phr0929.github.io/drawing'}>CSS 그림</div>  */} 
                  {/* <div onClick={()=>navigate('/button')}>버튼 스타일</div>
                <div onClick={()=>navigate('/button/radio')}>라디오버튼</div> 
                <div onClick={()=>navigate('/game')}>똥피하기 게임(PC용)</div> */}
                {/* <div onClick={()=>navigate('/animation')}>CSS 애니메이션</div> */}
                {/* <div onClick={()=>navigate('/Mbti')}>MBTI 카톡 스타일 테스트</div> */}
                {/* <div onClick={()=>navigate('/game')}>똥피하기 게임(PC용)</div> */}
              {/* </div> */}
            {/* <div className='main' style={{position:'absolute',width:'100vw',height:'100vh',zIndex:20,
            display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <div style={{fontFamily:'EliceDigitalBaeum_Bold',fontSize:45,}}>
              서산개백수's
              </div>
              <div style={{fontFamily:'EliceDigitalBaeum_Bold',fontSize:50,marginTop:-20}}>
              Workspace
              </div>
              <div style={{fontSize:20,color:'#969696',marginTop:15}}>
              유튜브 서산개백수의 작업공간
              </div>
          
           

              <div style={{position:'absolute',zIndex:25,width:'100vw',display:'flex',flexDirection:'column',
            alignItems:'center',justifyContent:'center',bottom:0,left:0,
            padding:30,boxSizing:'border-box'}}>
              <div className='mainScrollIcon'>
                  <div className='aniScrollDown'></div>
              </div>
              
              <div className='mainScrollText'>scroll</div>
            </div>
          </div>
         */}
          
        

         
            
          </div>
          <img src={mainImg} alt='' style={{position:'absolute',width:'100vw',height:'100vh',objectFit:'cover',zIndex:10}}/>

         
      </div>


      <div style={{width:'100vw',position:'absolute',zIndex:50,display:'flex',flexDirection:'column',marginTop:'100vh',
      backgroundColor:'#222',boxShadow:'0px 0px 50px #000'}}>
        <div style={{display:'flex',padding:'30px 15px 30px 15px',justifyContent:'center',alignItems:'center',boxSizing:'border-box'}}>
          <div style={{padding:10,fontSize:18,fontWeight:700}}>All</div>
          <div style={{padding:10,}}>CSS Drawing</div>
          <div style={{padding:10,}}>CSS Basic</div>
          <div style={{padding:10,}}>Web Page</div>
          <div style={{padding:10,}}>Etc.</div>
        </div>

        <div style={{display:'flex',justifyContent:'center'}}>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}}  onClick={()=>window.location.href='https://phr0929.github.io/mbti'}>
            <div style={{width:400,height:250,backgroundColor:'#969696',borderRadius:15}}></div>
            <div style={{fontSize:16,fontWeight:700,padding:'15px 7px 15px 7px'}}>카카오톡 스타일 MBTI 테스트</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}} onClick={()=>window.location.href='https://phr0929.github.io/todolist'}>
            <div style={{width:400,height:250,backgroundColor:'#969696',borderRadius:15}}></div>
            <div style={{fontSize:16,fontWeight:700,padding:'15px 7px 15px 7px'}} >To Do List</div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}} onClick={()=>window.location.href='https://phr0929.github.io/drawing'}>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}}>
            <div style={{width:400,height:250,backgroundColor:'#969696',borderRadius:15}}></div>
            <div style={{fontSize:16,fontWeight:700,padding:'15px 7px 15px 7px'}}>CSS 그림</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}}>
            <div style={{width:400,height:250,backgroundColor:'#969696',borderRadius:15}}></div>
            <div style={{fontSize:16,fontWeight:700,padding:'15px 7px 15px 7px'}}>카카오톡 스타일 MBTI 테스트</div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}}>
            <div style={{width:400,height:250,backgroundColor:'#969696',borderRadius:15}}></div>
            <div style={{fontSize:16,fontWeight:700,padding:'15px 7px 15px 7px'}}>카카오톡 스타일 MBTI 테스트</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}}>
            <div style={{width:400,height:250,backgroundColor:'#969696',borderRadius:15}}></div>
            <div style={{fontSize:16,fontWeight:700,padding:'15px 7px 15px 7px'}}>카카오톡 스타일 MBTI 테스트</div>
          </div>
        </div>
      </div>

      
    </div>
  );
})

export default Main;
