import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Skills from './Skills'

const Home = () => {
  return (
      <div>
          
      <div className="min-h-screen flex flex-col bg-black">
          <Hero />
          <Skills />
          <Footer />
      </div>
      </div>
  )
}

export default Home