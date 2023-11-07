import { Button } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div>
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
            <h1 className="lg:mb-3 text-lg md:text-4xl lg:text-5xl font-extrabold w-max mx-auto uppercase">
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
            <Button
              variant=""
              size="sm"
              className="bg-green-700 px-6 py-1 lg:py-3 text-white rounded-md font-medium lg:font-semibold">
              <span>Get Started</span>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="h-36 md:h-32 bg-no-repeat bg-center bg-cover text-white"
        style={{
          backgroundImage: "url(https://i.imgur.com/MTanWsu.png)",
        }}>
        <div className="flex flex-col md:flex-row h-full justify-center items-center md:gap-10 lg:gap-20">
          <Button
            data-aos="fade-down"
            data-aos-duration="1000"
            className="bg-gradient-to-l from-green-600 to-[#1A2E35] md:px-10 lg:py-4 rounded-full text-lg lg:text-3xl normal-case">
            Make A Donation
          </Button>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="pt-2 md:pt-0 lg:pl-20 lg:w-auto text-center md:text-left">
            <h1 className="text-lg md:text-3xl lg:text-5xl font-bold ">
              We are helping people over 20 years
            </h1>
            <p className="text-xs md:text-base lg:text-xl lg:font-medium lg:pt-2 w-11/12 md:w-auto">
              Our commitment is to offering a wide range of exceptionally
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
