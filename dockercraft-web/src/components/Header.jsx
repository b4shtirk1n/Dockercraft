import logo from "../assets/logo.svg";
import "../styles/Header.scss";

export default function Header() {
  return (
    <header>
      <a href="#">
        <img className="home-btn" src={logo} />
      </a>
      <div>
        <a href="#">Docs</a>
        <a href="#">Docker hub</a>
        <a href="#">Github</a>
      </div>
    </header>
  );
}
