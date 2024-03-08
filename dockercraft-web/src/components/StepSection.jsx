import Step from "../widgets/Step";
import "../styles/StepSection.scss";

export default function StepSection() {
  return (
    <section className="step-section">
      <Step title={1}>
        Download and install <a href="#">docker</a>
      </Step>
      <Step title={2}>Copy and run command</Step>
      <Step title={3}>
        Have fun and
        <br />
        read the <a href="#">docs</a>
      </Step>
    </section>
  );
}
