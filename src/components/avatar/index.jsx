import './avatar.css'

const Avatar = (props) =>{  
    return(
        <img className='avatar' src={"props.profile_image"}  />
    )
}

export default Avatar;


