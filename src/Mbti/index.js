import { useEffect, useState } from 'react'
import '../App.css'
import './mbti.css'

const Mbti =  (()=> {

  const [page,setPage] = useState(0)
  const [yourMbti,setYourMbti] = useState('결과보기')
  const [mbtiList,setMbtiList] = useState([
    {name:'i',count:0},{name:'e',count:0},
    {name:'s',count:0},{name:'n',count:0},
    {name:'f',count:0},{name:'t',count:0},
    {name:'p',count:0},{name:'j',count:0}
  ])
 
  
  const list = [
    {
      q:'나 요즘 너무 우울해서 여행을 가려고...',
      aList:[{type:'t',text:'어디로 여행가게?'},
             {type:'f',text:'무슨 일 있어? 왜 우울해? 괜찮아?'}],
    },
    {
      q:'슬픔을 나누면?',
      aList:[{type:'t',text:'슬픈 사람이 둘이된다.'},
             {type:'f',text:'슬픔이 반이 된다.'}],
    }, 
    {
      q:'자살의 반대말은?',
      aList:[{type:'t',text:'타살'},
             {type:'f',text:'살자'}],
    }, 
    {
      q:'나 시험에서 떨어졌어...ㅠㅠ',
      aList:[{type:'t',text:'무슨 시험? 몇점 나왔는데??'},
             {type:'f',text:'많이 속상하겠다. 괜찮아?'}],
    }, 
    {
      q:'나 차 사고 났어',
      aList:[{type:'t',text:'보험은 들었어?'},
             {type:'f',text:'많이 안 다쳤어?'}],
    }, 
    {
      q:'너랑 나랑 안 맞는 듯',
      aList:[{type:'t',text:'왜? 그렇게 생각한 이유가 뭐야?'},
             {type:'f',text:'...그렇구나...(상처)'}],
    }, 
    {
      q:'생각해볼게.의 진짜 속뜻은?',
      aList:[{type:'t',text:'질문을 많이함'},
             {type:'f',text:'리액션을 많이함'}],
    },  


    {
      q:'일이 마음대로 잘 안풀린다.',
      aList:[{type:'j',text:'짜증과 화가 밀려옴'},
             {type:'p',text:'에휴, 어쩔 수 없지 뭐'}],
    }, 
    {
      q:'안읽은 메시지 갯수는?',
      aList:[{type:'j',text:'0개 ~ 한자리 수'},
             {type:'p',text:'10개 이상'}],
    },
    {
      q:'과제가 생겼다.',
      aList:[{type:'j',text:'일단 뭐부터 해야 하는지 순서를 정한다.'},
             {type:'p',text:'일단 자료조사부터 시작한다.'}],
    }, 
    {
      q:'2주 뒤에 시험이다.',
      aList:[{type:'j',text:'시험이 2주밖에 안남았네.'},
             {type:'p',text:'시험이 2주나 남았네!'}],
    }, 
    {
      q:'알람을 맞출때',
      aList:[{type:'j',text:'일어날 시간 1개만 맞춘다.'},
             {type:'p',text:'몇분 간격으로 여러개 맞춰둔다.'}],
    }, 
    {
      q:'아침에 알람이 울렸다.',
      aList:[{type:'j',text:'바로 일어나서 준비한다'},
             {type:'p',text:'5분만 더...'}],
    }, 
    {
      q:'수학 문제를 풀 때?',
      aList:[{type:'j',text:'배운 공식대로, 교과서에 나온대로 문제를 풀어보자.'},
             {type:'p',text:'다른 방법으로도 풀 수 있지않을까?'}],
    }, 










    
    {
      q:'갑자기 약속이 취소됐다.',
      aList:[{type:'e',text:'새로운 약속 잡아야지'},
             {type:'i',text:'오예!!!!!'}],
    }, 
    {
      q:'자주 가는 카페에서 아는 척을 했다.',
      aList:[{type:'e',text:'더 자주 와야지'},
             {type:'i',text:'이제 그만 와야지'}],
    }, 
    {
      q:'평일 내내 너무 바빴다.',
      aList:[{type:'e',text:'평일 내내 못놀았으니 친구들과 나가 놀아야겠다!'},
             {type:'i',text:'평일 내내 너무 힘들었어. 치킨 먹으면서 넷플릭스나 봐야겠다.'}],
    }, 
    {
      q:'밖에서 재밌게 놀았다.',
      aList:[{type:'e',text:'아 재밌었다! 에너지 충전 완료!'},
             {type:'i',text:'아 재밌었다! 이제 집가서 쉬어야지'}],
    }, 
    {
      q:'대화 할 때 나는?',
      aList:[{type:'e',text:'내가 주도해서 대화를 이어가는 편'},
             {type:'i',text:'주로 상대의 얘기를 들어주는 편'}],
    }, 
    {
      q:'친구가 갑자기 만나자고 한다.',
      aList:[{type:'e',text:'심심했는데 잘됐네 굿'},
             {type:'i',text:'아 왜 갑자기...'}],
    },
    {
      q:'여러사람과 대화하는것을 즐긴다.',
      aList:[{type:'e',text:'그렇다.'},
             {type:'i',text:'아니다.'}],
    },
     




    {
      q:'사과하면 떠오르는 것은?',
      aList:[{type:'n',text:'아이폰 로고, 백설공주, 스티븐잡스'},
             {type:'s',text:'맛있다. 빨갛다. 동그랗다. 과일'}],
    }, 
    {
      q:'복권 당첨에 대한 생각',
      aList:[{type:'n',text:'복권 조작은 진짜 없을까?'},
             {type:'s',text:'1등 되고싶다.'}],
    }, 
    {
      q:'1주일 동안 짜장면만 먹기 가능?',
      aList:[{type:'n',text:'오 성공하면 뭐 주나? 고춧가루 뿌려먹어도 되나?'},
             {type:'s',text:'불가능 할 것 같은데...'}],
    }, 
    {
      q:'시험 공부를 해야하는데 공부가 손에 안잡힌다. 그때 드는 생각은?',
      aList:[{type:'n',text:'시험 없는 세상에서 살고싶다. 시험은 왜 존재하는가?'},
             {type:'s',text:'쉽게 외우는 방법은 없나? 수업 열심히 들을걸... 지난 시험 문제는 어떻게 나왔지?'}],
    },
    {
      q:'노래 고를 때 더 중요한 것은?',
      aList:[{type:'n',text:'가사'},
             {type:'s',text:'멜로디'}],
    },
 
  ]

 



  const handleCkAnswer = (idx,vv) => { 
    const ls = mbtiList

    for(let i = 0; i < ls.length; i++) {
      if(ls[i].name === vv){ 
        ls[i].count = ls[i].count + 1
      }
    }
 
    setMbtiList(ls)
    setPage(page+1)

    if(idx+1===list.length){
      setMbti()
    } 
  } 

  function setMbti() {
    const ls = mbtiList

    let IorE = ls.find(function(data){return data.name === 'i'}).count > ls.find(function(data){return data.name === 'e'}).count?'i':'e'
    let SorN = ls.find(function(data){return data.name === 's'}).count > ls.find(function(data){return data.name === 'n'}).count?'s':'n'
    let ForT = ls.find(function(data){return data.name === 'f'}).count > ls.find(function(data){return data.name === 't'}).count?'f':'t'
    let PorJ = ls.find(function(data){return data.name === 'p'}).count > ls.find(function(data){return data.name === 'j'}).count?'p':'j'
     
    let mbti = IorE+SorN+ForT+PorJ
    
    setYourMbti(mbti)
  }

 

  
  return (
    <div className="mainLayoutWh">

      {page!==list.length?
        <div>
          
          <div style={{padding:10}}>{page+1} / {list.length}</div>

          {list.map((val,idx)=>
            <div key={idx} style={{display:page===idx?'flex':'none',flexDirection:'column'}}>
              <div>{val.q}</div>
              <br/>
              {val.aList.map((aval,aidx)=>
                <div key={aidx} style={{padding:10,marginBottom:10,backgroundColor:'#323232',color:'#ffffff'}}
                onClick={()=>handleCkAnswer(idx,aval.type)}>
                  {aval.text}
                </div>
              )}
            </div>
          )}
      
        </div>
      
        :

        <div>
          {yourMbti}
        </div>
      
      }

    


    </div>
  );
})

export default Mbti;
