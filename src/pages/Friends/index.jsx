import styled from "styled-components";
import { NewNavBarFeed } from "../../components/Navbar-feed";
import { colors } from "../../ui/colors";
import { useState } from "react";
import { useEffect } from "react";
import { readLocalStorage } from "../../Utilities/readLocalStorage";
import { getOwnUser } from "../../service/Gets/getOwnUserService";
import { friendRequest } from "../../service/Gets/friendRequest";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.new};
    width: 100%;
    padding-top: 10vh;
    min-height: 100vh;
    gap: 2rem;
`
const MainFeed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.new};
    width: 90vw;
    max-width: 800px;
    gap: 30px;
    box-shadow: 0 5px 8px #000000a2;
    border-radius: 10px;
    padding-bottom: 20px;
    position: relative;    
    @media (min-width: 1100px) {
        width: 700px;
    }
`
const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${colors.dark};
    margin: 1rem 0;
    @media (min-width: 1100px) {
        font-size: 2rem;
    }
`
const Friend= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    `
const FriendContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:  space-around;
    `
const FriendInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
const FriendImg = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
`
const FriendName = styled.p`
    width: 100%;
    margin-top: -0.5rem;
    font-size: 1.5rem;
    font-weight: 400;
    color: ${colors.dark};
    text-align: center;
    @media (min-width: 1100px) {
        font-size: 2rem;
    }
`
const FrinedUserName = styled.p`
    width: 100%;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${colors.dark};
    @media (min-width: 1100px) {
        font-size: 2rem;
    }
`
const ButtonAccept = styled.button`
    width: 80px;
    height: 40px;
    border-radius: 10px;
    background-color: ${colors.primary};
    color: ${colors.white};
    font-size: 1rem;
    font-weight: 700;
    border: none;
    cursor: not-allowed;
    transition: 0.1s ease-in-out;
    &:hover {
        background-color: ${colors.secondary};
    }
`


const Friends = () =>{
    const [friendRequests, setFriendRequest] = useState([])
    const [userProfile, setUserProfile] = useState({})
    const ownUserProfile = readLocalStorage()

    useEffect(() => {
        if(localStorage.getItem("userDevmura") === null) window.location.replace("/")
      }, [])

    useEffect(() => {
        const fetchFriendRequest = async () =>{
            try{
                const requests = await friendRequest(ownUserProfile.id, ownUserProfile.token)
                setFriendRequest(requests)
                console.log(requests)
            }catch(error){
                console.log(error)
            }
        };
        fetchFriendRequest();
    }, [])


    return (
        <>
        <NewNavBarFeed 
            userImg={userProfile.img}
        />
        <Main>
            <MainFeed>
                <Title>Friend Request</Title>
                <Friend>
                    <FriendContainer>
                        {
                            friendRequests.map((friendReq) => {
                                return (
                                    <FriendContainer>
                                        <FriendImg src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" />
                                        <FriendInfo>
                                            <FrinedUserName>@{friendReq.friendUser.name}</FrinedUserName>
                                            <FriendName>{friendReq.friendUser.name} {friendReq.friendUser.lastName}</FriendName>
                                        </FriendInfo>
                                        <ButtonAccept>Accept</ButtonAccept>
                                    </FriendContainer>
                                )
                            }
                            )
                        }
                    </FriendContainer>
                </Friend>
            </MainFeed>
            {/* <MainFeed>
                <Title>Friends</Title>
                <Friend>
                    <FriendContainer>
                        <FriendImg src="https://images.pexels.com/photos/16158164/pexels-photo-16158164/free-photo-of-naturaleza-moda-gafas-de-sol-gente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <FriendInfo>
                            <FrinedUserName>@Dave_U</FrinedUserName>
                            <FriendName>David Vazquez</FriendName>
                        </FriendInfo>
                    </FriendContainer>
                </Friend>
            </MainFeed> */}
            
        </Main>
          
        </>
    )
}

export default Friends;