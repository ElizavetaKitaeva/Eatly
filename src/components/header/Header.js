import {NavLink} from "react-router-dom"
import './style.scss'
import Logo from "../logo/Logo";
import SignUp from "../SignUp/SignUp";

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="container">
        <div className="header-body">
        <Logo />

          <nav className="header-navigation">
            <ul className="header-list">
              <li className="header-list__element">
                <NavLink className="header-list__link" to="/Menu">
                  <span>Menu</span>
                </NavLink>
              </li>
              <li className="header-list__element">
                <NavLink className="header-list__link" to="/Blog">
                  <span>Blog</span>
                </NavLink>
              </li>
              <li className="header-list__element">
                <NavLink className="header-list__link" to="/Pricing">
                  <span>Pricing</span>
                </NavLink>
              </li>
              <li className="header-list__element">
                <NavLink className="header-list__link" to="/Contact">
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-buttons">
            <button className="header__button auth">Login</button>
            <button className="header__button registr">Sign up</button>
          </div>

        </div>
      </div>
    </header>

    <SignUp />
    </>
    
  );
}
 
export default Header;