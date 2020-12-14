import React, { useState, useEffect, useRef } from 'react';


function Dropdown({options, selected, onSelectedChange, label}) {

        // state of dropdown list to open & close
    const [open, setOpen] = useState(false);
    const ref = useRef();

    // manual eventlistener to close dropdown when another element is clicked (event bubble*)
    useEffect(() => {
        const onBodyClick =(event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        }
        document.body.addEventListener('click', onBodyClick );
        // removes/turns off event listener / when removing dropdown on app.js ref.current can no longer be refered to (creates error with null.contains)
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        };
    },[]);

        // map over the props options & return values for selection
        // if statement keeps current selection off clickable items
    const renderOptions = options.map(option => {
            if(option.value === selected.value) {
                return null;
            }

        return (
            <div 
                key={option.value} 
                className='item'
                onClick = {() => onSelectedChange(option)}>
                    {option.label}
            </div>
        );
    });
    
    return (
        <div ref={ref} className='ui form'>
           <div className="field">
               <label className="label">{label}</label>
               <div 
               onClick ={ () => setOpen(!open)} 
               className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div 
                    className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderOptions}
                    </div>
               </div>
           </div>
        </div>
    )
}

export default Dropdown;
