import React from "react";
import hurray from "../assets/Hurray-Icon.png";
import Hero1 from "../assets/Hero-Image-1.png";
import Hero2 from "../assets/Hero-Image-2.png";
import Hero3 from "../assets/Hero-Image-3.png";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[828px] w-full" style={{ backgroundImage: 'linear-gradient(to bottom, #0F0F0F, #27222B, #9E6EE6)' }}>
      <div className="flex flex-col items-start justify-center w-full md:w-1/2 p-5 md:p-10 md:ml-[160px] md:mt-[-91px]">
        <div className="flex justify-center items-center w-full md:w-[315px] h-[40px] mb-4 rounded-[9px]" style={{
            backgroundImage: 'linear-gradient(to right, #141414, #7A7A7A)',
          }}>
          <img src={hurray} alt="Hurray-icon" className="mr-3" />
          <p className="text-white text-sm md:text-base">New in AI.GEN: Real Time Interaction</p>
        </div>
        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-6 mt-[40px]">
          IOTA polygon serum ipsum <br className="hidden md:block" /> WAX terraUSD gala THETA.
        </h1>
        <p className="text-sm md:text-lg text-gray-300 mb-6">
          Chiliz serum TRON dash aave cardano crypto celo. Golem <br className="hidden md:block" /> ankr bancor horizen ethereum quant bitcoin.
        </p>
        <button
          className="w-full md:w-[180px] h-[50px] md:h-[60px] text-[#fff] text-[16px] md:text-[24px] rounded-[6px]"
          style={{
            backgroundImage: 'linear-gradient(to right, #9E6EE5, #FA75F8)',
          }}
        >
          Get Started
        </button>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-1/2 justify-center md:justify-around items-center p-5 md:p-10 mt-0 md:mt-[-250px] ml-0 md:ml-[25px]">
        <img src={Hero1} alt="Hero-Image-1" className="rounded-md shadow-lg w-full md:w-auto mb-4 md:mb-0" />
        <img src={Hero2} alt="Hero-Image-2" className="rounded-md shadow-lg w-full md:w-auto mb-4 md:mb-0" />
        <img src={Hero3} alt="Hero-Image-3" className="rounded-md shadow-lg w-full md:w-auto mb-4 md:mb-0" />
      </div>
    </div>
  );
};

export { HeroSection };
