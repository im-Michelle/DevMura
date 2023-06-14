import styled from "styled-components";
import { colors } from "../../../ui/colors";


const IconContainer = styled.div`
    width: 70px;
    height: 70px;
    background-color: ${colors.primaryText};
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    display: grid;
    place-items: center;
    object-fit: contain;
    &:hover{
        filter: brightness(1.1);
        scale: 1.1;
    }
`
const Icon = styled.img`
    width: 90%;
    height: 90%;
    
`

const IconsLanguage = ({src}) => {
    const srcToLowerCase = src.toLowerCase();
    return (
        <IconContainer>
            {/* //TODO wachar el path de la imagen por que no jala */}
            <Icon src={`/public/languages/${srcToLowerCase}.svg`} alt={src} />
        </IconContainer>
    );
};

export default IconsLanguage;
