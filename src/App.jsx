import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import SocialFeed from './pages/Social-feed'
import SignUp from './pages/Sign-up'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/sign-up' element={ <SignUp/>} />
        <Route path='*' element={ <SocialFeed/>} />
      </Routes>

    </Router>
  )
}

export default App
