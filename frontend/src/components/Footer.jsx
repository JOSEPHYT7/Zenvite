import { useState } from 'react';
import { FiInstagram, FiYoutube, FiFacebook } from 'react-icons/fi';
import LegalModal from './LegalModal';

const privacyContent = (
  <div className="space-y-4">
    <p><strong>Effective Date:</strong> January 1, 2026</p>
    <p>Welcome to Zenvite! Your privacy is of paramount importance to us. This Privacy Policy outlines how we collect, use, and protect your information.</p>
    <h3 className="font-bold text-lg mt-4 text-gray-900">1. Information We Collect</h3>
    <p>We may collect personal information such as your name, email address, phone number, and event details when you submit a request or communicate with us.</p>
    <h3 className="font-bold text-lg mt-4 text-gray-900">2. How We Use Your Information</h3>
    <p>We use your information solely to design your digital invitations, manage RSVPs, and provide customer support. We never sell your data to third parties.</p>
    <h3 className="font-bold text-lg mt-4 text-gray-900">3. Data Security</h3>
    <p>We implement strict security measures to protect your personal data against unauthorized access or disclosure.</p>
  </div>
);

const termsContent = (
  <div className="space-y-4">
    <p><strong>Effective Date:</strong> January 1, 2026</p>
    <p>These Terms of Service govern your use of the Zenvite website and services. By accessing our website, you agree to these terms.</p>
    <h3 className="font-bold text-lg mt-4 text-gray-900">1. Services Provided</h3>
    <p>Zenvite provides custom digital invitation designs and hosting for special events based on the package selected by the user.</p>
    <h3 className="font-bold text-lg mt-4 text-gray-900">2. User Responsibilities</h3>
    <p>You agree to provide accurate information for your event and ensure you have the rights to any photos or text you provide for your invitations.</p>
    <h3 className="font-bold text-lg mt-4 text-gray-900">3. Refunds & Cancellations</h3>
    <p>Due to the custom nature of our digital products, refunds are only offered within 24 hours of purchase before the design process begins.</p>
  </div>
);

const Footer = () => {
  const [modalData, setModalData] = useState({ isOpen: false, title: '', content: null });

  const openModal = (title, content, e) => {
    e.preventDefault();
    setModalData({ isOpen: true, title, content });
  };

  return (
    <>
      <footer className="bg-white py-12 relative z-10 border-t border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-4xl font-black mb-4">
                <span className="text-gradient font-cursive pr-4 pb-2 inline-block">Zenvite</span>
              </h3>
              <p className="text-gray-600 max-w-sm mb-6 font-medium">
                Digital Invitations for Every Celebration. Premium, mobile-friendly, and breathtakingly beautiful.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-700 hover:text-white transition-colors text-gray-600">
                  <FiInstagram />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-700 hover:text-white transition-colors text-gray-600">
                  <FiYoutube />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-700 hover:text-white transition-colors text-gray-600">
                  <FiFacebook />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Quick Links</h4>
              <ul className="space-y-2 text-gray-600 font-medium">
                <li><a href="#services" className="hover:text-red-700 transition-colors">Services</a></li>
                <li><a href="#previews" className="hover:text-red-700 transition-colors">Templates</a></li>
                <li><a href="#why-choose" className="hover:text-red-700 transition-colors">Why Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Legal</h4>
              <ul className="space-y-2 text-gray-600 font-medium">
                <li><a href="#" onClick={(e) => openModal("Privacy Policy", privacyContent, e)} className="hover:text-red-700 transition-colors">Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => openModal("Terms of Service", termsContent, e)} className="hover:text-red-700 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 text-center text-gray-500 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Zenvite. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <LegalModal 
        isOpen={modalData.isOpen} 
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        title={modalData.title}
        content={modalData.content}
      />
    </>
  );
};

export default Footer;
