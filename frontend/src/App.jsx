import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Previews from './components/Previews';
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary">
      <Helmet>
        <title>Zenvite | Digital Invitations for Every Celebration</title>
        <meta name="description" content="We create modern, interactive digital invitation websites for weddings, birthdays, and all celebrations." />
        <meta property="og:title" content="Zenvite - Premium Digital Invitations" />
        <meta property="og:description" content="Digital Invitations for Every Celebration with premium startup vibe." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Previews />
        <WhyChoose />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
