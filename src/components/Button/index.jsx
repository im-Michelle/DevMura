import './Button.css'
import React from 'react'

const CustomButton = ({onClick, children, backgrdColor}) =>{
    return(
        <>
            <button className='btnCustom' onClick={onClick} style={{backgroundColor: backgrdColor}}>{children}</button>
        </>
    )

}

export default CustomButton;



