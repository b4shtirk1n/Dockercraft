import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import FeaturesSection from "../components/FeaturesSection";
import Roller from "../widgets/Roller";
import StepSection from "../components/StepSection";
import "../styles/Home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <FeaturesSection />
      <Roller />
      <StepSection />
    </>
  );
}
