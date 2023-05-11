import './Boton.css'
import React from 'react'

const Boton = (onClick, children) =>{
    return(
        <>
            <button className='btn' onClick={onClick}>{children}</button>
        </>
    )

}

export default Boton;



