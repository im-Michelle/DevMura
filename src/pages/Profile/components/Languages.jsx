import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 5px 8px #000000a2;
`
const LanguagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    gap: 1rem;
    padding: 1rem;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const Languages = () => {
    return (
        <Container>
            <h2>Skills</h2>
            <LanguagesContainer>
                <h3>JavaScript</h3>
                <h3>React</h3>
                <h3>Node</h3>
                <h3>Express</h3>
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>Git</h3>
                <h3>GitHub</h3>
                <h3>SQL</h3>
                <h3>MongoDB</h3>
                <h3>Python</h3>
                <h3>Java</h3>
                <h3>C</h3>
                <h3>C++</h3>
                <h3>PHP</h3>
                <h3>Bootstrap</h3>
                <h3>Material UI</h3>
                <h3>Styled Components</h3>
                <h3>React Native</h3>
                <h3>Flutter</h3>
                <h3>Swift</h3>
                <h3>Angular</h3>
                <h3>Vue</h3>
                <h3>SQL Server</h3>
                <h3>MySQL</h3>
                <h3>PostgreSQL</h3>
                <h3>Oracle</h3>
                <h3>SQLite</h3>
                <h3>FireBase</h3>
                <h3>Heroku</h3>
                <h3>Netlify</h3>
            </LanguagesContainer>

        </Container>
    )
}

export default Languages