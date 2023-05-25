import { Link } from "react-router-dom";
import styled from "styled-components";

const Img = styled(Link)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        object-fit: cover;
    }
    &:hover{
        background-color: #59595915;
    }
`
const Name = styled.h2`
    color: #fff;
    font-size: 1.5rem;
    margin-top: 1rem;
    text-align: center;
    text-decoration: none;
    display:none;
    @media (min-width: 768px) {
        display: block;
    }
`

const BubbleChat = () =>{
    return(
        <Img>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <Name>Fernando Herrera</Name>
        </Img>
    );
}

export default BubbleChat;