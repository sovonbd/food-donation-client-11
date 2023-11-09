import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-20 flex flex-col items-center md:flex-row justify-center gap-10 bg-gray-50 py-12">
      <div className="lg:w-1/4 text-center lg:text-left">
        <p className="text-green-600 text-lg lg:text-2xl font-semibold">
          Our Testimonials
        </p>
        <h3 className="text-3xl lg:text-4xl font-bold">
          Don&apos; Believe Us? See Review
        </h3>
      </div>
      <div className="w-full md:w-1/2 px-8 lg:px-0">
        <Swiper
          // slidesPerView={className === "lg" ? "2" : "1"}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          // pagination={
          //   {
          //     // clickable: true,
          //   }
          // }
          autoplay={{
            delay: 1000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            868: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="h-max py-4">
          <SwiperSlide className="">
            <p className="text-justify text-sm ">
              &quot;The food donation was a generous and much-needed
              contribution to our community. It provided essential sustenance to
              those in need and helped alleviate hunger. The donated items were
              of good quality and greatly appreciated by recipients.&quot;
            </p>
            <div className="flex gap-2 justify-start py-4">
              <img
                src="https://i.imgur.com/rzbB2Jt.png"
                className="w-12 p-1 border-2 border-black rounded-full"
              />
              <div>
                <p className="text-green-600 font-bold">Morgan Aldo</p>
                <p className="font-bold">Ustino Charity</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <p className="text-justify text-sm ">
              &quot;The food donation was a generous and much-needed
              contribution to our community. It provided essential sustenance to
              those in need and helped alleviate hunger. The donated items were
              of good quality and greatly appreciated by recipients.&quot;
            </p>
            <div className="flex gap-2 justify-start py-4">
              <img
                src="https://i.imgur.com/rzbB2Jt.png"
                className="w-12 p-1 border-2 border-black rounded-full"
              />
              <div>
                <p className="text-green-600 font-bold">Emily Sino</p>
                <p className="font-bold">Ustino Charity</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <p className="text-justify  text-sm ">
              &quot;The food donation was a generous and much-needed
              contribution to our community. It provided essential sustenance to
              those in need and helped alleviate hunger. The donated items were
              of good quality and greatly appreciated by recipients.&quot;
            </p>
            <div className="flex gap-2 justify-start py-4">
              <img
                src="https://i.imgur.com/rzbB2Jt.png"
                className="w-12 p-1 border-2 border-black rounded-full"
              />
              <div>
                <p className="text-green-600 font-bold">Tina Stan</p>
                <p className="font-bold">Ustino Charity</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <p className="text-justify  text-sm ">
              &quot;The food donation was a generous and much-needed
              contribution to our community. It provided essential sustenance to
              those in need and helped alleviate hunger. The donated items were
              of good quality and greatly appreciated by recipients.&quot;
            </p>
            <div className="flex gap-2 justify-start py-4">
              <img
                src="https://i.imgur.com/rzbB2Jt.png"
                className="w-12 p-1 border-2 border-black rounded-full"
              />
              <div>
                <p className="text-green-600 font-bold">Charlie Phi</p>
                <p className="font-bold">Ustino Charity</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <p className="text-justify  text-sm ">
              &quot;The food donation was a generous and much-needed
              contribution to our community. It provided essential sustenance to
              those in need and helped alleviate hunger. The donated items were
              of good quality and greatly appreciated by recipients.&quot;
            </p>
            <div className="flex gap-2 justify-start py-4">
              <img
                src="https://i.imgur.com/rzbB2Jt.png"
                className="w-12 p-1 border-2 border-black rounded-full"
              />
              <div>
                <p className="text-green-600 font-bold">Robert Jr.</p>
                <p className="font-bold">Ustino Charity</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
