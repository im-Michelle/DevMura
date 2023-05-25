import './Button.css'

const SendButton = ({onClick, children, backgrdColor}) =>{
    return(
        <>
            <Link to='/sign-in' className='btnCustom' onClick={onClick} style={{backgroundColor: backgrdColor}}>{children}</Link>
            {/* <button className='btnCustom' onClick={onClick} style={{backgroundColor: backgrdColor}}>{children}</button> */}
        </>
    )

}

export default SendButton;