import React from 'react'
import Feature1 from '../assets/Features-Image-1.png'
import Feature2 from '../assets/Features-Image-2.png'

const Features:React.FC = () => {
  return (
    <div style={{
        backgroundImage: 'linear-gradient(to bottom, #0A1830, #0F0F0F, #0F0F0F)'
      }}>
        <img src={Feature1} alt="Features-Image-1" className='w-full h-[108px]' />
        <br />
        <img src={Feature2} alt="Features-Image-2" className='w-full h-[156px]'/>
    </div>
  )
}

export {Features}