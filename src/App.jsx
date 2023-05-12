import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import SocialFeed from './pages/Social-feed'
import SignUp from './pages/Sign-up'
import ChangeProfile from './pages/ChangeProfile'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/feed' element={ <SocialFeed/>} />
        <Route path='/chat' element={ <SignUp/>} />
        <Route path='/sign-up' element={ <SignUp/>} />
        <Route path='/sign-in' element={ <SignUp/>} />
        <Route path='/abaout-us' element={ <SignUp/>} />
        <Route path='*' element={ <SocialFeed/>} />
        <Route path='/changeprofile' element={ <ChangeProfile/> } />
      </Routes>

    </Router>
  )
}

export default App
