import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';

const VipLogo = styled.img`
    width: 35px;
    animation: glow 2s ease-in-out infinite alternate;
    @keyframes glow {
        0% {
            filter: drop-shadow(0 0 0.6rem #ffdc3f);
        }
    }
`
const range = {
    vip : "../../../../public/svg/vip.svg",
    admin: "../../../../public/svg/admin.svg",
    user: ""
}

const Vip = ({role}) =>{
    return(
       <Tooltip title={role.toUpperCase()}>
        <VipLogo src={range[role]} alt="" />
       </Tooltip>
    ) 
}

export default Vip;