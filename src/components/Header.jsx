import "../scss/components/Header.scss";
import title from "../images/Rick-and-Morty-title.png";

function Header() {
  return (
    <header className="header">
      <img src={title} alt="Rick and Morty" className="header__img" />
    </header>
  );
}

export default Header;
