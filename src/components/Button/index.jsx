import { Link } from 'react-router-dom';
import './Button.css'
import React from 'react'

const CustomButton = ({onClick, children, backgrdColor}) =>{
    return(
        <>
            <Link to='/sign-in' className='btnCustom'  style={{backgroundColor: backgrdColor}}>{children}</Link>
            {/* <button className='btnCustom' onClick={onClick} style={{backgroundColor: backgrdColor}}>{children}</button> */}
        </>
    )

}

export default CustomButton;



