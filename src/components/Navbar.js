import './Navbar.css';
import {Link } from "react-router-dom";
import logo from '../img/logosite.png'



function Navbar() {
  return (
    <nav className="conteiner-nav">
      <div className='div-top'>
        <div className="div-image">
          <Link to="/src/components/Home.js">
          <img
          src={logo}
          className="logo"
          />
          </Link> 
        </div>
        
      

        <div className="navbar-div" >
          <ul>

            <li>
            <Link  to="/" >
            HOME PAGE
            </Link>
            </li>


            <li>
            <Link  to="/">
            USER ACCOUNT
            </Link>
            </li>


            <li>
            <Link   to="/">
            LOGOUT
            </Link>
            </li>
          

          </ul>
         
        </div>


    
      </div>
    </nav>
  );
}

export default Navbar;