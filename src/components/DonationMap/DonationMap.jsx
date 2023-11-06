import { MdOutlineCampaign, MdOutlineVolunteerActivism } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import { LuClover } from "react-icons/lu";

const DonationMap = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="flex flex-col md:flex-row justify-around mx-auto md:gap-5 lg:gap-10 lg:px-20 my-20 px-6 text-[#1A2E35]">
      <img
        src="https://i.imgur.com/LBG0eL0.png"
        className="md:w-1/2 lg:w-2/5"
        alt=""
      />
      <div className="">
        <h1 className="text-2xl text-center lg:text-left lg:text-4xl md:mx-auto font-bold py-4">
          We Are Already Donating Allover the World
        </h1>
        <div className="grid grid-cols-2 items-end gap-x-3 gap-y-8">
          <div className="">
            <div className="flex items-end gap-3">
              <MdOutlineCampaign className="md:text-6xl text-green-600 text-5xl" />
              <span className="font-bold text-xl lg:text-4xl">4850+</span>
            </div>
            <p className="lg:text-2xl font-light text-center lg:text-left">
              Campaigns
            </p>
          </div>
          <div className="">
            <div className="flex items-end gap-3">
              <AiOutlineFundView className="lg:text-6xl text-green-600 text-5xl" />
              <span className="font-bold text-xl lg:text-4xl">2850+</span>
            </div>
            <p className="lg:text-2xl font-light text-center lg:text-left">
              Raised Funs
            </p>
          </div>
          <div className="">
            <div className="flex items-end gap-3">
              <LuClover className="lg:text-6xl text-green-600 text-5xl" />
              <span className="font-bold text-xl lg:text-4xl">850+</span>
            </div>
            <p className="lg:text-2xl font-light text-center lg:text-left">
              Satisfied Donner
            </p>
          </div>
          <div className="">
            <div className="flex items-end gap-3">
              <MdOutlineVolunteerActivism className="lg:text-6xl text-green-600 text-5xl" />
              <span className="font-bold text-xl lg:text-4xl">350+</span>
            </div>
            <p className="lg:text-2xl font-light text-center lg:text-left">
              Best Volunteers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationMap;
