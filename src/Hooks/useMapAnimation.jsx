import AnimatedNumber from "animated-number-react";

const useMapAnimation = (num) => {
  const MapAnimationComponent = () => (
    <div>
      <AnimatedNumber
        value={num}
        formatValue={(n) => n.toFixed(0)}
        duration={2000}
      />
      <span>+</span>
    </div>
  );

  return MapAnimationComponent;
};

export default useMapAnimation;
