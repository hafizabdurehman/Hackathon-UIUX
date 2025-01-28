

import React from "react";
import Image from "next/image";

const Touch = () => {
  return (
    <div className="w-full flex flex-col md:flex-row text-[#2A254B]">
     
      <div className="w-full md:w-1/2 p-4 md:p-16">
        <div className="space-y-4 md:space-y-6">
          <p className="text-lg md:text-2xl font-semibold">
            From a studio in London to a global brand with over 400 outlets
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 md:mt-16">
          <button className="py-3 px-6 text-sm md:text-base bg-[#F9F9F9] text-black rounded-md w-full md:w-auto">
            Get in touch
          </button>
        </div>
      </div>

      
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/images/touch.svg"
          alt="Get in Touch Image"
          height={603}
          width={720}
          className="w-full h-auto md:h-[603px] object-cover"
        />
      </div>
    </div>
  );
};

export default Touch;
