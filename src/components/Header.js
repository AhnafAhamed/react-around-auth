import logo from "../images/logo.svg";
import { NavLink, useHistory } from 'react-router-dom';

function Header({loggedIn, email}) {
  const history = useHistory();
  function signOut() {
    localStorage.removeItem('token');
    history.push('/login');
  }
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="Around the US Logo" />
        <div className="header__info">
          { loggedIn ? <div className="header__text header__text_email">{email}</div> : '' }
          { loggedIn ? '' : <NavLink to="/login" className="header__text header__text_log-in">Log in</NavLink> }
          { loggedIn ? '' : <NavLink to="/register" className="header__text header__text_sign-up">Sign up</NavLink> }
          { loggedIn ? <div onClick={signOut} className="header__text header__text_log-out">Log out</div> : '' }
        </div>
        
      </header>
    </>
  );
}

export default Header;
