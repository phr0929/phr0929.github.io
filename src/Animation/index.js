import '../App.css'
import './animation.css'

const Animation =  (()=> {
  return (
    <div className="bgGradient">
        <h1 className='textStyle'>오늘은 왠지</h1>
        <div className='textAniBox'>
            <h1 className='textStyle textAni1'>치킨이</h1>
            <h1 className='textStyle textAni2'>탕수육이</h1>
            <h1 className='textStyle textAni3'>스파게티가</h1>
            <h1 className='textStyle textAni4'>햄버거가</h1>
            <h1 className='textStyle textAni5'>라면이</h1>
        </div>
        <h1 className='textStyle'>먹고싶다</h1>
    </div>
  );
})

export default Animation;
