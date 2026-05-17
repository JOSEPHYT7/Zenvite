import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import LanguageBanner from './components/LanguageBanner';

// Previews
import LuxuryWedding from './previews/LuxuryWedding';
import BirthdayParty from './previews/BirthdayParty';
import IndianWedding from './previews/IndianWedding';
import CorporateEvent from './previews/CorporateEvent';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => {
  const [currency, setCurrency] = useState('INR');

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Previews />
        <LanguageBanner />
        <WhyChoose />
        <Testimonials />
        <Pricing currency={currency} setCurrency={setCurrency} />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

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

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preview/luxury-wedding" element={<LuxuryWedding />} />
        <Route path="/preview/birthday-party" element={<BirthdayParty />} />
        <Route path="/preview/indian-wedding" element={<IndianWedding />} />
        <Route path="/preview/corporate-event" element={<CorporateEvent />} />
      </Routes>
    </div>
  );
}

export default App;
