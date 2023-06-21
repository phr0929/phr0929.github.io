
import React, {Component, useEffect} from 'react';
import './App.css';  
import './main.css'
 
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import mainImg from './resource/mainimg.webp'
import icInsta from './resource/instar_ffffff.svg'
import icYoutube from './resource/youtube_ffffff.svg'
import icTstory from './resource/tstory_ffffff.svg'
import imgProfile from './resource/profile.svg'
import imgLogo from './resource/logo.svg'
import imgLogoGray from './resource/logo_gray.svg'
import imgMouse from './resource/mouse_ffffff.svg'
import imgWork1 from './resource/work1.webp'
import imgWork2 from './resource/work2.webp'
import imgWork3 from './resource/work3.webp'
import imgWork4 from './resource/work4.webp'
import imgWork5 from './resource/work5.webp'
import imgSite from './resource/site.svg'
import imgCodepen from './resource/codepen.svg'

const Main =  (()=> {

  
  const navigate = useNavigate()
  const location = useLocation();

 

  return (
    <div className="App">
      

      <div style={{width:'100vw',height:'100vh',position:'fixed',alignItems:'center',flexDirection:'column'}}>

          <div style={{position:'absolute',width:'100vw',height:'100vh',top:0,left:0,zIndex:100,display:'flex',
          flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
             
              <div style={{width:1050,display:'flex',alignItems:'center',height:80}}>
                <div style={{display:'flex',flex:1,alignItems:'center'}}>
                  <img src={imgLogo} alt='' style={{width:120,height:'auto'}}></img>
                  <div className='cursor'></div>
                </div>
                <img src={icYoutube} style={{width:27,height:27}} alt=''></img>
                <img src={icInsta} style={{width:27,height:27,marginLeft:20}} alt=''></img>
                <img src={icTstory} style={{width:27,height:27,marginLeft:20}} alt=''></img>
              </div>
              <div style={{display:'flex',flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <div style={{position:'relative',height:120,marginBottom:30,display:'flex',alignItems:'center',justifyContent:'center',}}>
                  <img src={imgProfile} alt='' style={{width:'auto',height:120,position:'absolute'}}/>
                </div>
                <div style={{fontSize:35,}}>
                  서산개백수's
                </div>
                <div style={{fontSize:45}}>
                  workspace
                </div>
                <div style={{fontSize:20,color:'#969696',marginTop:20}}>
                  유튜브 서산개백수의 작업공간
                </div> 
              </div>
              
            

              <div style={{position:'relative',height:80,minHeight:80,paddingTop:10,boxSizing:'border-box',display:'flex',
                   justifyContent:'center',}}>
                <div className='wheel'></div>
                <img src={imgMouse} alt='' style={{position:'absolute',zIndex:110,width:20,height:'auto'}}></img>
              </div>
              
          </div>
          
          <img src={mainImg} alt='' style={{position:'absolute',width:'100vw',height:'100vh',objectFit:'cover',zIndex:10}}/>
         
      </div>


      <div style={{width:'100vw',position:'absolute',zIndex:500,display:'flex',flexDirection:'column',marginTop:'100vh',
      backgroundColor:'#222',boxShadow:'0px 0px 50px #000'}}>
        <div style={{fontSize:20,display:'flex',padding:'50px 0px 40px 0px',justifyContent:'center',alignItems:'center',boxSizing:'border-box'}}>
          <div style={{display:'flex',textShadow:'2px 2px 0px #000',alignItems:'center',}}>
            <div style={{fontSize:10,width:15,minWidth:15}}>＞</div>
            <div style={{marginRight:15,}}>All</div>
          </div>
          <div style={{display:'flex',alignItems:'center',color:'#aaa'}}>
            <div style={{fontSize:10,width:15,minWidth:15}}></div>
            <div style={{marginRight:15}}>CSS Drawing</div>
          </div>
          <div style={{display:'flex',alignItems:'center',color:'#aaa'}}>
            <div style={{fontSize:10,width:15,minWidth:15}}></div>
            <div style={{marginRight:15}}>CSS Basic</div>
          </div>
          <div style={{display:'flex',alignItems:'center',color:'#aaa'}}>
            <div style={{fontSize:10,width:15,minWidth:15}}></div>
            <div style={{marginRight:15}}>Web Page</div>
          </div>
          <div style={{display:'flex',alignItems:'center',color:'#aaa'}}>
            <div style={{fontSize:10,width:15,minWidth:15}}></div>
            <div style={{marginRight:15}}>Etc.</div>
          </div>
        </div>

        <div style={{display:'flex',justifyContent:'center'}}>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}}>
            <div className='workBtn'>
              <div className='workBtnBorder1'></div>
              <div className='workBtnBorder2'></div>
              <div className='workBtnBorder3'></div>
              <div className='workBtnBorder4'></div>
              <div className='workBtnBar'>
                <div className='workBtnAction' onClick={()=>window.open('https://phr0929.github.io/mbti')}>
                  ＞ <img src={imgSite} alt=''/> Go Site
                </div>
                <div className='workBtnAction'  onClick={()=>window.open('https://youtu.be/zO7xOq8wzrM')}>
                  ＞ <img src={icYoutube} alt=''/> Youtube
                </div>
                {/* <div className='workBtnAction'>
                  ＞ <img src={imgCodepen} alt=''/> Codepen
                </div> */}
              </div>

              <img src={imgWork1} className='workImg' alt=''></img>
            </div>

            <div style={{padding:'24px 5px 20px 5px'}}>카카오톡 스타일 MBTI 테스트</div>
            {/* <div style={{display:'flex',justifyContent:'center',marginBottom:30}}>
              <div className='pixelButton'>
                <div style={{position:'absolute',left:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',right:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',left:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',right:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',left:0,bottom:-8,width:75,height:4,backgroundColor:'#333'}}></div>
                
                Go Site
              </div>
              <div className='pixelButton'>
                <div style={{position:'absolute',left:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',right:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',left:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',right:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',left:0,bottom:-8,width:75,height:4,backgroundColor:'#333'}}></div>
                Youtube
              </div>
              <div className='pixelButtonNone'>
                <div style={{position:'absolute',left:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',right:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',left:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',right:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',left:0,bottom:-8,width:75,height:4,backgroundColor:'#333'}}></div>
                Code
              </div>
            </div> */}
          </div>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}} >
            <div className='workBtn'>
              <div className='workBtnBorder1'></div>
              <div className='workBtnBorder2'></div>
              <div className='workBtnBorder3'></div>
              <div className='workBtnBorder4'></div>
              <div className='workBtnBar'>
                <div className='workBtnAction' onClick={()=>window.open('https://phr0929.github.io/todolist')}>
                  ＞ <img src={imgSite} alt=''/> Go Site
                </div>
                {/* <div className='workBtnAction'>
                  ＞ <img src={icYoutube} alt=''/> Youtube
                </div>
                <div className='workBtnAction'>
                  ＞ <img src={imgCodepen} alt=''/> Codepen
                </div> */}
              </div>

              <img src={imgWork2} className='workImg' alt=''></img>
            </div>
 
            <div style={{padding:'24px 5px 20px 5px'}}>To Do List</div> 
            
          </div>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}} >
            <div className='workBtn'>
              <div className='workBtnBorder1'></div>
              <div className='workBtnBorder2'></div>
              <div className='workBtnBorder3'></div>
              <div className='workBtnBorder4'></div>
              <div className='workBtnBar'>
                <div className='workBtnAction' onClick={()=>window.open('https://phr0929.github.io/drawing')}>
                  ＞ <img src={imgSite} alt=''/> Go Site
                </div>
                <div className='workBtnAction' onClick={()=>window.open('https://youtube.com/shorts/lk4FGmQevAE?feature=share')}>
                  ＞ <img src={icYoutube} alt=''/> Youtube
                </div>
                <div className='workBtnAction' onClick={()=>window.open('https://codepen.io/njurvxuu-the-reactor/embed/yLQONpW?default-tab=html%2Cresult')}>
                  ＞ <img src={imgCodepen} alt=''/> Codepen
                </div>
              </div>

              <img src={imgWork3} className='workImg' alt=''></img>
            </div>

          
            <div style={{padding:'24px 5px 20px 5px'}}>CSS로 강아지 그리기</div>
           
          </div>
          
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}}  >
            <div className='workBtn'>
              <div className='workBtnBorder1'></div>
              <div className='workBtnBorder2'></div>
              <div className='workBtnBorder3'></div>
              <div className='workBtnBorder4'></div>
              <div className='workBtnBar'>
                <div className='workBtnAction' onClick={()=>window.open('https://phr0929.github.io/drawing')}>
                  ＞ <img src={imgSite} alt=''/> Go Site
                </div>
                <div className='workBtnAction' onClick={()=>window.open('https://youtube.com/shorts/TYM40Vo58EE?feature=share')}>
                  ＞ <img src={icYoutube} alt=''/> Youtube
                </div>
                <div className='workBtnAction' onClick={()=>window.open('https://codepen.io/njurvxuu-the-reactor/pen/wvQGPEv')}>
                  ＞ <img src={imgCodepen} alt=''/> Codepen
                </div>
              </div>

              <img src={imgWork4} className='workImg' alt=''></img>
            </div>
            
            <div style={{padding:'24px 5px 20px 5px'}}>CSS로 햄버거 그리기</div>
         
          </div>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}}>
            
            <div className='workBtn'>
              <div className='workBtnBorder1'></div>
              <div className='workBtnBorder2'></div>
              <div className='workBtnBorder3'></div>
              <div className='workBtnBorder4'></div>
              <div className='workBtnBar'>
                <div className='workBtnAction' onClick={()=>window.open('https://phr0929.github.io/drawing')}>
                  ＞ <img src={imgSite} alt=''/> Go Site
                </div>
                <div className='workBtnAction' onClick={()=>window.open('https://youtube.com/shorts/rMdvvniu7Xc?feature=share')}>
                  ＞ <img src={icYoutube} alt=''/> Youtube
                </div>
                <div className='workBtnAction' onClick={()=>window.open('https://codepen.io/njurvxuu-the-reactor/pen/mdQEjyp')}>
                  ＞ <img src={imgCodepen} alt=''/> Codepen
                </div>
              </div>

              <img src={imgWork5} className='workImg' alt=''></img>
            </div>

            <div style={{padding:'24px 5px 20px 5px'}}>CSS로 컵케이크 그리기</div>
           
          </div>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}}>
            <div style={{width:300,height:300,position:'relative',backgroundColor:'#969696'}}>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',left:0,top:0}}></div>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',right:0,top:0}}></div>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',left:0,bottom:0}}></div>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',right:0,bottom:0}}></div>

              {/* <img src={imgWork2} alt='' style={{ width:'100%',height:'100%',boxSizing:'border-box',}}></img> */}
            </div> 
            
            <div style={{padding:'24px 5px 20px 5px'}}>카카오톡 스타일 MBTI 테스트</div>
            
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}}  >
            <div div style={{width:300,height:300,position:'relative',backgroundColor:'#969696'}} >
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',left:0,top:0}}></div>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',right:0,top:0}}></div>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',left:0,bottom:0}}></div>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',right:0,bottom:0}}></div>

            {/* <img src={imgWork2} alt='' style={{ width:'100%',height:'100%',boxSizing:'border-box',}}></img> */}
            </div> 
            <div style={{padding:'24px 5px 20px 5px'}}>카카오톡 스타일 MBTI 테스트</div>
            {/* <div style={{display:'flex',justifyContent:'center',marginBottom:30}}>
              <div className='pixelButton'>
                <div style={{position:'absolute',left:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',right:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',left:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',right:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',left:0,bottom:-8,width:75,height:4,backgroundColor:'#333'}}></div>
                
                Go Site
              </div>
              <div className='pixelButton'>
                <div style={{position:'absolute',left:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',right:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',left:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',right:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',left:0,bottom:-8,width:75,height:4,backgroundColor:'#333'}}></div>
                Youtube
              </div>
              <div className='pixelButton'>
                <div style={{position:'absolute',left:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',right:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',left:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',right:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',left:0,bottom:-8,width:75,height:4,backgroundColor:'#333'}}></div>
                Code
              </div>
            </div> */}
          </div>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}}>
            <div style={{width:300,height:300,position:'relative',backgroundColor:'#969696'}}>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',left:0,top:0}}></div>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',right:0,top:0}}></div>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',left:0,bottom:0}}></div>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',right:0,bottom:0}}></div>

             {/* <img src={imgWork2} alt='' style={{ width:'100%',height:'100%',boxSizing:'border-box',}}></img> */}
            </div> 
            <div style={{padding:'24px 5px 20px 5px'}}>카카오톡 스타일 MBTI 테스트</div>
            {/* <div style={{display:'flex',justifyContent:'center',marginBottom:30}}>
              <div className='pixelButton'>
                <div style={{position:'absolute',left:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',right:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',left:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',right:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',left:0,bottom:-8,width:75,height:4,backgroundColor:'#333'}}></div>
                
                Go Site
              </div>
              <div className='pixelButton'>
                <div style={{position:'absolute',left:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',right:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',left:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',right:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',left:0,bottom:-8,width:75,height:4,backgroundColor:'#333'}}></div>
                Youtube
              </div>
              <div className='pixelButton'>
                <div style={{position:'absolute',left:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',right:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',left:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',right:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',left:0,bottom:-8,width:75,height:4,backgroundColor:'#333'}}></div>
                Code
              </div>
            </div> */}
          </div>
          <div style={{display:'flex',flexDirection:'column',margin:10,alignItems:'center'}}>
            <div style={{width:300,height:300,position:'relative',backgroundColor:'#969696'}}>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',left:0,top:0}}></div>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',right:0,top:0}}></div>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',left:0,bottom:0}}></div>
              <div style={{width:7,height:7,backgroundColor:'#222',position:'absolute',right:0,bottom:0}}></div>

              {/* <img src={imgWork2} alt='' style={{ width:'100%',height:'100%',boxSizing:'border-box',}}></img> */}
            </div> 
            <div style={{padding:'24px 5px 20px 5px'}}>카카오톡 스타일 MBTI 테스트</div>
            {/* <div style={{display:'flex',justifyContent:'center',marginBottom:30}}>
              <div className='pixelButton'>
                <div style={{position:'absolute',left:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',right:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',left:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',right:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',left:0,bottom:-8,width:75,height:4,backgroundColor:'#333'}}></div>
                
                Go Site
              </div>
              <div className='pixelButton'>
                <div style={{position:'absolute',left:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',right:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',left:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',right:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',left:0,bottom:-8,width:75,height:4,backgroundColor:'#333'}}></div>
                Youtube
              </div>
              <div className='pixelButton'>
                <div style={{position:'absolute',left:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',right:-4,top:-4,width:4,height:4,
                backgroundColor:'#222'}}></div>
                <div style={{position:'absolute',left:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',right:-4,bottom:-4,width:4,height:4,backgroundColor:'#333'}}></div>
                <div style={{position:'absolute',left:0,bottom:-8,width:75,height:4,backgroundColor:'#333'}}></div>
                Code
              </div>
            </div> */}
          </div>
        </div>

        <div style={{width:'100vw',backgroundColor:'#000',display:'flex',alignItems:'center',
        justifyContent:'center',padding:30,boxSizing:'border-box'}}>
          <div style={{width:1050,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',color:'#969696'}}>
            <div style={{display:'flex',marginBottom:20}}>
              <img img src={icYoutube} style={{opacity:0.5,width:25,height:25,margin:'0px 10px 0px 10px'}} alt=''></img>
              <img src={icInsta} style={{opacity:0.5,width:25,height:25,margin:'0px 10px 0px 10px'}} alt=''></img>
              <img src={icTstory} style={{opacity:0.5,width:25,height:25,margin:'0px 10px 0px 10px'}} alt=''></img>
            </div>
            <div>
              Copyright 2023. 서산개백수. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
})

export default Main;
