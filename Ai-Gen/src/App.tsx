import './App.css'
import { About } from './components/About'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { GetStarted } from './components/GetStarted'
import { HeroSection } from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import { Products } from './components/Products'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import { Navbar } from './routes/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <HowItWorks/>
      <Features/>
      <Products/>
      <Tokenomics/>
      <Roadmap/>
      <GetStarted/>
      <Footer/>
    </>
  )
}

export default App
