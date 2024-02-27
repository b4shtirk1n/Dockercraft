import logo from "../assets/logo.svg"
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
        </div>
        <img className="logo" src={logo}/>
      </section>
    </>
  );
}
