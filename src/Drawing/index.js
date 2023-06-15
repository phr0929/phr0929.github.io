import './drawing.css';

const Drawing =  (()=> {
  return (
    <div className="App" style={{backgroundColor:'#fff',}}>

      <div style={{position:'relative',width:200,height:250,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <div style={{width:200,height:210,borderRadius:80,display:'flex',flexDirection:'column',zIndex:800}}>
          <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{width:35,height:35,marginLeft:5,backgroundColor:'#dcdcdc',borderRadius:'70px 150px 70px 500px',zIndex:1000,transform:'rotate(-80deg)'}}>
              <div style={{width:30,height:30,marginTop:5,alignItems:'center',justifyContent:'center',display:'flex',backgroundColor:'#fff',borderRadius:'70px 150px 70px 500px'}}>
                <div style={{width:15,height:15,backgroundColor:'#FFD8D8',borderRadius:'70px 150px 70px 500px',}}/>
              </div>
            </div>
            <div style={{width:60,height:70,marginTop:-15,marginRight:-5,backgroundColor:'#fff',border:'5px solid #dcdcdc',boxSizing:'border-box',borderRadius:50,transform:'rotate(-60deg)'}}/>
            <div style={{width:60,height:70,marginTop:-15,marginLeft:-5,backgroundColor:'#fff',border:'5px solid #dcdcdc',boxSizing:'border-box',borderRadius:50,transform:'rotate(60deg)'}}/>
            <div style={{width:35,height:35, marginRight:5,backgroundColor:'#dcdcdc',borderRadius:'70px 150px 70px 500px',zIndex:1000,transform:'rotate(-10deg)'}}>
              <div style={{width:30,height:30,marginTop:5,alignItems:'center',justifyContent:'center',display:'flex',backgroundColor:'#fff',borderRadius:'70px 150px 70px 500px'}}>
                <div style={{width:15,height:15,backgroundColor:'#FFD8D8',borderRadius:'70px 150px 70px 500px'}}/>
              </div>
            </div>
          </div>
          <div style={{display:'flex',marginTop:-35,marginLeft:-15}}>
            <div style={{minWidth:115,backgroundColor:'#fff',border:'5px solid #dcdcdc',boxSizing:'border-box',height:100,borderRadius:50}}/>
            <div style={{minWidth:115,backgroundColor:'#fff',border:'5px solid #dcdcdc',boxSizing:'border-box',height:100,borderRadius:50}}/>
          </div>
          <div style={{display:'flex',marginTop:-35,marginLeft:-15}}>
            <div style={{minWidth:115,backgroundColor:'#fff',border:'5px solid #dcdcdc',boxSizing:'border-box',height:95,borderRadius:50}}/>
            <div style={{minWidth:115,backgroundColor:'#fff',border:'5px solid #dcdcdc',boxSizing:'border-box',height:95,borderRadius:50}}/>
          </div>
          <div style={{display:'flex',alignItems:'flex-end',marginTop:-80,justifyContent:'center'}}>
            {/* <div style={{width:40,height:35,backgroundColor:'#fff',borderRadius:50}}/> */}
            <div style={{width:60,height:60, backgroundColor:'#fff',border:'5px solid #dcdcdc',boxSizing:'border-box',borderRadius:50,transform:'rotate(-60deg)'}}/>
            
            <div style={{width:160,height:120,marginBottom:-10,marginLeft:-20,backgroundColor:'#fff',border:'5px solid #dcdcdc',boxSizing:'border-box',borderRadius:80}}/>
            <div style={{width:60,height:60,  backgroundColor:'#fff',border:'5px solid #dcdcdc',boxSizing:'border-box',marginLeft:-20,borderRadius:50,transform:'rotate(60deg)'}}/>
          </div>
        </div>
        
        <div style={{width:190,height:200,backgroundColor:'#fff',borderRadius:80,position:'absolute',zIndex:900}}/>

        <div style={{display:'flex',position:'absolute',zIndex:1000,bottom:0}}>
          <div style={{borderBottomRightRadius:50,borderBottomLeftRadius:50,backgroundColor:'#dcdcdc',width:30,height:40,display:'flex',justifyContent:'center',marginRight:30}}>
            <div style={{borderBottomRightRadius:50,borderBottomLeftRadius:50,backgroundColor:'#fff',width:20,height:40,marginTop:-5}}/>
          </div>
<div style={{borderBottomRightRadius:50,borderBottomLeftRadius:50,backgroundColor:'#dcdcdc',width:30,height:40,display:'flex',justifyContent:'center',marginLeft:30}}>
            <div style={{borderBottomRightRadius:50,borderBottomLeftRadius:50,backgroundColor:'#fff',width:20,height:40,marginTop:-5}}/>
          </div>
        </div>
        
        <div style={{position:'absolute',display:'flex',flexDirection:'column',alignItems:'center',marginTop:-30,zIndex:950}}>
          <div style={{display:'flex',zIndex:1000,height:15,alignItems:'center'}}>
            <div className='eye' 
            style={{display:'flex',alignItems:'center',width:15,backgroundColor:'#969696',boxSizing:'border-box',borderRadius:50,marginRight:18,marginLeft:18}}>
              <div className='pupil' style={{width:5,borderRadius:50,backgroundColor:'#fff',margin:2}}/>
            </div>
            <div className='eye' 
            style={{display:'flex',alignItems:'center',width:15,backgroundColor:'#969696',boxSizing:'border-box',borderRadius:50,marginRight:18,marginLeft:18}}>
              <div className='pupil' style={{width:5,borderRadius:50,backgroundColor:'#fff',margin:2}}/>
            </div>
          </div>
          <div style={{display:'flex',marginTop:-10}}>
            <div style={{width:30,height:30,borderRadius:50,backgroundColor:'#FFD8D8'}}>
              <div style={{width:10,height:10,margin:'13px 14px 5px 5px',backgroundColor:'#fff',borderRadius:50}}/>
            </div>
            <div style={{display:'flex',flexDirection:'column',width:50,alignItems:'center',marginTop:5}}>
              <div style={{width:17,height:14,borderRadius:50,backgroundColor:'#969696'}}/>
              <div style={{width:5,height:17,marginTop:-5,borderRadius:50,backgroundColor:'#969696'}}/>
              <div style={{width:30,height:5,marginTop:-5,borderRadius:50,backgroundColor:'#969696',zIndex:1000}}/>
              <div style={{width:12,height:12,marginTop:-5,borderBottomRightRadius:50,borderBottomLeftRadius:50,border:'5px solid #969696',
                backgroundColor:'#FFD8D8'}}/>
            </div>
            <div style={{width:30,height:30,borderRadius:50,backgroundColor:'#FFD8D8'}}>
              <div style={{width:10,height:10,margin:'13px 5px 5px 14px',backgroundColor:'#fff',borderRadius:50}}/>
            </div>
          </div>
        </div>

        <div className='tail' style={{position:'absolute',zIndex:750,right:-30,top:100, }}>
          <div style={{borderRadius:50,width:70,height:50,backgroundColor:'#fff',}}/>
          <div style={{borderRadius:50,width:80,height:50,marginTop:-30,backgroundColor:'#fff',}}/>
          <div style={{borderRadius:50,width:70,height:50,marginTop:-30,backgroundColor:'#fff',}}/> 
        </div>
        <div className='tailBorder' style={{position:'absolute',zIndex:700,right:-40,top:90, }}>
          <div style={{borderRadius:50,width:70,height:50,backgroundColor:'#fff',border:'5px solid #dcdcdc',}}/>
          <div style={{borderRadius:50,width:80,height:50,marginTop:-30,backgroundColor:'#fff',border:'5px solid #dcdcdc',}}/>
          <div style={{borderRadius:50,width:70,height:50,marginTop:-30,backgroundColor:'#fff',border:'5px solid #dcdcdc',}}/> 
        </div>
        
      </div>
 

    </div>
   );
})

export default Drawing;