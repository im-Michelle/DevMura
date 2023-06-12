import React, { useState } from 'react';
import styled from "styled-components";
import { groups } from "../../data/groups";
import { colors } from "../../ui/colors";
import { MiniCardGroup } from "./mini-card-group";
import ModalGroup from "../Modal/ModalGroup/ModalGroup"

let allgroups = groups;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #3232323b;
    backdrop-filter: blur(5px);
    width: 100%;
    max-width: 700px;
    padding: 20px;
    min-height: 100vh;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid ${colors.background};
    padding-bottom: 10px;
    margin-bottom: 1rem;
`;

const Title = styled.h1`
    color: ${colors.primaryText};
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
`;

const NewGroup = styled.button`
    background-color: ${colors.primaryText};
    color: ${colors.new};
    border: 1px solid ${colors.new};
    width: 9rem;
    height: 2rem;
    border-radius: 5px;
    font-size: .9rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 20px;
    &:hover {
        color: ${colors.contrast};
        border: 1px solid ${colors.contrast};
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const CardGroup = () => {
    
    const [openModalGroup, setOpenModalGroup] = useState(false);

    const handleOpenModalGroup = () => {
        setOpenModalGroup(true);
    };

    const handleCloseModalGroup = () => {
        setOpenModalGroup(false);
    };
    return (
        <>
            <Card>
                <Header>
                    <Title> Your Groups </Title>
                    <NewGroup onClick={handleOpenModalGroup}>
                        Create group
                    </NewGroup>
                    <ModalGroup open={openModalGroup} onClose={handleCloseModalGroup} />
                </Header>
                <Body>
                    {allgroups.map((group) => (
                        <MiniCardGroup
                            key={group.key}
                            id={group.id}
                            name={group.name}
                            img={group.img}
                            members={group.members}
                        />
                    ))}
                </Body>
            </Card>
        </>
    )
}