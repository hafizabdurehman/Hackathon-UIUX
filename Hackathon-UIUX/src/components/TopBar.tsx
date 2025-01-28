import React from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const TopBar = () => {
  return (
    <div className='w-full bg-[#2A254B] h-[41px] flex items-center px-4'>
    
      <div className='flex-1 flex items-center justify-center text-white gap-2'>
        <FaTruckFast size={20}/>
        <p className='text-sm'>Free delivery on all orders over £50 with code easter checkout</p>
      </div>

     
      <button className='text-white'>
        <IoMdClose size={20} />
      </button>
    </div>
  );
};

export default TopBar;


