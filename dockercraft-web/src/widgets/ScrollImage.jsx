import { animated, useScroll } from "@react-spring/web";

export default function ScrollImage({ className, src }) {
  ScrollImage.propTypes = {
    className,
    src,
  };

  const SECTION_COUNT = 2;

  const { scrollYProgress } = useScroll();

  return (
    <animated.img
      className={className}
      style={{
        left: scrollYProgress.to(
          (val) => `${val + 98 + -val * SECTION_COUNT * 100}%`
        ),
        top: scrollYProgress.to(
          (val) => `${val + 50 + val * SECTION_COUNT * 100}%`
        ),
      }}
      src={src}
    ></animated.img>
  );
}
