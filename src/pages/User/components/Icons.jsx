import styled from "styled-components";
import { languages } from "../../../Utilities/IconsDictionary";

const IconContainer = styled.div`
    width: 50px;
    height: 50px;
`
const Icon = styled.img`
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    &:hover{
        filter: brightness(1.1);
        scale: 1.1;
    }
`

const IconsLanguage = ({src}) => {
    console.log(src);
    return (
        <IconContainer>
            {/* <Icon src="../../../../public/languages/angular.svg" alt="" /> */}
            <Icon src={`/public/languages/${languages[src]}`} alt="" />
        </IconContainer>
    );
};

export default IconsLanguage;

/* IconsLanguage.defaultProps = {
    icons: [],
}; */
