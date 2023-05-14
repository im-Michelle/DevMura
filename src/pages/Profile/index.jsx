import React from 'react'
import Header from '../Social-feed/components/Header'

import { colors } from '../../ui/colors';
/* import styled from "@emotion/styled"; */
import styled from 'styled-components';
import { NavBarFeed} from "../../components/Navbar-Feed";

const Main = styled.div`
    border: 3px solid purple;
`;
const ContainerForNAvBAr =styled.div`
    margin-bottom: 5em;
    border: .001px solid black;
`;
const ProfilePage = () => {
  return (
    <>
        <ContainerForNAvBAr>
            <NavBarFeed/>
        </ContainerForNAvBAr>
        <Main>
            <Header 
                name="Susana"
                lastName="Gonzalez"
                userName="@susygonzalez"
                img="https://images.pexels.com/photos/7841717/pexels-photo-7841717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, at eligendi inventore amet soluta officiis aspernatur asperiores harum accusamus, iusto veniam reiciendis ex a aliquam provident explicabo, culpa qui! Veniam.
                Consectetur vitae quod quo velit nulla dolor dicta illo accusamus modi nihil explicabo cumque corrupti sed labore quis ea, temporibus, animi rem iusto natus, dolorum sit! Corrupti voluptatibus illo voluptas?
                Ab labore asperiores velit ad consequuntur quaerat sed aut doloribus quasi? Assumenda ipsam hic incidunt eius architecto culpa consectetur voluptas dolor, nisi ipsa animi ea, quas illo quisquam reiciendis voluptate.
               eaque minus! Obcaecati accusantium id sint molestias inventore ullam laboriosam blanditiis numquam eius. Quas provident rem id beatae obcaecati deserunt voluptatem iusto neque. Sequi, inventore?
        </Main>
    </>
  )
}

export default ProfilePage;