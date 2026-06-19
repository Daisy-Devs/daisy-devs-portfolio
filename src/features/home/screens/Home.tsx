import CultivatingExcellence from '../components/CultivatingExcellence'
import GetInTouch from '../components/GetInTouch'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Marquee/>
        <CultivatingExcellence/>
        <Testimonials/>
        <GetInTouch/>
    </div>
  )
}

export default Home