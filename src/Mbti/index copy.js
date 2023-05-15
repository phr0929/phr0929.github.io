import { useEffect, useState } from 'react'
import '../App.css'
import './mbti.css'

import ISTP from '../resource/istp.svg'
import ISFJ from '../resource/isfj.svg'
import INTP from '../resource/intp.svg'
import INTJ from '../resource/intj.svg'
import INFP from '../resource/infp.svg'
import INFJ from '../resource/infj.svg'
import ESTP from '../resource/estp.svg'
import ESFJ from '../resource/esfj.svg'
import ENTP from '../resource/entp.svg'
import ENTJ from '../resource/entj.svg'
import ENFP from '../resource/enfp.svg'
import ENFJ from '../resource/enfj.svg'
import ESFP from '../resource/esfp.svg' 
import ISFP from '../resource/isfp.svg' 
import ESTJ from '../resource/estj.svg'
import ISTJ from '../resource/istj.svg'



const Mbti =  (()=> {

const setOneVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
};

useEffect(()=>{

  setOneVh();
        
  function onResize(){ 
      setOneVh();
  }

  window.addEventListener('resize',onResize);

},[])


  const [page,setPage] = useState(0)
  const [mbtiContents,setMbtiContents] = useState([])
  const [mbtiList,setMbtiList] = useState([
    {name:'I',count:0},{name:'E',count:0},{name:'S',count:0},{name:'N',count:0},{name:'F',count:0},{name:'T',count:0},{name:'P',count:0},{name:'J',count:0}
  ])
  const [imgCk,setImgCk] = useState(false)
  const [ckImg,setCkImg] = useState(null)
  const [ckContents,setCkContents] = useState('')
  const [ckMbti,setCkMbti] = useState('')
  
  const questionList = [

    {q:['테스트 시작할 준비 됐어?'],
    a:[{type:'',text:'준비됐어!'}]},


    {q:['나 요즘 너무 우울해서','여행 가려고'],
     a:[{type:'F',text:'무슨 일 있어?'},{type:'T',text:'어디로 여행가게?'}]},
    
    {q:['슬픔을 나누면 어떻게될까?'],
     a:[{type:'F',text:'슬픔이 반이 되지'},{type:'T',text:'슬픈 사람이 둘이 되겠지'}]},
    
    {q:['자살의 반대말은 뭘까?'],
     a:[{type:'F',text:'살자!'},{type:'T',text:'타살?'}]},
    
    {q:['나 시험에서 떨어졌어...ㅠㅠ'],
     a:[{type:'F',text:'아고, 많이 속상하겠다ㅠㅠ'},{type:'T',text:'무슨 시험 봤는데? 몇점 받았는데?'}]},
    
    {q:['나 차 사고났어...ㅠㅠ'],
     a:[{type:'F',text:'많이 안 다쳤어? 괜찮아?'},{type:'T',text:'보험사에는 연락 했어??'}]},
    
    {q:['너랑 나랑 좀 안 맞는듯;'],
     a:[{type:'F',text:'아...그렇구나...(상처)'},{type:'T',text:'왜? 그렇게 생각한 이유가 뭐야?'}]},
    
    {q:['우리 매주 @@@ 하지 않을래?'],
     a:[{type:'F',text:'생각해볼게 (아 싫은데... 바로 거절하긴 미안하니까 대충 둘러대야지;)'},{type:'T',text:'생각해볼게 (진짜 생각해보는중)'}]},
    
    {q:['~ 썸남/썸녀랑 대화중 ~'],
     a:[{type:'F',text:'와 정말요? 대박! 진짜 최고다, 너무 웃겨요!'},{type:'T',text:'취미가 뭐예요? 영화 보는거 좋아해요? 무슨 음식 좋아해요?'}]},
     
    {q:['나 오늘 지각해서 부장님한테 깨졌어...'],
     a:[{type:'F',text:'속상했겠네... 괜찮아?'},{type:'T',text:'그러게 어제 빨리 자라니까~'}]},
     
    


    
    {q:['여행 일정 짰어?'],
     a:[{type:'J',text:'7시30분 만남, 8시 할매국밥, 9시 유리박물관, 11시 유리해수욕장, 12시 유리카페...'},{type:'P',text:'ㅇㅇ 국밥 먹고 바다가서 놀다가 카페가자'}]},
    
    {q:['아 원래 계획보다 너무 늦어졌네;;;'],
     a:[{type:'J',text:'아...짜증난다 진짜'},{type:'P',text:'어쩔 수 없지 뭐~'}]},
    
    {q:['안읽은메시지 갯수 몇개야?'],
     a:[{type:'J',text:'0개 ~ 한자리수'},{type:'P',text:'10개 이상'}]},
    
    {q:['내일까지 맛있는 치킨에 대해','발표 준비 해 오세요.'],
     a:[{type:'J',text:'일단 어떻게 할지 계획을 좀 짜보자! 어느 브랜드를 할지 정하고, 자료조사를 한 다음에 ppt를 만들고...'},{type:'P',text:'네이버에 치킨 검색중...'}]},
    
    
    {q:['2주 뒤에 시험입니다.'],
     a:[{type:'J',text:'시험이 2주밖에 안남았네. 이틀에 한과목씩은 끝내놔야겠다.'},{type:'P',text:'시험이 2주나 남았네!'}]},
    
    {q:['내일 오전 9시 알람 맞췄어?'],
     a:[{type:'J',text:'응 9시에 1개 맞춰놨어'},{type:'P',text:'응 8시 45분, 8시 52분, 9시, 9시5분, 9시10분 맞춰놨어'}]},
    
    {q:['9시야 일어나!'],
     a:[{type:'J',text:'일어났어.'},{type:'P',text:'5분만 더...'}]},
    
    
    {q:['오늘 저녁에 xx불닭 갈까?'],
     a:[{type:'J',text:'거기 주차 자리 넉넉한가? 몇시까지 하지? 내가 알아볼게.'},{type:'P',text:'좋아! 맛있겠다~~'}]},
    
    
    {q:['곧 엄마 생신이셔','선물 주문해야 돼.'],
     a:[{type:'J',text:'전에 얘기 했었던 홍삼으로 찾아보고 있어.'},{type:'P',text:'홍삼살까? 아 안마기 살까? 오 이 스카프 이쁜데?'}]},
     
    
    {q:['이번달 카드값 50만원 나왔어.'],
     a:[{type:'J',text:'그정도 나올 줄 알았어.'},{type:'P',text:'헐 왜이렇게 많이나왔지!?'}]},
    
    {q:['(사진 전송받음)'],
     a:[{type:'J',text:'정리해서 외장하드에 넣어놔야지~'},{type:'P',text:'핸드폰에 저장 끝 or 그마저도 안함'}]},
    
    
    
    
    
    
    
    {q:['갑자기 일이 생겨서','오늘 못 만날 것 같아ㅠㅠ'],
     a:[{type:'I',text:'어쩔 수 없지 뭐ㅠㅠ (오예!!!!!)'},{type:'E',text:'어쩔 수 없지 뭐ㅠㅠ (다른사람 누구 만나지?) '}]},
    
    {q:['(자주 가는 카페 사장님이 아는척을 했다)'],
     a:[{type:'I',text:'(이제 그만 와야지)'},{type:'E',text:'(더 자주 와야지)'}]},

    {q:['철수랑 영희가 저녁 먹자는데','너도 나올래?'],
     a:[{type:'I',text:'아냐 나 빼고 셋이 봐~~'},{type:'E',text:'콜'}]},
    
    {q:['너 이번주에 엄청 바빴다며','주말엔 뭐해?'],
     a:[{type:'I',text:'너무 힘들었어ㅠㅠ 집에서 쉬어야지'},{type:'E',text:'바빠서 못놀았어ㅠㅠ 나가 놀아야지!'}]},
    
    {q:['오늘 너무 재밌었어!','조심히 들어가~'],
     a:[{type:'I',text:'응! (아 재밌었다. 얼른 집가서 쉬어야지!)'},{type:'E',text:'응! (아 재밌었다. 에너지 충전 완료!!!)'}]},

    {q:['우리 내일 철수랑 영희도 부를까?'],
     a:[{type:'I',text:'그냥 우리 둘이 보자~'},{type:'E',text:'오 좋지좋지 불러!'}]},
    
    {q:['나와~~ 술 한잔 하자~'],
     a:[{type:'I',text:'갑자기...?'},{type:'E',text:'심심했는데 잘됐다 굿'}]},
     
    {q:['나 오늘 커피 1잔 시키고','카페에 12시간 있었음ㅋㅋ'],
     a:[{type:'I',text:'아 그랬구나... (그거 진상짓인데;;;)'},{type:'E',text:'그거 진상짓인데;;;'}]},
    
    {q:['세탁소도 가야하고,','은행도 가야하고,','장도 봐야하는데...'],
     a:[{type:'I',text:'무조건 오늘안에 다 끝낸다.'},{type:'E',text:'오늘은 장만 보고, 세탁소는 내일, 은행은 모레 가지 뭐~'}]},
    
    
    
    
    
    
    
    {q:['오늘 점심 뭐 먹을래?'],
     a:[{type:'S',text:'음. 파스타 먹을까?'},{type:'N',text:'파스타 먹을까? 아! 파스타 먹으면 느끼하니까 저녁엔 김치찌개를 먹어야겠다!'}]},
    
    {q:['사과하면 뭐가 떠올라?'],
     a:[{type:'S',text:'빨갛다. 맛있다. 동그랗다. 과일'},{type:'N',text:'아이폰 로고ㅋㅋ 백설공주도 생각난다.'}]},
    
    {q:['일주일 내내 짜장면만 먹기 가능?'],
     a:[{type:'S',text:'불가능 할 것 같은데 or 짜장면 좋아하니까 가능할지도?'},{type:'N',text:'오 성공하면 뭐 줌???'}]},
    
    {q:['시험 공부 하고있냐...?','아 진짜 하기싫다.'],
     a:[{type:'S',text:'하 그러니까... 수업 열심히 들을걸... 쉽게 외우는 방법 없나;;'},{type:'N',text:'시험은 대체 왜 존재하는걸까... 시험 대신 봐주는 로봇은 개발 안되나~'}]},
    
    {q:['넌 노래 들을때 뭘 중요하게 생각해?'],
     a:[{type:'S',text:'멜로디'},{type:'N',text:'가사'}]},
    
    {q:['<순두부 찌개 레시피>','물250g을 팔팔 끓인다음','순두부를 넣고 약불로 줄인다.','양념장을 넣고 대파를 넣고...'],
     a:[{type:'S',text:'물250g을 팔팔 끓인다음 순두부를 넣고 약불로 줄인다. 양념장을 넣고 대파를 넣고...'},{type:'N',text:'오 대파말고 양파를 넣어볼까? 오징어 넣어도 맛있을듯. 넣자넣자'}]}, 
    
    {q:['30분 후면 비행기 타겠네~'],
     a:[{type:'S',text:'응. 기내식 뭐 나오지? 5시간 걸린다던데 잠이나 좀 자야겠다.'},{type:'N',text:'비행기 추락하면 어떡하지? 테러범이 타 있으면 어떡해?ㅠㅠ'}]},      
  ]


  const handleCkAnswer = (idx,vv) => { 
    let ls = mbtiList

    for(let i = 0; i < ls.length; i++) {
      if(ls[i].name === vv){ 
        ls[i].count = ls[i].count + 1
      }
    }
 
    setMbtiList(ls)
    setPage(page+1)

    if(idx+1===questionList.length){
      setMbti()
    } 
  } 

  const handleImgCk = (img,mbti,contents) => {
    setImgCk(true)
    setCkImg(img)
    setCkMbti(mbti)
    setCkContents(contents)
  }

  function setMbti() {
    let ls = mbtiList   

    let mc = [
      {mbti:'ENTP',img:ENTP,contents:'화려한 언변의 앵무새',bookmark:[{mbti:'INFJ',img:INFJ},{mbti:'INTJ',img:INTJ},{mbti:'INFP',img:INFP},{mbti:'ENFP',img:ENFP},{mbti:'ENFJ',img:ENFJ},{mbti:'ENTJ',img:ENTJ},{mbti:'INTP',img:INTP}]},
      {mbti:'INTP',img:INTP,contents:'뛰어난 전략가 부엉이',bookmark:[{mbti:'ENTJ',img:ENTJ},{mbti:'ESTJ',img:ESTJ},{mbti:'INFP',img:INFP},{mbti:'ENFP',img:ENFP},{mbti:'INFJ',img:INFJ},{mbti:'ENFJ',img:ENFJ},{mbti:'INTJ',img:INTJ},{mbti:'ENTP',img:ENTP}]},
      {mbti:'ESFJ',img:ESFJ,contents:'다정다감 분위기메이커 코끼리',bookmark:[{mbti:'ISFP',img:ISFP},{mbti:'ISTP',img:ISTP},{mbti:'ISFJ',img:ISFJ},{mbti:'ESFJ',img:ESFJ},{mbti:'ISTJ',img:ISTJ},{mbti:'ESTJ',img:ESTJ}]},
      {mbti:'ISFJ',img:ISFJ,contents:'온화하고 배려심 깊은 사슴',bookmark:[{mbti:'ESFP',img:ESFP},{mbti:'ESTP',img:ESTP},{mbti:'ESFJ',img:ESFJ},{mbti:'ISTJ',img:ISTJ},{mbti:'ESTJ',img:ESTJ}]},
      {mbti:'ESTP',img:ESTP,contents:'넘치는 에너지 얼룩말',bookmark:[{mbti:'ISFJ',img:ISFJ},{mbti:'ISTJ',img:ISTJ}]},
      {mbti:'ISTP',img:ISTP,contents:'관찰력이 뛰어난 재주꾼 고양이',bookmark:[{mbti:'ESFJ',img:ESFJ},{mbti:'ESTJ',img:ESTJ}]},
      {mbti:'ENFJ',img:ENFJ,contents:'애정이 넘치는 사랑둥이 강아지',bookmark:[{mbti:'INFP',img:INFP},{mbti:'ENFP',img:ENFP},{mbti:'ISFP',img:ISFP},{mbti:'INFJ',img:INFJ},{mbti:'INTJ',img:INTJ},{mbti:'ENTJ',img:ENTJ},{mbti:'INTP',img:INTP},{mbti:'ENTP',img:ENTP}]},
      {mbti:'INFJ',img:INFJ,contents:'조용하지만 강하다! 외유내강 판다',bookmark:[{mbti:'ENFP',img:ENFP},{mbti:'ENTP',img:ENTP},{mbti:'INFP',img:INFP},{mbti:'ENFJ',img:ENFJ},{mbti:'INTJ',img:INTJ},{mbti:'ENTJ',img:ENTJ},{mbti:'INTP',img:INTP}]},
      {mbti:'ENTJ',img:ENTJ,contents:'매혹적인 카리스마, 동물의 왕 사자',bookmark:[{mbti:'INFP',img:INFP},{mbti:'INTP',img:INTP},{mbti:'ENFP',img:ENFP},{mbti:'INFJ',img:INFJ},{mbti:'ENFJ',img:ENFJ},{mbti:'INTJ',img:INTJ},{mbti:'ENTP',img:ENTP}]},
      {mbti:'INTJ',img:INTJ,contents:'철저하고 예리한 사냥꾼 호랑이',bookmark:[{mbti:'ENFP',img:ENFP},{mbti:'ENTP',img:ENTP},{mbti:'INFP',img:INFP},{mbti:'INFJ',img:INFJ},{mbti:'ENFJ',img:ENFJ},{mbti:'ENTJ',img:ENTJ},{mbti:'INTP',img:INTP}]},
      {mbti:'ENFP',img:ENFP,contents:'재기발랄 귀염둥이 돌고래',bookmark:[{mbti:'INFJ',img:INFJ},{mbti:'INTJ',img:INTJ},{mbti:'INFP',img:INFP},{mbti:'INFJ',img:INFJ},{mbti:'INTJ',img:INTJ},{mbti:'INTP',img:INTP},{mbti:'ENTP',img:ENTP}]},
      {mbti:'INFP',img:INFP,contents:'수줍음 많은 예술가 토끼',bookmark:[{mbti:'ENFJ',img:ENFJ},{mbti:'ENTJ',img:ENTJ},{mbti:'ENFP',img:ENFP},{mbti:'INFJ',img:INFJ},{mbti:'INTJ',img:INTJ},{mbti:'INTP',img:INTP},{mbti:'ENTP',img:ENTP}]},
      {mbti:'ESFP',img:ESFP,contents:'재치쟁이 자유로운 영혼의 여우',bookmark:[{mbti:'ISFJ',img:ISFJ},{mbti:'ISTJ',img:ISTJ}]},
      {mbti:'ISFP',img:ISFP,contents:'평화를 사랑하는 느긋한 코알라',bookmark:[{mbti:'ENFJ',img:ENFJ},{mbti:'ESFJ',img:ESFJ},{mbti:'ESTJ',img:ESTJ}]},
      {mbti:'ESTJ',img:ESTJ,contents:'위풍당당, 믿음직 스러운 곰',bookmark:[{mbti:'INTP',img:INTP},{mbti:'ISFP',img:ISFP},{mbti:'ISTP',img:ISTP},{mbti:'ISFJ',img:ISFJ},{mbti:'ESFJ',img:ESFJ},{mbti:'ISTJ',img:ISTJ},{mbti:'ESTJ',img:ESTJ}]},
      {mbti:'ISTJ',img:ISTJ,contents:'우직함이 매력적인 은근한 강자 하마',bookmark:[{mbti:'ESFP',img:ESFP},{mbti:'ISFJ',img:ISFJ},{mbti:'ESFJ',img:ESFJ},{mbti:'ISTJ',img:ISTJ},{mbti:'ESTJ',img:ESTJ}]}
    ]

    let IorE = ls.find(function(data){return data.name === 'I'}).count > ls.find(function(data){return data.name === 'E'}).count?'I':'E'
    let SorN = ls.find(function(data){return data.name === 'S'}).count > ls.find(function(data){return data.name === 'N'}).count?'S':'N'
    let ForT = ls.find(function(data){return data.name === 'F'}).count > ls.find(function(data){return data.name === 'T'}).count?'F':'T'
    let PorJ = ls.find(function(data){return data.name === 'P'}).count > ls.find(function(data){return data.name === 'J'}).count?'P':'J'
     
    let mbti = IorE+SorN+ForT+PorJ

 
    setMbtiContents(mc.filter(val=>val.mbti===mbti)[0])
 
    
  }


 

  
  return (
    <div className='mbtiLayout'>

   
      {page!==questionList.length?
        <div className='questionLayout'>
          {console.log(mbtiList)}
          <div className='mbtiTitle'>
            <div>나와 닮은 동물 찾기 TEST</div>
            <div>{page+1} / {questionList.length}</div>
          </div>
          {questionList.map((val,idx)=>
            <div key={idx} className='questionList' style={{display:page===idx?'flex':'none'}}>
              <div className='questionItem'>
                {val.q.map((qval,qidx)=>
                  <div key={qidx} className='questionItemLayout'>
                    <div className='qProfileImg'>
                      <div/> <div/>
                    </div>
                    <div className='qChatbox'>
                      <div>◀</div> <div>{qval}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className='answerItem'>
                <div className='aChatbox'>
                  <div>+</div> <div>#</div>
                </div>

                {val.a.map((aval,aidx)=>
                  <div key={aidx} className='answerBox' onClick={()=>handleCkAnswer(idx,aval.type)}>
                    {aval.text}
                  </div>
                )}
              </div>
            </div>
          )}
      
        </div>
      
        :

                
          
        <div className='resultLayout'>
     
          <div className='mbtiTitle'>
            <div>나와 닮은 동물 찾기 TEST</div>
            <div onClick={()=>window.location.reload()}>다시하기</div>
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
                즐겨찾기
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

          <div onClick={()=>setImgCk(false)} style={{display:imgCk?'flex':'none',position:'absolute',width:'100vw',height:'100%',backgroundColor:'#000000dd',zIndex:1000,fontWeight:700,fontSize:16,color:'#fff',
              alignItems:'center',justifyContent:'center',flexDirection:'column',padding:15,boxSizing:'border-box'}}>
              <img src={ckImg} alt='' style={{width:'70%',height:'auto'}}/>
              <div style={{fontSize:25,marginBottom:10}}>{ckMbti}</div>
              <div>{ckContents}</div>
          </div>
        </div>
      }

    
    </div>
  );
})

export default Mbti;