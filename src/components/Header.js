import logo from "../images/logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="Around the US Logo" />
        <div className="header__info">
          <a href="#d" className="header__text header__text_email">ahnaf@mail.com</a>
          <a href="#d" className="header__text header__text_log-in">Log in</a>
          <a href="#d" className="header__text header__text_sign-up">Sign up</a>
          <a href="#d" className="header__text header__text_log-out">Log out</a>
        </div>
        
      </header>
    </>
  );
}

export default Header;
