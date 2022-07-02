import {Link} from 'react-router-dom';
import './Navbar.css'
function NavBar(){
    return(
        <div>
      <ul>
        <li className='liststy'>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        </li>
      </ul>
        </div>
    )
}

export default NavBar;