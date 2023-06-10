import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 5px 8px #000000a2;
    padding-bottom: 20px;
    position: relative;
`;


const FriendOrNotFriend = ({friend, message}) =>{
    return(
        <Container>
            {friend ? <h1>Amigo</h1> : <h1>No amigo</h1>} 
        </Container>
    )
}

export default FriendOrNotFriend;