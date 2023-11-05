const Banner = () => {
  return (
    <div
      className="bg-no-repeat bg-center min-h-screen bg-cover relative"
      style={{
        backgroundImage: "url(https://i.imgur.com/iq7V5Ih.jpg)",
      }}>
      {/* <div className="bg-black absolute min-h-screen opacity-20 w-full z-20 bg-blend-overlay"></div> */}

      <div className="w-full text-green-500 absolute top-5 lg:top-20 mx-auto text-center">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="bottom-bottom">
          <h1 className="lg:mb-3 text-lg lg:text-5xl font-extrabold w-max mx-auto uppercase">
            Food for people not for profit
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="bottom-bottom">
          <hr className="h-[4px] w-1/2 lg:w-96 mx-auto bg-green-400 mb-4" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-anchor-placement="bottom-bottom">
          <p className="mb-4 lg:tracking-widest w-4/5 lg:max-w-3xl mx-auto text-xs md:text-sm leading-4">
            At the heart of our commitment is the unwavering dedication to
            offering a wide range of exceptionally flexible services.
          </p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-cubic">
          <button className="bg-green-500 px-6 py-1 lg:py-2 text-white rounded-md font-medium lg:font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
