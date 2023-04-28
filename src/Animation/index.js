import '../App.css'
import './animation.css'

const Animation =  (()=> {
  return (
    <div className="doubleportionMainBackground2" style={{color:'#ffffff',backgroundColor:'#323232'}}>
        <h1 style={{fontSize:50,fontWeight:900}}>오늘은 왠지</h1>
        <div style={{position:'relative',width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h1 style={{position:'absolute',fontSize:50,fontWeight:900}} className='one'>치킨이</h1>
            <h1 style={{position:'absolute',fontSize:50,fontWeight:900}} className='two'>탕수육이</h1>
            <h1 style={{position:'absolute',fontSize:50,fontWeight:900}} className='three'>스파게티가</h1> 
        </div> 
        <h1 style={{fontSize:50,fontWeight:900}}>먹고싶다</h1> 
        






        
    </div>

  );
})

export default Animation;
