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
import ProfilePageEdit from './pages/ProfileEdit'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/Privacy'
import ErroPage from './pages/ErroPage'
import { Groups } from './pages/Groups'
import { GroupPage } from './pages/GroupPage'
import Chats from './pages/Chats'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos o cualquier proceso asíncrono
    setTimeout(() => {
      setIsLoading(false);
    }, 2);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
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
        <Route path='/profile' element={ <ProfilePageEdit/>} />
        <Route path='/user/:id' element={ <ProfilePage/>} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='*' element={ <ErroPage/>} />
      </Routes>
    </Router>
  )
}

export default App


