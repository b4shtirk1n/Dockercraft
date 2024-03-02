import FeaturesSection from "../components/FeaturesSection";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import "../styles/Home.scss";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <HomeSection />
      <FeaturesSection></FeaturesSection>
      <section></section>
    </div>
  );
}
