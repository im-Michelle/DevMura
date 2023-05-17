import Footer from "../../components/Footer";
import NavbarDefault from "../../components/Navbar-Default";
import { colors } from "../../ui/colors";
import styled from "@emotion/styled";

const Main = styled.main`
  background-color: ${colors.new};
  width: 100%;
  min-height: 100vh;
  color: ${colors.black};
  padding: 2rem;
  text-align: center;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale();
  h1 {
    width: 100%;
    text-align: left;
    padding-left: 1vw;
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
    color: ${colors.primaryText};
    @media (min-width: 768px) {
      font-size: 5rem;
    }
  }
`;
const MainText = styled.article`
  width: 100%;
  text-align: left;
  padding-left: 1vw;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: ${colors.primaryText};
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  ol{
    list-style: upper-alpha;
  }
`;

const TermsOfService = () => {
  return (
    <>
      <NavbarDefault />
      <Main>
        <h1>Terms of Service</h1>
        <h2>Fecha de entreda en vigor: 16</h2>
        <MainText>
            <ol>
                <li>Acceptance of Terms</li>
                <li>Acceptance of Terms</li>
            </ol>
        </MainText>
      </Main>
      <Footer />
    </>
  );
};

export default TermsOfService;
