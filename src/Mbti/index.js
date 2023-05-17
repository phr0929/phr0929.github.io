import { useEffect, useState } from 'react'
import './mbti.css'
import { useNavigate } from 'react-router-dom';
import ENTP from '../resource/entp.svg'
import INTP from '../resource/intp.svg'
import ESFJ from '../resource/esfj.svg'
import ESTP from '../resource/estp.svg'
import ISFJ from '../resource/isfj.svg'
import ISTP from '../resource/istp.svg'
import ENFJ from '../resource/enfj.svg'
import INFJ from '../resource/infj.svg'
import ENTJ from '../resource/entj.svg'
import INTJ from '../resource/intj.svg'
import ENFP from '../resource/enfp.svg'
import INFP from '../resource/infp.svg'
import ESFP from '../resource/esfp.svg'
import ISFP from '../resource/isfp.svg'
import ESTJ from '../resource/estj.svg'
import ISTJ from '../resource/istj.svg'

const Mbti =  (()=> {

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




  const navigate = useNavigate()
  const [page,setPage] = useState(0)
  const [mbtiContents,setMbtiContents] = useState([])
  const [mbtiList,setMbtiList] = useState([
    {name:'I',count:0},{name:'E',count:0},{name:'S',count:0},{name:'N',count:0},
    {name:'F',count:0},{name:'T',count:0},{name:'P',count:0},{name:'J',count:0}
  ])
  const handleEdd = () => {
    window.open('https://link.coupang.com/a/YgGg1')
    navigate('./mbtiResult',{state:{contents:mbtiContents}})
  }
  
  const questionList = [

    {q:['우리 내일 철수랑 영희도 부를까?'],
    a:[{type:'E',text:'오 좋지좋지 불러!'},{type:'I',text:'그냥 우리 둘이 보자~'}]},
   
    {q:['30분 후면 비행기 타겠네~'],
    a:[{type:'S',text:'응. 기내식 뭐 나오지? 5시간 걸린다던데 잠이나 좀 자야겠다.'},{type:'N',text:'비행기 추락하면 어떡하지? 테러범이 타 있으면 어떡해?ㅠㅠ'}]},      

   {q:['오늘 저녁에 할매순대국 갈까?'],
    a:[{type:'P',text:'좋아! 맛있겠다~~'},{type:'J',text:'거기 주차 자리 넉넉한가? 몇시까지 하지? 내가 알아볼게.'}]},
   
    {q:['<순두부 찌개 레시피>','물250g을 팔팔 끓인다음','순두부를 넣고 약불로 줄인다...'],
    a:[{type:'N',text:'오 물은 200g만 넣어야지~ 오징어 넣어도 맛있을듯'},{type:'S',text:'물250g을 팔팔 끓인다음 순두부를 넣고...'}]}, 
   
   
   {q:['곧 엄마 생신이셔','선물 주문해야 돼.'],
    a:[{type:'J',text:'전에 얘기 했었던 홍삼으로 찾아보고 있어.'},{type:'P',text:'홍삼살까? 아 안마기 살까? 오 이 스카프 이쁜데?'}]},
    
   {q:['철수랑 영희가 저녁 먹자는데','너도 나올래?'],
   a:[{type:'I',text:'아냐 나 빼고 셋이 봐~~'},{type:'E',text:'콜'}]},
  
   {q:['너 이번주에 엄청 바빴다며','주말엔 뭐해?'],
   a:[{type:'E',text:'바빠서 못놀았어ㅠㅠ 나가 놀아야지!'},{type:'I',text:'너무 힘들었어ㅠㅠ 집에서 쉬어야지'}]},
   
   {q:['내일 오전 9시 알람 맞췄어?'],
    a:[{type:'P',text:'응 8시 45분, 8시 52분, 9시, 9시5분, 9시10분 맞춰놨어'},{type:'J',text:'응 9시에 1개 맞춰놨어'},]},
   


   {q:['나 요즘 너무 우울해서','여행 가려고'],
    a:[{type:'T',text:'어디로 여행가게?'},{type:'F',text:'무슨 일 있어?'}]},
   
   {q:['아 원래 계획보다 너무 늦어졌네;;;'],
    a:[{type:'P',text:'어쩔 수 없지 뭐~'},{type:'J',text:'아...짜증난다 진짜'},]},

   {q:['슬픔을 나누면 어떻게될까?'],
    a:[{type:'F',text:'슬픔이 반이 되지'},{type:'T',text:'슬픈 사람이 둘이 되겠지'}]},

   
   {q:['이번달 카드값 50만원 나왔어.'],
    a:[{type:'P',text:'헐 왜이렇게 많이나왔지!?'},{type:'J',text:'그정도 나올 줄 알았어.'},]},

   {q:['나 시험에서 떨어졌어...ㅠㅠ'],
    a:[{type:'F',text:'아고, 많이 속상하겠다ㅠㅠ'},{type:'T',text:'무슨 시험 봤는데? 몇점 받았는데?'}]},
   
   {q:['나 차 사고났어...ㅠㅠ'],
    a:[{type:'T',text:'보험사에는 연락 했어??'},{type:'F',text:'많이 안 다쳤어? 괜찮아?'}]},
    
   
   {q:['안읽은메시지 갯수 몇개야?'],
   a:[{type:'J',text:'0개 ~ 한자리수'},{type:'P',text:'10개 이상'}]},
  
  {q:['내일까지 맛있는 치킨에 대해','발표 준비 해 오세요.'],
   a:[{type:'P',text:'네이버에 치킨 검색중...'},{type:'J',text:'일단 어떻게 할지 계획을 좀 짜보자! 어느 브랜드를 할지 정하고, 자료조사를 한 다음에 ppt를 만들고...'}]},
  

   {q:['나와~~ 술 한잔 하자~'],
    a:[{type:'I',text:'갑자기...?'},{type:'E',text:'심심했는데 잘됐다 굿'}]},
    

    {q:['여행 일정 짰어?'],
    a:[{type:'J',text:'7시30분 만남, 8시 할매국밥, 9시 유리박물관, 11시 유리해수욕장, 12시 유리카페...'},{type:'P',text:'ㅇㅇ 국밥 먹고 바다가서 놀다가 카페가자'}]},
   
   {q:['너랑 나랑 좀 안 맞는듯;'],
    a:[{type:'F',text:'아...그렇구나...(상처)'},{type:'T',text:'왜? 그렇게 생각한 이유가 뭐야?'}]},
   
   {q:['우리 매주 @@@ 하지 않을래?'],
    a:[{type:'T',text:'생각해볼게 (진짜 생각해보는중)'},{type:'F',text:'생각해볼게 (아 싫은데... 바로 거절하긴 미안하니까 대충 둘러대야지;)'}]},
   
    {q:['(자주 가는 카페 사장님이 아는척을 했다)'],
    a:[{type:'E',text:'(더 자주 와야지)'},{type:'I',text:'(이제 그만 와야지)'},]},
 
    {q:['오늘 점심 뭐 먹을래?'],
    a:[{type:'S',text:'음. 파스타 먹을까?'},{type:'N',text:'파스타 먹을까? 아! 파스타 먹으면 느끼하니까 저녁엔 김치찌개를 먹어야겠다!'}]},
   
   {q:['사과하면 뭐가 떠올라?'],
    a:[{type:'N',text:'아이폰 로고ㅋㅋ 백설공주도 생각난다.'},{type:'S',text:'빨갛다. 맛있다. 동그랗다. 과일'},]},

    {q:['오늘 너무 재밌었어!','조심히 들어가~'],
    a:[{type:'I',text:'응! (아 재밌었다. 얼른 집가서 쉬어야지!)'},{type:'E',text:'응! (아 재밌었다. 에너지 충전 완료!!!)'}]},

   {q:['나 오늘 지각해서 부장님한테 깨졌어...'],
    a:[{type:'T',text:'그러게 어제 빨리 자라니까~'},{type:'F',text:'속상했겠네... 괜찮아?'}]},
    
    {q:['9시야 일어나!'],
    a:[{type:'J',text:'일어났어.'},{type:'P',text:'5분만 더...'}]},
   


  
 
   
   {q:['(사진 전송받음)'],
    a:[{type:'J',text:'정리해서 외장하드에 넣어놔야지~'},{type:'P',text:'핸드폰에 저장 끝 or 그마저도 안함'}]},
   
   
   
   {q:['갑자기 일이 생겨서','오늘 못 만날 것 같아ㅠㅠ'],
    a:[{type:'I',text:'어쩔 수 없지 뭐ㅠㅠ (오예!!!!!)'},{type:'E',text:'어쩔 수 없지 뭐ㅠㅠ (다른사람 누구 만나지?) '}]},
   
    {q:['2주 뒤에 시험입니다.'],
    a:[{type:'J',text:'시험이 2주밖에 안남았네. 이틀에 한과목씩은 끝내놔야겠다.'},{type:'P',text:'시험이 2주나 남았네!'}]},

   
    {q:['~ 썸남/썸녀랑 대화중 ~'],
    a:[{type:'F',text:'와 정말요? 대박! 진짜 최고다, 너무 웃겨요!'},{type:'T',text:'취미가 뭐예요? 영화 보는거 좋아해요? 무슨 음식 좋아해요?'}]},
   
  
   {q:['나 오늘 커피 1잔 시키고','카페에 12시간 있었음ㅋㅋ'],
    a:[{type:'E',text:'그거 진상짓인데;;;'},{type:'I',text:'아 그랬구나... (그거 진상짓인데;;;)'}]},
     
    {q:['일주일 내내 짜장면만 먹기 가능?'],
    a:[{type:'S',text:'불가능 할 것 같은데 or 짜장면 좋아하니까 가능할지도?'},{type:'N',text:'오 성공하면 뭐 줌???'}]},
   
   {q:['세탁소도 가야하고,','은행도 가야하고,','장도 봐야하는데...'],
    a:[{type:'I',text:'무조건 오늘안에 다 끝낸다.'},{type:'E',text:'오늘은 장만 보고, 세탁소는 내일, 은행은 모레 가지 뭐~'}]},
   
   
   
   
       
    {q:['자살의 반대말은 뭘까?'],
    a:[{type:'T',text:'타살?'},{type:'F',text:'살자!'},]},
   
   
 
   {q:['시험 공부 하고있냐...?','아 진짜 하기싫다.'],
    a:[{type:'N',text:'시험은 대체 왜 존재하는걸까... 시험 대신 봐주는 로봇은 개발 안되나~'},{type:'S',text:'하 그러니까... 수업 열심히 들을걸... 쉽게 외우는 방법 없나;;'}]},
   
   {q:['넌 노래 들을때 뭘 중요하게 생각해?'],
    a:[{type:'S',text:'멜로디'},{type:'N',text:'가사'}]},
       
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
 

  function setMbti() {
    let ls = mbtiList
    let mc = [
      {mbti:'ENTP',img:ENTP,animal:'화려한 언변의',animal2:'앵무새',contents:['말을 잘해요','다재다능하고 재주가 많아요','평범한 거 싫어해요','모범생과는 거리가 좀 멀어요',
      '본인 스스로가 잘났다고 생각해요','이상한 말을 자주 해요','혼자서도 잘 해요']},
      
      {mbti:'INTP',img:INTP,animal:'뛰어난 전략가',animal2:'부엉이',contents:['분석, 추리하는 거 좋아해요','무뚝뚝한 편이고 잡담은 별로 좋아하지 않아요','팩폭을 잘해요','감수성이 풍부해요',
      '맞춤법에 예민해요','술자리 별로 안 좋아해요','주관이 뚜렷해요',]},

      {mbti:'ESFJ',img:ESFJ,animal:'다정다감 분위기메이커',animal2:'코끼리',contents:['남을 잘 챙겨요','눈치가 빨라요','새로운 사람과의 술자리를 좋아해요',
      '상대방에게 사랑을 주면 그만큼 돌려받고 싶어 해요','계획 틀어지면 예민해져요','눈물이 많아요','변화를 좋아하지 않아요']},

      {mbti:'ESTP',img:ESTP,animal:'넘치는 에너지',animal2:'얼룩말',contents:['손재주가 좋아요','리더십이 있어요','표현을 아끼지 않아요','어른들이 좋아해요',
      '술자리 재미없으면 그냥 집에 가요','남한테 관심 없고 생각하는 것도 귀찮아요','스트레스를 잘 안 받아요']},

      {mbti:'ISFJ',img:ISFJ,animal:'온화하고 배려심깊은',animal2:'사슴',contents:['남 챙기는 거 좋아해요','공감 잘 해요','겉으론 무덤덤해 보여도 속으론 온갖 생각 다 해요',
      '살짝 비판적인 모습도 있어요','뒤끝 있어요','내가 싫은 건 남한테도 안 해요','나가는 건 귀찮은데 정작 나가면 잘 놀아요']},

      {mbti:'ISTP',img:ISTP,animal:'관찰력이 뛰어난 재주꾼',animal2:'고양이',contents:['평소엔 조용한데 친해지면 말 많고 장난도 잘 쳐요','효율적인 거 좋아해요','관찰력이 뛰어나요',
      '기계조작 잘 하고 좋아해요','누가 내 욕해도 별로 신경 안 써요','만사가 귀찮아요','카톡 할 말 없으면 읽씹 잘해요']},


      {mbti:'ENFJ',img:ENFJ,animal:'애정이 넘치는 사랑둥이',animal2:'강아지',contents:['분위기 메이커예요','리액션을 잘 해요','남에게 싫은 소리를 잘 못해요','완벽한 척하지만 허당끼가 있어요',
      '센스 있고 눈치가 빨라요','지나치게 이상주의자예요','느긋해 보여요']},

      {mbti:'INFJ',img:INFJ,animal:'조용하지만 강하다! 외유내강',animal2:'판다',contents:['집돌이/집순이 성향이 강해요','본인 스스로에게 엄격해요','사람을 보는 통찰력이 있어요',
      '주변 사람들의 기분을 금방 알아차려요','의미 없는 관계 맺기를 싫어해요','자신만의 철학이 있어요','삶과 죽음에 대해 많이 생각해요']},

      {mbti:'ENTJ',img:ENTJ,animal:'매혹적인 카리스마, 동물의 왕',animal2:'사자',contents:['털털하고 칠칠맞아 보이는데 은근 꼼꼼해요','강강약약 스타일이에요','반복되는 실수를 참지 못해요',
      '직감이 좋은 편이에요','주변 사람을 잘 챙겨요','4차원이라는 소리 은근 들어요','열등감이 없어요',]},
      
      {mbti:'INTJ',img:INTJ,animal:'철저하고 예리한 사냥꾼',animal2:'호랑이',contents:['혼자있는거 좋아해요','돈관리 잘해요','공상 많이해요','남 눈치 안 봐요',
      '평소엔 조용하지만 관심있거나 아는 주제로 토론할땐 적극적이에요','감정에 휘둘리는거 싫어해요','이성적인데 또 은근 감성적이에요',]},
      
      {mbti:'ENFP',img:ENFP,animal:'재기발랄 귀염둥이',animal2:'돌고래',contents:['소통과 공감을 잘 해요','은근 독립적인 성격이에요','생각을 많이 해요','감정 표현이 풍부해요',
      '감동을 잘 받아요','오지라퍼 소리를 종종 들어요','즉흥적이에요']},
      
 
      {mbti:'INFP',img:INFP,animal:'수줍음 많은 예술가',animal2:'토끼',contents:['MBTI 정말 좋아해요','미룰 수 있는 건 끝까지 미뤄요','벼락치기 많이 하는데 은근 성적이 잘 나와요','호불호가 명확해요',
      '남에게 폐 끼치는 거 싫어해요','게으른데 완벽주의자예요','내 방식에 이래라저래라 하는 거 정말 싫어해요']},

      {mbti:'ESFP',img:ESFP,animal:'재치쟁이 자유로운 영혼의',animal2:'여우',contents:['사람의 단점보단 장점을 보려고 노력해요','사교성이 좋아요','자존감이 높아요','상처 잘 받는데 또 잘 풀려요',
      '덜렁거린다는 이야기 많이 들어요','얼굴에 표정이 잘 드러나는 편이에요','성격이 급해요']},

      {mbti:'ISFP',img:ISFP,animal:'평화를 사랑하는 느긋한',animal2:'코알라',contents:['갈등이 발생하는 걸 정말 싫어해요','노는 거 은근 좋아해요','근데 집에 있는 것도 좋아요',
      '화났어도 시간 지나면 왜 화났었는지 잘 기억이 안 나요','마이웨이 성향이 강해요','고집쟁이인데 고집 세 보이는 건 싫어해요',
      '참견하는 거, 참견받는 거 싫어해요']},


      {mbti:'ESTJ',img:ESTJ,animal:'위풍당당, 믿음직 스러운',animal2:'곰',contents:['계획을 잘 세우고 또 잘 지켜요','필요한 물건 바리바리 챙겨 다니는 스타일이에요','호불호가 명확하고 단호해요',
      '공감 능력 없어서 위로를 잘 못해요','기억력이 좋아요','완벽주의자 기질이 있어요','약속 어기는 거 싫어해요']},
    
 
      {mbti:'ISTJ',img:ISTJ,animal:'우직함이 매력적인 은근한 강자',animal2:'하마',contents:['모든 일을 냉정하고 객관적으로 바라봐요','원리원칙적이에요','즉흥적인 거 싫어해요','철벽을 잘 쳐요',
      '거짓말을 안 해요','장남/장녀 같다는 이야기 많이 들어요','융통성 없다는 얘기 종종 들어요']},

 
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

        {page===0?
          //시작화면
          <div className='startPageLayout'>
            <div style={{height:50}}/>

            <div  className='startItem'>
              <div>
                MBTI
              </div>
              <div>
                ▼
              </div>
              <div onClick={()=>setPage(1)} className='startButton'>
                테스트 시작하기
              </div>
            </div>

          

            <div style={{height:50,}}>
              제작 : 서산개백수
            </div>
          </div>
          :
          //진행화면
          page<=questionList.length?
            <div className='questionLayout'>
              
              <div className='mbtiTitle'>
                <div>MBTI 테스트</div>
                <div>{`${page} / ${questionList.length}`}</div>
              </div>
            
              {questionList.map((val,idx)=>
                  <div key={idx} className='questionList' style={{display:page===idx+1?'flex':'none'}}>
                    
                    <div className='questionItemLayout'>
                      <div className='qProfileImg'>
                        <div/> <div/>
                      </div>

                      <div className='chatListLayout'>
                        {val.q.map((qval,qidx)=>
                        <div className='qChatbox'>
                          <div>◀</div> <div>{qval}</div>
                        </div>
                        )}
                      </div>

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
                )
              }
        
            </div>
            :
            //결과화면
            <div className='questionLayout'>
              
              <div className='mbtiTitle'>
                <div>MBTI 테스트</div>
              </div>
              
              <div className='questionList' style={{display:'flex'}}>
                  
       

                  <div className='questionItemLayout'>
                    <div className='qProfileImg'>
                      <div/> <div/>
                    </div>
                    <div className='chatListLayout'>
                      <div style={{width:220,height:66,position:'relative',overflow:'hidden',margin:'0px 5px 10px 5px'}}>
                          
                          <img onClick={()=>handleEdd()} style={{position:'absolute',width:'224px',height:'70px',left:-2,top:-2,}}
                              src="https://ads-partners.coupang.com/banners/662644?subId=&traceId=V0-301-879dd1202e5c73b2-I662644&w=320&h=100" alt=""/>
                    
                      </div>

                      <div className='qChatbox' onClick={()=>handleEdd()} >
                        <div>◀</div> <div>쿠팡 보고 결과 확인하기</div>
                      </div>

                      <div className='qChatbox'>
          
                        <div>◀</div> <div>* 쿠팡 파트너스 활동의 일환으로 이에 따른 일정액의 수수료를 제공받습니다.</div>
                      </div>
                    </div>
                  </div> 

                  
                    
                  <div className='answerItem'>
                    <div className='aChatbox'>
                      <div>+</div> <div>#</div>
                    </div>
                    <div className='answerBox' onClick={()=>handleEdd()}>
                        쿠팡 보고 결과 확인하기  
                    </div>
                  </div>

              </div>
          
            </div>
          }
      </div>
  );
})

export default Mbti;