import styled from 'styled-components';
import IconsLanguage from './Icons';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 5px 8px #000000a2;
    padding-bottom: 20px;
`
const LanguagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const Languages = ({languages}) => {
    return (
        <Container>
            <h2>Skills</h2>
            <LanguagesContainer>
                {languages.map((language, index) => {
                    return (
                        <IconsLanguage key={index} src={language} />  
                    )
                })}
                
            </LanguagesContainer>

        </Container>
    )
}

export default Languages

Languages.defaultProps = {
    languages: []
}