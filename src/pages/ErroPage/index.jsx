import styled from "@emotion/styled";
import { colors } from "../../ui/colors";
import { Link } from "react-router-dom";

const Main = styled.main`
    background-color: ${colors.new};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.primaryText};
    gap: 2rem;
    h1{
        font-size: 6rem;
    }
    h2{
        font-size: 4rem;
    }
    h3{
        font-size: 2rem;
    }
`
const Button = styled(Link)`
    background-color: ${colors.contrast};
    color: ${colors.primaryText};
    padding: 1rem 2rem;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.5rem;
    color: ${colors.primaryText};
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.04);
        color: ${colors.primaryText};
        box-shadow: 0 2px 15px ${colors.contrast};
    }
    &:active{
        transform: scale(1);
    }
`
const Gif = styled.img`
    width: 100%;
    max-width: 500px;
    max-height: 500px;
    object-fit: cover;
    `
const ErroPage = () => {
    return (
        <Main>
        <h1>Oops!</h1>
        <Gif src="../../../public/img/error_gif.gif" alt="" />
        <h3>This page doesn't exist.</h3>
        <Button to='/'>Go back to home page</Button>
        </Main>
    );
    }
export default ErroPage;