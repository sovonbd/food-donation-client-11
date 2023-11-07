import loadingAnimation from "../../assets/loadingAnimation.json";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[60vh]">
        {/* Loading..... */}
        <img src={loadingAnimation} className="w-32" alt="" />
      </div>
    </div>
  );
};

export default Loading;
