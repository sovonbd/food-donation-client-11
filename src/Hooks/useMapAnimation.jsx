import React from "react";
import { useInView } from "react-intersection-observer";
import AnimatedNumber from "animated-number-react";

const useMapAnimation = (num) => {
  const MapAnimationComponent = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
    });

    return (
      <div ref={ref}>
        {inView && (
          <AnimatedNumber
            value={num}
            formatValue={(n) => n.toFixed(0)}
            duration={2000}
          />
        )}
        {inView && <span>+</span>}
      </div>
    );
  };

  return MapAnimationComponent;
};

export default useMapAnimation;
