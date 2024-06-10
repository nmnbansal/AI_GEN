import React from 'react';
import GetStartedImg from '../assets/Get-Started_image.png';
import ArrowIcon from '../assets/Arrow-Icon.png'

const GetStarted: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-b from-[#100f1a] to-[#1b3a4b]">
      <img src={GetStartedImg} alt="Background" className="absolute inset-10 opacity-70 mt-[100px]" />

      <button className="relative bg-gradient-to-r from-purple-400 to-purple-600 w-[1312px] h-[148px] rounded-[8px] flex justify-around items-center">
        <span className="text-[60px] text-white mr-[600px]">Get Started</span>
        <img src={ArrowIcon} alt="Arrow-Icon" />
      </button>
    </div>
  );
};

export { GetStarted };
