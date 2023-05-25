import styled from "styled-components"
import { CardGroup } from "../../components/CardGroup";
import { NewNavBarFeed } from "../../components/Navbar-feed"
import { colors } from "../../ui/colors";



const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.new};
  width: 100%;
  padding-top: 10vh;
  min-height: 100vh;
`;



export const Groups = () => {
  return (
    <>
      <NewNavBarFeed/>
      <Main>
        <CardGroup/>
      </Main>
    </>
  )
}