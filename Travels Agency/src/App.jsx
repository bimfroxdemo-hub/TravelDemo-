import './App.css';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import AboutSection from './Components/AboutSection.jsx';
import PackagesSection from './Components/PackagesSection.jsx';
import ServicesSection from './Components/ServicesSection.jsx';
import TestimonialsSection from './Components/TestimonialsSection.jsx';
import SocialMediaSection from './Components/SocialMediaSection.jsx';
import Footer from './Components/Footer.jsx';
import WhatsAppButton from './Components/WhatsAppButton.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutSection />
      <PackagesSection />
      <ServicesSection />
      <TestimonialsSection />
      <SocialMediaSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;