import { useEffect, useState } from 'react';
import '../App.css'
import './radio.css'

const Button =  (()=> {

    const [radio,setRadio] = useState(1)
    const [radio2,setRadio2] = useState(1)
    const [radioBox,setRadioBox] = useState(1)
    const [radioBox2,setRadioBox2] = useState(1)
    const [radioBox3,setRadioBox3] = useState(1)

    function radioCk(idx) {
        return radio===idx?'radioOn':'radioOff';
    }

    function radio2Ck(idx) {
        return radio2===idx?'radio2On':'radioOff';
    }

    function radioBoxCk(idx) {
        return radioBox===idx?'radioBoxOn':'radioBoxOff';
    }

    function radioBox2Ck(idx) {
        return radioBox2===idx?'radioBox2On':'radioBox2Off';
    }

    function radioBox3Ck(idx) {
        return radioBox3===idx?'radioBox3On':'radioBox3Off';
    }


    const [rb1,setRb1] = useState('0')
    const [rb2,setRb2] = useState('0')
    const [rb3,setRb3] = useState('0')
    const [rb4,setRb4] = useState('0')

    const handleRadio1 = (e) => {
        setRb1(e.target.id)
    }
    
    const handleRadio2 = (e) => {
        setRb2(e.target.id)
    }

    const handleRadio3 = (e) => {
        setRb3(e.target.id)
    }
    
    const handleRadio4 = (e) => {
        setRb4(e.target.id)
    }

    return (
        <div className="mainLayout">
            <div className='rowLayout'>

                <div className='radioButtonStyle'> 
                    <label className='radioStyle1'>
                        <input type="radio" name="style1" id='0' checked={rb1 === "0"} onChange={handleRadio1}/>
                        <span>Normal 1</span>
                    </label>

                    <label className='radioStyle1'>
                        <input type="radio" name="style1" id='1' checked={rb1 === "1"} onChange={handleRadio1}/>
                        <span>Normal 2</span>
                    </label>

                 
                    <label className='radioStyle1'>
                        <input type="radio" name="style1" id='2' disabled checked={rb1 === "2"} onChange={handleRadio1}/>
                        <span>Normal 3</span>
                    </label>
                </div>
            

                <div className='radioButtonStyle'> 
                    <label className='radioStyle2'>
                        <input type="radio" name="style2" id='0' checked={rb2 === "0"} onChange={handleRadio2}/>
                        <div><div/></div>
                        <span>Normal 1</span>
                    </label>

                    <label className='radioStyle2'>
                        <input type="radio" name="style2" id='1' checked={rb2 === "1"} onChange={handleRadio2}/>
                        <div><div/></div>
                        <span>Normal 2</span>
                    </label>

                 
                    <label className='radioStyle2'>
                        <input type="radio" name="style2" id='2' disabled checked={rb2 === "2"} onChange={handleRadio2}/>
                        <div><div/></div>
                        <span>Normal 3</span>
                    </label>
                </div>
            

 
            </div>






            <div className='rowLayout'>

                <div className='radioButtonStyle'>
                    <label class="radioStyle3">
                        <input type="radio" id="0" name="style3" checked={rb3 === "0"} onChange={handleRadio3}/>
                        <span>Box 1</span>
                    </label>
                    <label class="radioStyle3">
                        <input type="radio" id="1" name="style3" checked={rb3 === "1"} onChange={handleRadio3}/>
                        <span>Box 2</span>
                    </label>
                    <label class="radioStyle3">
                        <input type="radio" id="2" name="style3" disabled checked={rb3 === "2"} onChange={handleRadio3}/>
                        <span>Box 3</span>
                    </label>
                </div>

                <div className='radioButtonStyle'>
                    <label class="radioStyle4">
                        <input type="radio" id="0" name="style4" checked={rb4 === "0"} onChange={handleRadio4}/>
                      
                        <span>
                            <div/>
                            <p className='dd'>Box 1</p>
                        </span>
                    </label>
                    <label class="radioStyle4">
                        <input type="radio" id="1" name="style4" checked={rb4 === "1"} onChange={handleRadio4}/>
                    
                        <span>
                            <div/>
                            <p className='dd'>Box 2</p>
                        </span>
                    </label>
                    <label class="radioStyle4">
                        <input type="radio" id="2" name="style4" disabled checked={rb4 === "2"} onChange={handleRadio4}/>
                       
                        <span>
                            <div/>
                            <p className='dd'>Box 3</p>
                        </span>
                    </label>
                </div>


            </div>

        

         
            <div className='radioButtonBoxStyle'>
                <div className={radioBox3Ck(1)} onClick={()=>setRadioBox3(1)}>
                    <div className='rb3Firstline'>
                        <div className='rb3Title'>
                            TITLE1
                        </div>
                        <div className='rb3Circle'>
                            <div/>
                        </div>
                    </div>
                    <div className='rb3LastLine'>
                        radio button contents
                    </div>
                </div>

                <div className={radioBox3Ck(2)} onClick={()=>setRadioBox3(2)}>
                    <div className='rb3Firstline'>
                        <div className='rb3Title'>
                            TITLE2
                        </div>
                        <div className='rb3Circle'>
                            <div/>
                        </div>
                    </div>
                    <div className='rb3LastLine'>
                        radio button contents
                    </div>
                </div>

                <div className='radioBox3Disabled'>
                    <div className='rb3Firstline'>
                        <div className='rb3Title'>
                            TITLE1
                        </div>
                        <div className='rb3Circle'>
                            <div/>
                        </div>
                    </div>
                    <div className='rb3LastLine'>
                        radio button contents
                    </div>
                </div>
            </div>

        </div>
    );
})

export default Button;
