import { animated, useScroll } from "@react-spring/web";

export default function ScrollImage({ className, src }) {
  ScrollImage.propTypes = {
    className,
    src,
  };

  const { scrollYProgress } = useScroll();

  return (
    <animated.img
      className={className}
      style={{
        left: scrollYProgress.to((scrollP) => {
          return 1200 * -scrollP + 1250;
        }),
        top: scrollYProgress.to((scrollP) => {
          return 650 * scrollP + 340;
        })
      }}
      src={src}
    ></animated.img>
  );
}
