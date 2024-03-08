import "../styles/Step.scss";

export default function Step({ title, children }) {
  Step.propTypes = {
    title,
    children,
  };

  return (
    <div className="step">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <p>{children}</p>
    </div>
  );
}
