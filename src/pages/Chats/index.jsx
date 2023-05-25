import { NewNavBarFeed } from "../../components/Navbar-feed";
import styled from "styled-components";
import { colors } from "../../ui/colors";
import BubbleChat from "../../components/BubleChat";

const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-direction: column;
    background-color: ${colors.background};
`;
const ChatsMenu = styled.div`
    padding-top: 10vh;
    width: 50%;
    max-width: 100px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${colors.new};
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow-y: scroll;
    h1{
        color: ${colors.lightBlue};
        position: absolute;
        top: 8vh;
    }
    @media (min-width: 768px) {
        width: 50%;
        max-width: 400px;
    }
`;

const Containedor = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;

`


const Chats = () => {
    return(
        <Main>
            <NewNavBarFeed/>
            <Containedor>
                <ChatsMenu>
                    <BubbleChat/>
                    <BubbleChat/>
                    <BubbleChat/>
                    <BubbleChat/>
                </ChatsMenu>
                
            </Containedor>
        </Main>
    );    
}
export default Chats;