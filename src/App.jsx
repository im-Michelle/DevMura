import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import SocialFeed from './pages/Social-feed'
import SignUp from './pages/Sign-up'
import ChangeProfile from './pages/ChangeProfile'
import AboutUs from './pages/About-us'
import ContactUs from './pages/Contact-us'

import ProfilePage from './pages/Profile'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Messenger from './pages/Messenger'

function App() {
  
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='home' element={ <Home/>} />
        <Route path='feed' element={ <SocialFeed/>} />
        <Route path='chat' element={ <SignUp/>} />
        <Route path='sign-up' element={ <SignUp/>} />
        <Route path='sign-in' element={ <SignUp/>} />
        <Route path='about-us' element={ <AboutUs />} />
        <Route path='profile' element={ <ProfilePage/>} />
        <Route path='user/:id' element={ <ProfilePage/>} />
        <Route path='*' element={ <SocialFeed/>} />
        <Route path='/changeprofile' element={ <ChangeProfile/> } /> 
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='messenger' element={<Messenger />} />
      </Routes>
    </Router>
  )
}

export default App


