import Search from '../components/Search.js';
import "./styles/Hero.css";

const Hero = () => {
  return (
    <div className='hero-container'>
      <h1 className='hero-title'>Help <span className='hero-title background'>Center</span></h1>
      <Search 
        placeholder="What to do"
      />
    </div>
  )
}

export default Hero;
