import React from 'react'
import TokenomicsImg from '../assets/Tokenomics-Image.png'

const Tokenomics:React.FC = () => {
  return (
    <div style={{
        backgroundImage: 'linear-gradient(to bottom, #0F0F0F, #301252, #0A1830)',
        padding: '50px',
      }}>
        <img src={TokenomicsImg} alt="Tokenomics-Image" />
      </div>
  )
}

export default Tokenomics