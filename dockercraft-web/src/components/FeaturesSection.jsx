import ScrollInView from "../widgets/ScrollInView";
import "../styles/FeaturesSection.scss";

export default function FeaturesSection() {
  return (
    <section className="features">
      <div className="features-container">
        <ScrollInView>
          <h1>Features</h1>
        </ScrollInView>
        <ScrollInView>
          <ui className="slider">
            <span className="slider-content">
              <p>
                <span>Easy to use</span>
              </p>
              <p>
                <span>Many server cores</span>
              </p>
              <p>
                <span>Flexible configuration</span>
              </p>
              <p>
                <span>Can make a server mount folder</span>
              </p>
            </span>
          </ui>
        </ScrollInView>
      </div>
    </section>
  );
}
