import DehazeIcon from '@mui/icons-material/Dehaze';


import './Navbar-Default.css'

function NavbarDefault() {
  return (
    <nav className='navbardefault'>
      <div className='navbardefault__div'>
        <div>
          DevMura
        </div>



        
        <DehazeIcon />
        <div>
          <ul>
            <li>Product</li>
            <li>Solutions</li>
            <li>Open Source</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarDefault;




