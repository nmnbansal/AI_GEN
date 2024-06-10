import React from 'react';
import Twitter from '../assets/Twitter-Icon.png';
import Linkedin from '../assets/Linkedin-Icon.png';
import TikTok from '../assets/TikTok-Image.png';
import Youtube from '../assets/Youtube-Icon.png';

const Footer: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#1b3a4b] to-[#36285b] text-white p-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Text Section */}
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p className="text-[29px] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999]">Dash dash terraUSD neo uniswap <br /> kadena helium avalanche polymath <br /> bancor.</p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <span className="text-sm">Looking for help?</span>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-2 rounded border border-gray-300 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
            />
            <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
      <br /><br />
      <hr />
      <p className="uppercase tracking-widest">A.I. Gen</p>
      {/* Social Media Icons */}
      <div className="flex justify-center lg:justify-end space-x-4 mt-4">
        <a href="#" className="text-white hover:text-gray-300">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <img src={Linkedin} alt="Linkedin" />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <img src={TikTok} alt="TikTok" />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <img src={Youtube} alt="Youtube" />
        </a>
      </div>
    </div>
  );
};

export { Footer };
