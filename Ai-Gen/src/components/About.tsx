import React from 'react';
import AboutImage from '../assets/About-Image.png';

const About: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen w-full" style={{ backgroundImage: 'linear-gradient(to bottom, #9E6EE6, #9E6EE6, #0F0F0F)' }}>
      <img src={AboutImage} alt="About-Image" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{
        width: '80%',
        height: 'auto',
        maxWidth: '1200px',
      }} />
      <div className="absolute bottom-50 text-center">
        <h1 className="text-white text-[48px] font-semibold">
          <span className="gradient-text">Create, customize, and publish</span> your <br /> digital persona to life effortlessly.
        </h1>
      </div>
    </div>
  );
};

export { About };
