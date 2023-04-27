import { useEffect, useState } from 'react';
import '../App.css'
import './radiobutton.css'

const RadioButton =  (()=> { 
    

    return (
        <div className="radioLayout">
   <div className='radioButtonStyle'>
    <label className='radioStyle'>
        <input type="radio" name="radio" checked/>
        <span>
            <div/>
            <p>Box 1</p>
        </span>
    </label>
    <label className='radioStyle'>
        <input type="radio" name="radio"/>
        <span>
            <div/>
            <p>Box 2</p>
        </span>
    </label>
    <label className='radioStyle'>
        <input type="radio" name="radio" disabled/>
        <span>
            <div/>
            <p>Box 3</p>
        </span>
    </label>
</div>
        </div>
    );
})

export default RadioButton;
