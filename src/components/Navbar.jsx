import {NavLink} from 'react-router-dom';
import './Navbar.css'
function NavBar(){
    return(
        <div>
      <ul className='navul'>
        <li className='navbar'>
        <NavLink className="navbarlink" to="/login">Login</NavLink>

        <NavLink className="navbarlink" to="/about">About</NavLink>
        <NavLink className="navbarlink" to="/">Home</NavLink>
        <NavLink className="navbarlink" to='/contact'>Contact Us</NavLink>
       


        </li>
      </ul>
        </div>
    )
}

export default NavBar;