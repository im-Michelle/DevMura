import './App.css'
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Loading from './components/Loader';
import Home from './pages/Home'
import SocialFeed from './pages/Social-feed'
import SignUp from './pages/Sign-up'
import SignIn from './pages/Sign-in'
import AboutUs from './pages/About-us'
import ContactUs from './pages/Contact-us'
import ProfilePage from './pages/Profile'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
<<<<<<< HEAD
=======
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/Privacy'
import ErroPage from './pages/ErroPage'
import { Groups } from './pages/Groups'
import { GroupPage } from './pages/GroupPage'
import Chats from './pages/Chats'
<<<<<<< HEAD
>>>>>>> 7f30976ad436606a47759f0c21ce26919affbe9f
=======
import UserPage from './pages/User';
>>>>>>> 13ace35a96665c43cabdd8f6a4f80c78f3a21640

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos o cualquier proceso asíncrono
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={ <Home/>} />
        <Route path='home' element={ <Home/>} />
        <Route path='feed' element={ <SocialFeed/>} />
        <Route path='chat' element={ <SignUp/>} />
        <Route path='sign-up' element={ <SignUp/>} />
        <Route path='sign-in' element={ <SignIn/>} />
        <Route path='about-us' element={ <AboutUs />} />
        <Route path='profile' element={ <ProfilePage/>} />
        <Route path='user/:id' element={ <ProfilePage/>} />
        <Route path='*' element={ <SocialFeed/>} />
        <Route path='/changeprofile' element={ <ChangeProfile/> } /> 
        <Route path='contact-us' element={<ContactUs />} />
=======
        <Route path='/' element={ <Home/>} exact/>
        <Route path='/home' element={ <Home/>} />
        <Route path='/sign-up' element={ <SignUp/>} />
        <Route path='/sign-in' element={ <SignIn/>} />
        <Route path='/about-us' element={ <AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/feed' element={ <SocialFeed/>} />
        <Route path='/groups' element={ <Groups/>} />
        <Route path='/groups/:id' element={<GroupPage/>} />
        <Route path='/chats' element={ <Chats/>} />
        <Route path='/profile' element={ <ProfilePage/>} />
        <Route path='/user/:id' element={ <UserPage/>} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='*' element={ <ErroPage/>} />
>>>>>>> 7f30976ad436606a47759f0c21ce26919affbe9f
      </Routes>
    </Router>
  );
};

export default App;


