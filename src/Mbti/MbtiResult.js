import { useState } from 'react'
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import '../App.css'
import './mbti.css'

 



const MbtiResult =  (()=> {

  const location = useLocation();
  const mbtiContents = location.state.contents
  const navigate = useNavigate()
 
  const [imgCk,setImgCk] = useState(false)
  const [ckImg,setCkImg] = useState(null)
  const [ckContents,setCkContents] = useState('')
  const [ckMbti,setCkMbti] = useState('')
 

  const handleImgCk = (img,mbti,contents) => {
    setImgCk(true)
    setCkImg(img)
    setCkMbti(mbti)
    setCkContents(contents)
  }
  
  return (
    <div className='mbtiLayout'>

   
 
          <div className='resultLayout'>

          
      
            <div className='mbtiTitle'>
              <div>나와 닮은 동물 찾기 TEST</div>
              <div onClick={()=>navigate(-1)}>다시하기</div>
            </div>

          

            <div className='resultContents'>

                <div className='myMbti'>
                  <div className='myProfileImg' onClick={()=>handleImgCk(mbtiContents.img,mbtiContents.mbti,mbtiContents.contents)}>
                    <img src={mbtiContents.img} alt=''/> 
                  </div> 
                  <div className='mbtiContents'>
                    <div>{mbtiContents.mbti}</div>
                    <div >{mbtiContents.contents}</div>
                  </div> 
                </div>

                <div className='bookmarkTitle'>
                  나와 잘맞는 친구들
                </div>


                {mbtiContents.bookmark.map((val,idx)=>
                  <div className='bookmarkItem' key={idx}>
                    <div className='bookmarkProfileImg' onClick={()=>handleImgCk(val.img,val.mbti,'')}>
                        <img src={val.img} alt=''/> 
                    </div> 

                    <div className='mbtiContents'>
                      <div>{val.mbti}</div>
                    </div>
                  </div>  
                )}
            </div>

            <div onClick={()=>setImgCk(false)} style={{display:imgCk?'flex':'none',position:'absolute',width:'100%',height:'100%',maxWidth:900,
            backgroundColor:'#000000dd',zIndex:1000,fontWeight:700,fontSize:16,color:'#fff',
                alignItems:'center',justifyContent:'center',flexDirection:'column',padding:15,boxSizing:'border-box'}}>
                <img src={ckImg} alt='' style={{width:'70%',height:'auto'}}/>
                <div style={{fontSize:25,marginBottom:10}}>{ckMbti}</div>
                <div>{ckContents}</div>
            </div>
          </div>
          
     

    
    </div>
  );
})

export default MbtiResult;
