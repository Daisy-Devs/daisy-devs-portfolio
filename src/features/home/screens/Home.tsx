import CultivatingExcellence from '../components/CultivatingExcellence'
import GetInTouch from '../components/GetInTouch'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <main>
        <Hero/>
        <Marquee/>
        <CultivatingExcellence/>
        <Testimonials/>
        <GetInTouch/>
    </main>
  )
}

export default Home