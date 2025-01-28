
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div>
      <Header />
    <div className="w-full h-auto bg-[#F9F9F9] text-[#2A254B]">
      <div className="px-8 sm:px-16 md:px-32 pt-16 sm:pt-20">
        <div className="text-4xl text-[#2A254B]">Your shopping cart</div>

        <div className="pt-12 sm:pt-16 flex flex-col sm:flex-row justify-between items-center text-lg font-medium text-[#2A254B]">
          <div>Product</div>
          <div className="space-x-10 hidden sm:block">Quantity</div>
          <div>Total</div>
        </div>

        <div className="border-b-[1px] my-6 border-[#D1D1D1]"></div>

        {/* Cart Item 1 */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 sm:py-8">
          <div className="flex items-center space-x-4">
            <Image
              src={"/images/cart1.svg"}
              alt="Product Image"
              height={134}
              width={109}
              className="object-cover"
            />
            <div>
              <h1 className="text-xl text-[#2A254B] font-semibold">
                Graystone vase
              </h1>
              <p className="text-sm text-[#6A6A6A]">
                A timeless ceramic vase with</p> 
              <p className="text-sm text-[#6A6A6A]">a tri-color grey glaze.
              </p>
              <p className="text-base">£85</p>
            </div>
          </div>

          {/* Quantity */}
          <div className="text-center mt-4 sm:mt-0">
            <p className="text-xl text-[#2A254B] mr-64">1</p>
          </div>

          {/* Total Section */}
          <div className="text-xl text-[#2A254B]">£85</div>
        </div>

        <div className="border-b-[1px] my-6 border-[#D1D1D1]"></div>

        {/* Cart Item 2 */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 sm:py-8">
          <div className="flex items-center space-x-4">
            <Image
              src={"/images/cart2.svg"}
              alt="Product Image"
              height={134}
              width={109}
              className="object-cover"
            />
            <div>
              <h1 className="text-xl text-[#2A254B] font-semibold">
                Basic white vase
              </h1>
              <p className="text-sm text-[#6A6A6A]">
                Beautiful and simple, this </p> 
              <p className="text-sm text-[#6A6A6A]">is one for the classics.
              </p>
              <p className="text-base">£85</p>
            </div>
          </div>
          {/* Quantity */}
          <div className="text-center mt-4 sm:mt-0">
            <p className="text-xl text-[#2A254B] mr-60  ">1</p> {/* New quantity */}
          </div>
          {/* Total Section */}
          <div className="text-xl text-[#2A254B]">£125</div> {/* New price */}
        </div>

        <div className="border-b-[1px] my-6 border-[#D1D1D1]"></div>
      </div>

      {/* Subtotal Section */}
      <div className="flex justify-center md:justify-end items-center mx-8 sm:mx-32 mt-6 sm:mt-8">
        <div className="flex gap-3">
          <h1 className="text-[20px] sm:text-[28px] ">Subtotal</h1>
          <p className="text-xl sm:text-2xl">£210</p>
        </div>
      </div>

      {/* Taxes and Shipping Section */}
      <div className="flex justify-center sm:justify-end items-center mx-8 sm:mx-32 mt-5 text-sm">
        <p>Taxes and shipping are calculated at checkout</p>
      </div>

      {/*  Button */}
      <div className="flex justify-center  md:justify-end items-center mx-8 sm:mx-32 pb-10 mt-5">
        <button className="bg-[#2A254B] py-[16px] px-[32px] text-white text-lg sm:text-xl">
          Go to checkout
        </button>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Page;
