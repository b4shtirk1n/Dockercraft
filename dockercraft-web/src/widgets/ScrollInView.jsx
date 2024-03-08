import { useInView, animated } from "@react-spring/web";

export default function ScrollInView({ children }) {
  ScrollInView.propTypes = {
    children,
  };

  const [ref, springs] = useInView(() => ({
    from: {
      opacity: 0,
      y: 100,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  }));

  return (
    <animated.div ref={ref} style={springs}>
      {children}
    </animated.div>
  );
}
