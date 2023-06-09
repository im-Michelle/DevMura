import styled from "styled-components";
import { languages } from "../../../Utilities/IconsDictionary";

const IconContainer = styled.div`
    width: 70px;
    height: 70px;
`
const Icon = styled.img`
    width: 100%;
    height: 100%;
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
