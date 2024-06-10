import React from 'react';
import HowItWorksImage from '../assets/How-It-Works-Image.png';
const HowItWorks: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen w-full" style={{
      backgroundImage: 'linear-gradient(to bottom, #0F0F0F, #301252, #0A1830)',
      padding: '50px',
    }}>
      <div className="flex items-center w-full max-w-6xl ml-[-380px]">
        <img src={HowItWorksImage} alt="How-It-Works-Image" className="w-[656px] h-auto rounded-lg shadow-lg" />
        <div className="ml-10 text-left">
          <h1 className="text-white text-[64px] font-semibold">How it works</h1>
          <div>
            <p className="howitworkspara-text">Select an Avatar</p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] text-[38px]">Create or Generate Script</p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] text-[38px]">Select AI Voices</p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] text-[38px]">Publish</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
