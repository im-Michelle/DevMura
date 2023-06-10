import styled from 'styled-components'
import PropTypes from 'prop-types';
import moment from 'moment';
import Flag from 'react-flagkit';

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    max-width: 800px;
    padding-top: 50px;
    text-align: center;
`
const Name = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0;
    letter-spacing: 3px;
`
const UserName = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 0;
`
const Role = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 0;
    color: #8a8a8a;
`
const Since = styled.p`
    font-size: 1.0rem;
    font-weight: 400;
    margin-top: 0;
    color: #8a8a8a;
`
const AboutMe = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    margin-top: 0;
`
const Bio = styled.p`
    font-size: 1.3rem;
    font-weight: 400;
    margin-top: 0;
    width: 85%;
`
const CustomFlag = styled(Flag)`
    width: 45px;
    height: 45px;
`

const HeaderProfileInfo = ({name, lastName , username ,role, location, createdAt ,bio}) =>{

    const date = moment(createdAt).fromNow();
    return (
        <InfoContainer>
            <Name>{name} {lastName}</Name>
            <UserName>@{username}</UserName>
            <Role>{role}</Role>
            <Since>Member since  {date} </Since>
            <CustomFlag country={location} />   
            <AboutMe>About me</AboutMe>
            <Bio>{bio}</Bio>
        </InfoContainer>
    )
}

export default HeaderProfileInfo

HeaderProfileInfo.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string
}

HeaderProfileInfo.defaultProps = {
    name: 'No name to show',
    lastName: 'No last name to show',
    username: 'No username to show',
    role: 'No role selected',
    location: 'No location',
    createdAt: '2022-05-01T00:00:00',
    bio: 'No bio'
}