import './avatar.css'
import {colors} from '../../../src/ui/colors'

const Avatar = ({profilePic}) =>{  
    return(
        <img className='avatar' src={profilePic} style={{borderColor: colors.secondary}}/>
    )
}

export default Avatar;


