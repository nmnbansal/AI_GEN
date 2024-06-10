import React from "react";

const Navbar: React.FC = () => {
  return (
    <div
      className="w-full h-[72px] flex items-center"
      style={{
        backgroundColor: '#000000', 
        zIndex: 0,
        backdropFilter: 'blur(10px)', 
        position: 'relative',
        opacity: 0.94,
        borderBottom: '1px solid #666666'
      }}
    >
      <div className="w-[1312px] h-[40px] flex justify-between items-center ml-[64px]">
        <div className="w-[444px] h-[26.5px] p-[2px 0 0 0] flex justify-center items-center gap-[48px]">
          <p className="text-[#fff] text-[20px] font-medium leading-[25.2px] font-outfit">
            A I . G E N
          </p>
          <ul className="flex gap-[32px] text-[16px] font-normal leading-[24px] text-[#fff] font-outfit p-[2px 0 0 0 ]">
            <li>Features</li>
            <li>Roadmap</li>
            <li>Tokenomics</li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-[12px]">
          <button className="w-[134px] h-[40px] text-[#fff] text-[16px] font-medium leading-[16px] p-[12px] bg-neutral-500 rounded">
            Whitepaper
          </button>
          <button
          className="w-[133px] h-[40px] text-[#fff] text-[16px] font-medium leading-[16px] rounded"
          style={{
            backgroundImage: 'linear-gradient(to right, #9E6EE5, #FA75F8)',
          }}
        >
          Get Started
        </button>
        </div>
      </div>
    </div>
  );
}

export { Navbar };
