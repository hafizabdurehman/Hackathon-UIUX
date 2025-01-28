import React from "react";
import Image from "next/image";
import Brand from "@/components/Brand";
import ClubBenefits from "@/components/ClubBenefits";
import Footer2 from "@/components/Footer2";
import TopBar from "@/components/TopBar";
import ProductDetailHeader from "@/components/ProductDetailHeader";
import Like from "@/components/Like";


const Page = () => {
  return (
    <div>
      <TopBar />
      <ProductDetailHeader />
      <div className="w-full h-auto flex flex-col lg:flex-row text-[#2A254B]">
        {/* Left side  */}
        <div className="w-full lg:w-[50%] mb-10 lg:mb-0">
          <Image
            src="/images/produclisting.svg"
            alt="The Dandy Chair"
            height={759}
            width={721}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side  */}
        <div className="w-full lg:w-[50%] flex flex-col justify-start lg:px-10 pt-14 px-8">
         
          <div className="py-5">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#2A254B]">
              The Dandy Chair
            </h1>
            <p className="mt-2 text-lg lg:text-xl text-[#6A6A6A]">£250</p>
          </div>

          
          <div className="my-5">
            <h2 className="text-xl lg:text-2xl font-semibold text-[#2A254B]">
              Description
            </h2>
            <p className="mt-3 text-[#6A6A6A] text-sm lg:text-base">
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The Dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather
              upholstery.
            </p>
            <ul className="mt-4 list-disc pl-5 text-[#6A6A6A] text-sm lg:text-base">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          {/* Dimensions Section */}
          <div className="my-5">
            <h2 className="text-xl lg:text-2xl font-semibold text-[#2A254B]">
              Dimensions
            </h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-[#6A6A6A]">
              <div className="text-left">
                <div className="font-medium">Height</div>
                <div>110cm</div>
              </div>
              <div className="text-left">
                <div className="font-medium">Width</div>
                <div>75cm</div>
              </div>
              <div className="text-left">
                <div className="font-medium">Depth</div>
                <div>50cm</div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex space-x-5 items-center text-xl">
                <p>Amount:</p>
                <div className="flex gap-4 bg-[#F9F9F9] py-1 px-5">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                </div>
            </div>
          </div>

          {/* button */}
          <div className=" mt-10 flex justify-end">
            <button className="bg-[#2A254B] text-white py-3 px-6  w-full sm:w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* components */}
      <div>
        <div>
          <Like />
          <Brand />
          <ClubBenefits />
          <Footer2 />
        </div>
      </div>
    </div>
  );
};

export default Page;
