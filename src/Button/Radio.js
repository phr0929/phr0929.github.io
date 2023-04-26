import { useState } from 'react';
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




    return (
        <div className="mainLayout">
            <div className='rowLayout'>
                <div className='radioButtonStyle'>
                    <div className={radioCk(1)} onClick={()=>setRadio(1)}>
                        <span><div/></span>
                        Normal 1
                    </div>
                    <div className={radioCk(2)} onClick={()=>setRadio(2)}>
                        <span><div/></span>
                        Normal 2
                    </div>
                    <div className='radioDisabled'>
                        <span><div/></span>
                        Normal 3
                    </div>
                </div>

                <div className='radioButtonStyle'>
                    <div className={radio2Ck(1)} onClick={()=>setRadio2(1)}>
                        <span><div/></span>
                        Normal 1
                    </div>
                    <div className={radio2Ck(2)} onClick={()=>setRadio2(2)}>
                        <span><div/></span>
                        Normal 2
                    </div>
                    <div className='radioDisabled'>
                        <span><div/></span>
                        Normal 3
                    </div>
                </div>
            </div>
           

            <div className='rowLayout'>
                <div className='radioButtonStyle'>
                    <div className={radioBoxCk(1)} onClick={()=>setRadioBox(1)}>
                      
                        Box 1
                    </div>
                    <div className={radioBoxCk(2)} onClick={()=>setRadioBox(2)}>
                        
                        Box 2
                    </div>
                    <div className='radioBoxDisabled'>
                         
                        Box 3
                    </div>
                </div>

                <div className='radioButtonStyle'>
                    <div className={radioBox2Ck(1)} onClick={()=>setRadioBox2(1)}>
                        <span><div/></span>
                        <div className='radioBox2Text'>Box 1</div>
                    </div>
                    <div className={radioBox2Ck(2)} onClick={()=>setRadioBox2(2)}>
                        <span><div/></span>
                        <div className='radioBox2Text'>Box 1</div>
                    </div>
                    <div className='radioBox2Disabled'>
                        <span><div/></span>
                        <div className='radioBox2Text'>Box 1</div>
                    </div>
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
