import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import SocialFeed from './pages/Social-feed'
import SignUp from './pages/Sign-up'
import SignIn from './pages/Sign-in'
import ChangeProfile from './pages/ChangeProfile'
import AboutUs from './pages/About-us'
import ContactUs from './pages/Contact-us'
import ProfilePage from './pages/Profile'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import TermsOfService from './pages/TermsOfService'
<<<<<<< HEAD
import Privacy from './pages/Privacy'
=======
import ErroPage from './pages/ErroPage'
>>>>>>> 9e854bfb73d04f46b01bae5c0cef9d6ebd7376ad

function App() {
  
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
        <Route path='/feed' element={ <SocialFeed/>} />
        <Route path='/chat' element={ <SignUp/>} />
        <Route path='/profile' element={ <ProfilePage/>} />
        <Route path='/user/:id' element={ <ProfilePage/>} />
        <Route path='/changeprofile' element={ <ChangeProfile/> } /> 
<<<<<<< HEAD
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='terms-of-service' element={<TermsOfService />} />
        <Route path='privacy' element={<Privacy />} />
=======
        <Route path='*' element={ <ErroPage/>} />
>>>>>>> 9e854bfb73d04f46b01bae5c0cef9d6ebd7376ad
      </Routes>
    </Router>
  )
}

export default App


