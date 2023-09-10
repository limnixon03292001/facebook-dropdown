import './App.css'
import DropdownMenu from './components/DropdownMenu'
import NavItem from './components/NavItem'
import Navbar from './components/Navbar'
import { FaFacebookMessenger, FaBell, FaGear } from 'react-icons/fa6'

// flagged any type temporarily

function App() {
  
  return (
    <Navbar>
      <NavItem icon={<FaFacebookMessenger size="1.6em" color="white"  className="nav-button"/>}/>
      <NavItem icon={<FaBell color="white" size="1.6em" className="nav-button"/>}/>
      <NavItem icon={<FaGear size="1.6em" color="white" className="nav-button"/>}>
        <DropdownMenu/>
      </NavItem>
       <NavItem icon={<FaGear size="1.6em" color="white" className="nav-button"/>}>
        <DropdownMenu/>
      </NavItem>
    </Navbar>
  )
}

       
        
export default App
