import Footer from "../../components/Footer";
import NavbarDefault from "../../components/Navbar-Default";
import { colors } from "../../ui/colors";
import styled from "@emotion/styled";
import TitleHead from "../../components/TitleHead";


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
    /* font-size: 2.5rem; */
    -webkit-text-size-adjust: 100%;
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
  text-align: justify;
  padding-left: 1vw;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: ${colors.primaryText};
  @media (min-width: 768px) {
    /* font-size: 2.5rem; */
    -webkit-text-size-adjust: 100%;
  }
  ol {
    list-style: upper-alpha;
  }
`;

const TermsOfService = () => {
  return (
    <>
      <NavbarDefault />
      <Main>
      <TitleHead titulo="Terms of Service" 
      imageUrl="https://images.pexels.com/photos/6940497/pexels-photo-6940497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

       {/*  <h1>Terms of Service</h1> */}
        <h2>Effective Date: May 16, 2023</h2>
        <MainText>
          <ol>
            <li>
              <strong><u>1.- Acceptance of Terms</u> </strong> 
              <ol>
                <li>
                  By accessing and using DevMura ("the platform"), you agree to comply
                  with the following Terms of Service ("the terms") and all applicable
                  laws and regulations.
                </li>
                <li>
                  If you do not agree to any of the terms, please do not use the platform.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong><u>2.- Use of the Platform</u> </strong> 
              <ol>
                <li>
                  DevMura is an online social network that provides users with a platform
                  to connect, interact, and share content related to software development
                  and programming.
                </li>
                <li>
                  You are responsible for using the platform appropriately and in compliance
                  with these terms and any additional policies set by DevMura.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong><u>3.- Registration and User Account</u></strong> 
              <ol>
                <li>
                  To access the full features of the platform, you need to create a user account.
                </li>
                <li>
                  By registering, you agree to provide accurate, current, and complete information
                  and to keep it up to date at all times.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of your login credentials
                  and any activity that occurs under your account.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong><u>4.- User Content</u></strong> 
              <ol>
                <li>
                  DevMura allows users to generate, upload, publish, store, and share content
                  related to software development, including projects, code, articles, and questions.
                </li>
                <li>
                  You retain ownership rights to your user content, but you grant DevMura a worldwide,
                  non-exclusive, transferable, sublicensable, royalty-free license to use, copy,
                  modify, adapt, publish, translate, distribute, and display your user content for
                  purposes related to the platform.
                </li>
                <li>
                  You must not post content that is illegal, defamatory, obscene, violent, discriminatory,
                  or infringes the intellectual property rights of third parties.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong><u>5.- Intellectual Property</u></strong> 
              <ol>
                <li>
                  The DevMura platform and all its content, including logos, trademarks, texts, graphics,
                  images, and software, are the exclusive property of DevMura or its licensors and are
                  protected by intellectual property laws.
                </li>
                <li>
                  You are not granted any ownership rights to the platform's content, except for the limited
                  rights necessary to use it in accordance with these terms.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong><u>6.- Privacy</u></strong> 
              <ol>
                <li>
                  User privacy is important to DevMura. Please refer to our privacy policy to understand
                  how we collect, use, and protect your personal data.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong><u> 7.- Liability and Limitations</u></strong>
              <ol>
                <li>
                  You use the platform at your own risk. DevMura does not guarantee the availability,
                  security, accuracy, or reliability of the platform or any user content.
                </li>
                <li>
                  We shall not be liable for any direct, indirect, incidental, special, consequential, or
                  punitive damages resulting from the use of the platform or any user content.
                </li>
                <li>
                  We do not assume responsibility for user content posted by other users.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong><u>8.- Modifications and Termination</u></strong> 
              <ol>
                <li>
                  DevMura reserves the right to modify, suspend, or terminate the platform, as well as
                  update these terms at any time without prior notice.
                </li>
                <li>
                  We will notify you of any material changes to the terms through the platform or other
                  communication channels.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong><u>9.- General Provisions</u></strong> 
              <ol>
                <li>
                  These terms constitute the entire agreement between DevMura and the users, superseding
                  any prior agreements.
                </li>
                <li>
                  Any waiver or breach of these terms by DevMura in a particular instance shall not be
                  considered a waiver of other instances.
                </li>
              </ol>
            </li>
          </ol>
        </MainText>
      </Main>
      <Footer />
    </>
  );
};

export default TermsOfService;
