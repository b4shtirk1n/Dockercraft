import logo from "../assets/logo.svg";
import copy from "../assets/copy.svg";
import check from "../assets/check.svg";
import Header from "../components/Header";
import "../styles/App.scss";

export default function App() {
  return (
    <>
      <Header />
      <section>
        <div className="home-container">
          <div className="home-text">
            <h1>Dockercraft</h1>
            <p>Docker image for minecraft</p>
          </div>
          <pre>
            <code className="bash">
              docker run -d -p 25565:25565 b4shtirk1n/dockercraft
            </code>
            <a className="copy-btn">
              <img className="copied" src={check}></img>
              <img className="copy-btn-img" src={copy}></img>
              <span className="tooltip">Копировать</span>
            </a>
          </pre>
        </div>
        <img className="logo" src={logo} />
      </section>
    </>
  );
}
