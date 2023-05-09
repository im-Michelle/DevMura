import './App.css'
import NavbarDefault from './components/Navbar-Default'
import Logo from './components/logo'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import { Feed } from './pages/Feed'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Feed/>} />
        <Route path='/iniciar' element={ <iniciarsesion/>} />
        

      </Routes>

    </Router>
  )
}

export default App
