import React from "react";
import styled from "@emotion/styled";
import Footer from "../../components/Footer";
import NavbarDefault from "../../components/Navbar-Default";
import TitleHead from "../../components/TitleHead";

import { colors } from "../../ui/colors";

const Main = styled.main`
  width: 100%;
`;

const ContentPrivacy = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${colors.new};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 60px 0;
  hyphens: auto;
  lang: en;

  h2 {
    color: ${colors.primaryText};
    width: 90%;
    text-align: center;
    font-size: 2rem;
    margin-left: 2%;

    @media (max-width: 768px) {  /* Ajusta el ancho (768px) según tus necesidades */
      font-size: 1.5rem;  /* Tamaño de fuente más pequeño para dispositivos móviles */
    }
  }

  p {
    color: ${colors.primaryText};
    width: 70%;
    text-align: center;
    font-size: 1.3rem;
    flex: 1;
  }
`;


const DivsWithInformation = styled.section`
    box-shadow: 0px 0px 10px 0px #0000005e;
    width: 90%;
    max-width: 1700px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 60px 0;
    flex-wrap: wrap;
`;

const TitleInformation = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    width: 35%;

`;

const TitleDivider = styled.section`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: white;
`;


const Privacy = () => {
    return(
        <>
            <NavbarDefault />
            <Main>
                <TitleHead titulo="Privacy Policy" imageUrl="https://images.pexels.com/photos/8720593/pexels-photo-8720593.jpeg"/>
                <ContentPrivacy> 
                    <DivsWithInformation>
                        <TitleInformation>
                            <h2> Collection of personal information </h2>
                            <TitleDivider />
                        </TitleInformation>
                        <p>
                            We collect personal information such as names, email addresses, date of birth, gender, and when you register on our social network.
                        </p>
                    </DivsWithInformation>

                    <DivsWithInformation>
                        <TitleInformation>
                            <h2> Use of information </h2>
                            <TitleDivider />
                        </TitleInformation>
                        <p>
                            We use the collected personal information to provide you with our services and enhance your experience on our social network. We may also use it to personalize the content you see, send relevant notifications, and facilitate communication with other users.
                        </p>
                    </DivsWithInformation>

                    <DivsWithInformation>
                        <TitleInformation>
                            <h2> Sharing information with third parties </h2>
                            <TitleDivider />
                        </TitleInformation>
                        <p>
                            We will not share your information with unrelated third parties without your consent unless we are legally obligated to do so.
                        </p>
                    </DivsWithInformation>

                    <DivsWithInformation>
                        <TitleInformation>
                            <h2> Privacy of minors: </h2>
                            <TitleDivider />
                        </TitleInformation>
                        <p>
                            Our social network is intended for users over the age of 18. If you are under 18 years old, you cannot use our services without the consent of your parents or guardians.
                        </p>
                    </DivsWithInformation>

                    <DivsWithInformation>
                        <TitleInformation>
                            <h2> Cookies and similar technologies </h2>
                            <TitleDivider />
                        </TitleInformation>
                        <p>
                            We use cookies and similar technologies to collect information about how you use our social network. These technologies help us personalize your experience, analyze site performance, and provide relevant advertisements. You can manage your cookie preferences through your browser settings.
                        </p>
                    </DivsWithInformation>

                    <DivsWithInformation>
                        <TitleInformation>
                            <h2> Information security </h2>
                            <TitleDivider />
                        </TitleInformation>
                        <p>
                            We have implemented technical security measures to protect your personal information against unauthorized access.
                        </p>
                    </DivsWithInformation>

                    <DivsWithInformation>
                        <TitleInformation>
                            <h2> User privacy rights </h2>
                            <TitleDivider />
                        </TitleInformation>
                        <p>
                            You have the right to access, correct, update, or delete your personal information. You also have the right to withdraw your consent for data processing at any time.
                        </p>
                    </DivsWithInformation>

                    <DivsWithInformation>
                        <TitleInformation>
                            <h2> Changes to the privacy policy </h2>
                            <TitleDivider />
                        </TitleInformation>
                        <p>
                            We reserve the right to modify this privacy policy at any time. We will notify you of significant changes through notifications on the platform or via email. We recommend periodically reviewing this policy to stay informed about our updated privacy practices.
                        </p>
                    </DivsWithInformation>

                    <DivsWithInformation>
                        <TitleInformation>
                            <h2> Links to other websites </h2>
                            <TitleDivider />
                        </TitleInformation>
                        <p>
                            Our social network may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We recommend reading the privacy policies of third parties before providing them with any personal information.
                        </p>
                    </DivsWithInformation>

                    <DivsWithInformation>
                        <TitleInformation>
                            <h2> Contact </h2>
                            <TitleDivider />
                        </TitleInformation>
                        <p>
                            If you have any questions, concerns, or requests regarding our privacy policy or the handling of your personal data, you can contact us through our 'Contact Us' page located at the bottom of this page. Our support team will be happy to assist you.
                        </p>
                    </DivsWithInformation>
                
                </ContentPrivacy>
                <Footer />
            </Main>
        </>
    );
};

export default Privacy;