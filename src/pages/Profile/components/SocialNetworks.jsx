import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import { colors } from '../../../ui/colors';

const Cotainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 5px 8px #000000a2;
    padding: px 0;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`

const LinkTuneado = styled(Link)`
    padding: 1rem;
    color: ${colors.primaryText};
    transition: all 0.1s ease-out;
    &:hover{
        color: ${colors.contrast};
    }
`

const SocialNetworks = ( {linkLinkedin, linkGithub} ) => {
    return (
        <Cotainer>
                <LinkTuneado to={linkLinkedin} target="_blank"> 
                    <LinkedInIcon
                        style={{
                            fontSize: '4rem',
                        }}
                    />
                </LinkTuneado>
                <LinkTuneado to={linkGithub} target="_blank">
                    <GitHubIcon
                        style={{
                            fontSize: '4rem',
                        }}
                    />
                </LinkTuneado>
        </Cotainer>
    )
}

export default SocialNetworks

SocialNetworks.defaultProps = {
    linkLinkedin: 'https://www.linkedin.com/',
    linkGithub: 'https://www.linkedin.com/'
}