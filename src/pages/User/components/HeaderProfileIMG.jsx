import styled from 'styled-components';
import Vip from './Vip';

const Header = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
    position: relative;
`
const HeaderIMG = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`
const HeaderAvatar = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
`
const VipContainer = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
`


const HeaderProfile = ({headerImg, avatarImg, vip }) => {
    return (
        <Header>
            <VipContainer>
                {
                    vip.map((role, index) => <Vip key={index} role={role} />)
                } 
            </VipContainer>
            <HeaderIMG src={headerImg} alt="" />
            <HeaderAvatar src={avatarImg} alt="" />
        </Header>
    )
}

export default HeaderProfile

HeaderProfile.defaultProps = {
    headerImg: "https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    avatarImg: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
}