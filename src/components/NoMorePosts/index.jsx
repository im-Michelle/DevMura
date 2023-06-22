import styled from "styled-components";


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;    
    width: 95%;
    gap: 2rem;
    padding: 5rem 0rem;
`
const Title = styled.h2`
    font-size: 2rem;
    width: 100%;
    text-align: center;
`
const Img = styled.img`
    width: 60%;
    object-fit: contain;
`

const NoMorePosts = () =>{
    return (
        <MainContainer>
            <Title>There are no more posts to show</Title>
            <Img src="/public/space.gif"/>    
        </MainContainer>
    )
}


export default NoMorePosts;