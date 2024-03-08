import ScrollInView from "./ScrollInView";
import "../styles/Roller.scss";

export default function Roller() {
  return (
    <p className="roller">
      <ScrollInView>
        <span className="roller-content">
          <span>Vanilla</span>
          <span>Forge</span>
          <span>NeoForge</span>
          <span>Fabric</span>
          <span>Bedrock</span>
          <span>Vanilla</span>
          <span>Forge</span>
          <span>NeoForge</span>
          <span>Fabric</span>
          <span>Bedrock</span>
        </span>
      </ScrollInView>
    </p>
  );
}
