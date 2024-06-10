import React from 'react';
import ShoeBack from '../assets/Shoe-Back-Image.png'; // Adjust the paths to match your project structure
import Shoe from '../assets/Shoe-Image.png';
import Girl from '../assets/Half-Girl-Image.png';
import Keyboard from '../assets/Keyboard-Image.png';
import Robot from '../assets/Robot-Image.png';

const Products: React.FC = () => {
  return (
    <div className='grid grid-cols-2 p-8 gap-10' style={{ backgroundImage: 'linear-gradient(to bottom, #0F0F0F,#0F0F0F )' }}>
      <div className='relative w-[525px] h-[300px] md:h-[528px] rounded-[24px] overflow-hidden ml-[65px]'>
        <div className='absolute inset-0 bg-[#ddc8cd] opacity-10' style={{ backdropFilter: 'blur(10px)' }}></div>
        <div className='relative p-8 flex flex-col justify-center items-center'>
          <h1 className='text-white text-[36px] mb-4 text-center'>AI <br /> Outfits</h1>
          <div className='relative flex justify-center items-center'>
            <img src={ShoeBack} alt="Shoe-Back-Image" className='absolute h-[300px] mt-[150px]' />
            <img src={Shoe} alt="Shoe-Image" className='relative -rotate-6' />
          </div>
        </div>
      </div>
      <div className='relative w-[752px] h-[300px] md:h-[528px] rounded-[24px] overflow-hidden ml-[-100px]'>
        <div className='absolute inset-0 bg-[#ddc8cd] opacity-10' style={{ backdropFilter: 'blur(10px)' }}></div>
        <div className='relative p-8 flex flex-col justify-center items-center'>
          <h1 className='text-white text-[36px] mb-4 text-center'>Realistic AI <br /> Avatar</h1>
          <div className='relative flex justify-center items-center w-[752px] mt-[40px]'>
            <img src={Girl} alt="Half-Girl-Image" />
          </div>
        </div>
      </div>
      <div className='relative w-[748px] h-[300px] md:h-[528px] rounded-[24px] overflow-hidden ml-[65px]'>
        <div className='absolute inset-0 bg-[#ddc8cd] opacity-10' style={{ backdropFilter: 'blur(10px)' }}></div>
        <div className='relative p-8 flex flex-col justify-center items-center'>
          <h1 className='text-white text-[36px] mb-4 text-center'>Generate or Write your <br /> Script</h1>
          <div className='relative flex justify-center items-center w-[752px] mt-[50px]'>
            <img src={Keyboard} alt="Keyboard-Image" />
          </div>
        </div>
      </div>
      <div className='relative w-[525px] h-[300px] md:h-[528px] rounded-[24px] overflow-hidden ml-[120px]'>
        <div className='absolute inset-0 bg-[#ddc8cd] opacity-10' style={{ backdropFilter: 'blur(10px)' }}></div>
        <div className='relative p-8 flex flex-col justify-center items-center'>
          <h1 className='text-white text-[36px] mb-4 text-center'>AI-Powered Voice <br /> Generator</h1>
          <div className='relative flex justify-center items-center w-[752px] mt-[50px]'>
            <img src={Robot} alt="Robot-Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Products };
