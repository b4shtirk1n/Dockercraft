import logo from "../assets/logo.svg";
import copy from "../assets/copy.svg";
import Header from "../components/Header";
import "../styles/App.scss";

export default function App() {
  return (
    <>
      <Header />
      <section>
        <div className="intro-container">
          <h1 className="title">Dockercraft</h1>
          <p className="description">Docker image for minecraft </p>
          <pre>
            <code className="bash">
              docker run -d -p 25565:25565 b4shtirk1n/minecraft-server
            </code>
            <a className="copy-btn">
              <img src={copy}></img>
            </a>
          </pre>
        </div>
        <img className="logo" src={logo} />
      </section>
    </>
  );
}
