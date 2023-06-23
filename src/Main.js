
import React, {Component, useEffect, useState} from 'react';
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
import imgCareful from './resource/careful.svg'

const Main =  (()=> {
  
  const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setOneVh()

  const [ctgr,setCtgr] = useState(0)

  useEffect(()=>{
    setOneVh();
    window.scrollTo(0,0)
    function onResize(){ 
        setOneVh();
    }
    window.addEventListener('resize',onResize);
  },[])

  // ctgrIdx 1=Web Page 2=CSS Drawing 3=CSS Basic 4=Etc.
  const workList = [
    {ctgrIdx:1,name:'카카오톡 스타일 MBTI 테스트',img:imgWork1,link1:'https://phr0929.github.io/mbti',link2:'https://youtu.be/zO7xOq8wzrM',link3:''},
    {ctgrIdx:1,name:'To Do List',img:imgWork2,link1:'https://phr0929.github.io/todolist',link2:'',link3:''},
    {ctgrIdx:2,name:'CSS로 강아지 그리기',img:imgWork3,link1:'https://phr0929.github.io/drawing/#/pomeranian',link2:'https://youtube.com/shorts/lk4FGmQevAE?feature=share',link3:'https://codepen.io/njurvxuu-the-reactor/embed/yLQONpW?default-tab=html%2Cresult'},
    {ctgrIdx:2,name:'CSS로 햄버거 그리기',img:imgWork4,link1:'https://phr0929.github.io/drawing/#/hamburger',link2:'https://youtube.com/shorts/TYM40Vo58EE?feature=share',link3:'https://codepen.io/njurvxuu-the-reactor/pen/wvQGPEv'},
    {ctgrIdx:2,name:'CSS로 컵케이크 그리기',img:imgWork5,link1:'https://phr0929.github.io/drawing/#/cupcake',link2:'https://youtube.com/shorts/rMdvvniu7Xc?feature=share',link3:'https://codepen.io/njurvxuu-the-reactor/pen/mdQEjyp'},
  ]
 
  const handleGoLink = (link) => {
    window.open(link)
  }

  return (
    <div className='homeLayout'>
      

      <div className='homeLayoutMain'>

          <div className='homeLayoutMainContents'> 
             
              <nav className='navLayout'>
                <div className='navLogo'>
                  <img src={imgLogo} alt=''></img>
                  <div className='cursor'></div>
                </div>
                <img src={icYoutube} className='navIcon' alt='' onClick={()=>handleGoLink('https://youtube.com/@seosan1234')}></img>
                <img src={icInsta} className='navIcon' alt='' onClick={()=>handleGoLink('https://www.instagram.com/seosan1234/')}></img>
                <img src={icTstory} className='navIcon' alt='' onClick={()=>handleGoLink('https://aamm3929.tistory.com/')}></img>
              </nav>
              
              <section>
                 <img src={imgProfile} className='profileImg' alt=''/>
                <article className='mainTitle1'>
                  서산개백수's
                </article>
                <article className='mainTitle2'>
                  workspace
                </article>
                <article className='mainTitle3'>
                  유튜브 서산개백수의 작업공간
                </article> 
              </section> 

              <footer>
                <div className='wheel'></div>
                <img src={imgMouse} alt='' className='mouseImg'></img>
              </footer>
              
          </div>
          
          <img src={mainImg} className='homeLayoutMainImg' alt=''/>
         
      </div>


      <div className='homeLayoutContents'>
        <ul className='workCtgr'>
          <li className={ctgr===0?'workCtgrOn':'workCtgrOff'} onClick={()=>setCtgr(0)}>
            {ctgr===0?<div className='workCtgrArrow'>＞</div>:<div className='workCtgrArrow'></div>}
            <div className='workCtgrName'>All</div> 
          </li>
          <li className={ctgr===1?'workCtgrOn':'workCtgrOff'} onClick={()=>setCtgr(1)}>
            {ctgr===1?<div className='workCtgrArrow'>＞</div>:<div className='workCtgrArrow'></div>}
            <div className='workCtgrName'>Web Page</div>
          </li>
          <li className={ctgr===2?'workCtgrOn':'workCtgrOff'} onClick={()=>setCtgr(2)}>
            {ctgr===2?<div className='workCtgrArrow'>＞</div>:<div className='workCtgrArrow'></div>}
            <div className='workCtgrName'>CSS Drawing</div>
          </li>
          <li className={ctgr===3?'workCtgrOn':'workCtgrOff'} onClick={()=>setCtgr(3)}>
            {ctgr===3?<div className='workCtgrArrow'>＞</div>:<div className='workCtgrArrow'></div>}
            <div className='workCtgrName'>CSS Basic</div>
          </li>
          <li className={ctgr===4?'workCtgrOn':'workCtgrOff'} onClick={()=>setCtgr(4)}>
            {ctgr===4?<div className='workCtgrArrow'>＞</div>:<div className='workCtgrArrow'></div>}
            <div className='workCtgrName'>Etc.</div>
          </li>
          <li className='workTrans'></li>
        </ul>
        <ul className='workListLayout'>
          {ctgr===0?
            workList.map((val,idx)=>
              <li key={idx} className='workBtnLayout'>
                <div className='workBtn' onClick={()=>handleGoLink(val.link1)}>
                  <div className='workBtnBorder1'></div>
                  <div className='workBtnBorder2'></div>
                  <div className='workBtnBorder3'></div>
                  <div className='workBtnBorder4'></div>

                  <img src={val.img} className='workImg' alt=''></img>
                </div>

                <div className='workTitle'>
                  {val.name}
                </div>
                <div className='workGoLinkBar'>
                  {val.link1===''?<></>:
                  <div className='workGoLink' onClick={()=>handleGoLink(val.link1)}>
                    <img src={imgSite} alt=''/> Go site
                  </div>}
                  {val.link2===''?<></>:
                  <div className='workGoLink' onClick={()=>handleGoLink(val.link2)}>
                    <img src={icYoutube} alt=''/> Youtube
                  </div>}
                  {val.link3===''?<></>:
                  <div className='workGoLink' onClick={()=>handleGoLink(val.link3)}>
                    <img src={imgCodepen} alt=''/> Codepen
                  </div>}
                </div>
              </li>
            )
            :
            workList.filter((vval=>vval.ctgrIdx===ctgr)).map((val,idx)=>
              <li key={idx} className='workBtnLayout'>
                <div className='workBtn' onClick={()=>handleGoLink(val.link1)}>
                  <div className='workBtnBorder1'></div>
                  <div className='workBtnBorder2'></div>
                  <div className='workBtnBorder3'></div>
                  <div className='workBtnBorder4'></div>

                  <img src={val.img} className='workImg' alt=''></img>
                </div>

                <div className='workTitle'>
                  {val.name}
                </div>
                <div className='workGoLinkBar'>
                  {val.link1===''?<></>:
                  <div className='workGoLink' onClick={()=>handleGoLink(val.link1)}>
                    <img src={imgSite} alt=''/> Go site
                  </div>}
                  {val.link2===''?<></>:
                  <div className='workGoLink' onClick={()=>handleGoLink(val.link2)}>
                    <img src={icYoutube} alt=''/> Youtube
                  </div>}
                  {val.link3===''?<></>:
                  <div className='workGoLink' onClick={()=>handleGoLink(val.link3)}>
                    <img src={imgCodepen} alt=''/> Codepen
                  </div>}
                </div>
              </li>)
            }
        </ul>
       
        
        {ctgr!==0 && workList.filter((vval=>vval.ctgrIdx===ctgr)).length===0?
          <div className='worklistNull'>
            <div style={{textAlign:'left',width:400,maxWidth:'80vw'}}>
            {`if(작업리스트.length === 0){`}<br/>
            {`　alert('준비된 작업파일이 없습니다.')`}<br/>
            {`}`}
            </div>
            <div style={{fontSize:14,marginTop:40,marginBottom:60,display:'flex',maxWidth:'80vw',width:400,flexDirection:'column', 
            boxShadow:'1px 1px 1px #111, -1px -1px 1px #111',borderTop:'2px solid #dcdcdc',borderLeft:'2px solid #dcdcdc',
            borderRight:'2px solid #777',borderBottom:'2px solid #777'}}>

              <div style={{display:'flex',width:'100%',height:23,alignItems:'center',backgroundColor:'#1d2b57',color:'#ced3df',border:'1px solid #545180',
              boxSizing:'border-box'}}>
                <div style={{display:'flex',flex:1,paddingLeft:5,boxSizing:'border-box'}}>웹 페이지 메시지</div>
                <div style={{width:16,height:16,marginRight:2,backgroundColor:'#b2abb3',color:'#8b8987',display:'flex',alignItems:'center',
                justifyContent:'center',boxShadow:'inset 1px 1px 0px #dcdcdc,inset -1px -1px 0px #777',borderTop:'1px solid #ffffff',borderLeft:'1px solid #ffffff',
                borderRight:'1px solid #000',borderBottom:'1px solid #000',textShadow:'1px 1px 1px #fff',fontWeight:700}}>×</div>
              </div>
              <div style={{textShadow:'0px 0px 1px #302f30',width:'100%',height:100,backgroundColor:'#c1c0bf',
              display:'flex',flexDirection:'column',alignItems:'center',
              justifyContent:'center',color:'#302f30'}}>
                <div style={{display:'flex',alignItems:'center'}}>
                 
                  <img src={imgCareful} alt='' style={{width:32,height:32,marginRight:10}}/>
                  <div>준비된 작업파일이 없습니다.</div>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:100,height:24,textAlign:'center',
                boxShadow:'inset 1px 1px 0px #dcdcdc,inset -1px -1px 0px #777',borderTop:'1px solid #ffffff',borderLeft:'1px solid #ffffff',
                borderRight:'1px solid #000',borderBottom:'1px solid #000',marginTop:18}}>
                  <div style={{width:94,height:18,border:'1px dotted #302f30'}}>
                    확인
                  </div>
                </div>
              </div>
            </div>
          </div>
        :<></>}
        
      
      

        <footer className='homeLayoutFooter'>
          <div className='footerBtn'>
            <img src={icYoutube} alt='' onClick={()=>handleGoLink('https://youtube.com/@seosan1234')}></img>
            <img src={icInsta} alt='' onClick={()=>handleGoLink('https://www.instagram.com/seosan1234/')}></img>
            <img src={icTstory} alt='' onClick={()=>handleGoLink('https://aamm3929.tistory.com/')}></img>
          </div>
          <article>
            Copyright 2023. 서산개백수. All rights reserved.
          </article>
        </footer>
      </div>

      
    </div>
  );
})

export default Main;
