import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import SocialFed from './pages/Social-fed'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='*' element={ <SocialFed/>} />
        

      </Routes>

    </Router>
  )
}

export default App
