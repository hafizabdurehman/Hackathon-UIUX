import React from "react";
import Image from "next/image";
import Brand from "@/components/Brand";
import ClubBenefits from "@/components/ClubBenefits";
import AboutHeader from "@/components/AboutHeader";
import Footer2 from "@/components/Footer2";
import TopBar from "@/components/TopBar";

const Page = () => {
  return (
    <div>
      <TopBar />
      <AboutHeader />
    <div className="w-full mx-auto text-[#2A254B]">
      {/* First Section */}
      <div className="h-auto sm:h-[277px]  flex flex-col sm:flex-row items-center px-4 sm:px-8 py-6 sm:py-0">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center md:px-28 ">
          <p className="text-xl md:text-4xl font-semibold sm:w-1/2 mb-4 sm:mb-0 text-center sm:text-left ">
            A brand built on the love of craftsmanship, quality, and outstanding
            customer service
          </p>
          <button className="bg-[#2A254B] text-white py-2 px-6 rounded-md text-base sm:text-lg">
            View our products
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="h-auto sm:h-[634px] px-4 sm:px-8 flex flex-col sm:flex-row items-center bg-white py-6 sm:py-0">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col sm:flex-row items-stretch">
          {/* Left Content */}
          <div className="sm:w-1/2 bg-[#2A254B] text-white p-6 sm:p-12 rounded-lg flex flex-col justify-start mb-6 sm:mb-0">
            <p className="text-2xl sm:text-4xl mb-4 text-center sm:text-left">
              It started with a small idea
            </p>
            <p className="text-base sm:text-xl mb-6 text-center sm:text-left">
              A global brand with local beginnings, our story began in a small
              studio in South London in early 2014.
            </p>
            <button className="bg-[#F9F9F926] p-6  text-white rounded-md  mt-32 mx-auto sm:mx-0">
              View collection
            </button>
          </div>

          {/* Right Image */}
          <div className="sm:w-1/2 flex items-center justify-center">
            <Image
              src="/images/about1.svg"
              alt="About Image"
              height={478}
              width={630}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="h-auto sm:h-[634px] px-4 sm:px-8 flex flex-col sm:flex-row items-center bg-white py-6 sm:py-0">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col sm:flex-row items-stretch">
          {/* Left Image */}
          <div className="sm:w-1/2 flex items-center justify-center mb-6 sm:mb-0">
            <Image
              src="/images/about2.svg"
              alt="About Image 2"
              height={478}
              width={630}
              className="object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="sm:w-1/2 bg-[#F9F9F9] text-black p-6 sm:p-12 rounded-lg flex flex-col justify-start">
            <p className="text-2xl sm:text-4xl mb-4 text-center sm:text-left">
              Our service isn&apos;t just personal, it&apos;s actually hyper
              personally exquisite
            </p>
            <p className="text-base sm:text-xl mb-4 text-center sm:text-left">
              When we started Avion, the idea was simple. Make high-quality
              furniture affordable and available for the mass market.
            </p>
            <p className="text-base text-center sm:text-left">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique became the hotbed
              for the London interior design community.
            </p>
            <button className="bg-[#2A254B] text-white py-2 px-6 rounded-md text-base mt-6 sm:mt-32 mx-auto sm:mx-0">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Brand and Club Benefits Section */}
      <div className="px-4 sm:px-8 py-6 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
        <Brand />  
        </div>
      </div>
    </div>
   
    <ClubBenefits />
    <Footer2 />
    </div>
  );
};

export default Page;
