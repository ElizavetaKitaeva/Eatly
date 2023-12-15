import {NavLink} from "react-router-dom"
import logo from './logo.svg'
import './style.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-body">
          <NavLink className="header__logo logo" to="/">
              <img src={logo} alt="logo"></img>
              <span className="header__logo-title">eatly</span>
          </NavLink>

          <nav className="header-navigation">
            <ul className="header-list">
              <li className="header-list__element">
                <NavLink className="header-list__link" to="/">
                  <span>Menu</span>
                </NavLink>
              </li>
              <li className="header-list__element">
                <NavLink className="header-list__link" to="/">
                  <span>Blog</span>
                </NavLink>
              </li>
              <li className="header-list__element">
                <NavLink className="header-list__link" to="/">
                  <span>Pricing</span>
                </NavLink>
              </li>
              <li className="header-list__element">
                <NavLink className="header-list__link" to="/">
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
  );
}
 
export default Header;