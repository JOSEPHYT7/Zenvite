import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLoader, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import ParticlesBackground from './ParticlesBackground';

const schema = Joi.object({
  fullName: Joi.string().required().messages({
    'string.empty': 'Full name is required'
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Please enter a valid email'
  }),
  phoneNumber: Joi.string().required().messages({
    'string.empty': 'Phone number is required'
  }),
  eventType: Joi.string().valid('Wedding', 'Birthday', 'Engagement', 'Corporate', 'Other').required().messages({
    'any.only': 'Please select an event type'
  }),
  message: Joi.string().min(10).required().messages({
    'string.empty': 'Message is required',
    'string.min': 'Message must be at least 10 characters'
  })
});

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: joiResolver(schema)
  });

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      setStatus('success');
      reset();
      
      // Show fireworks and success overlay for 20 seconds
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
        setStatus('idle');
      }, 20000); // 20 seconds

    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showCelebration && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <ParticlesBackground />
            <motion.div 
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="relative z-[101] bg-white p-12 rounded-3xl text-center max-w-lg mx-4 shadow-2xl border-4 border-accent-magenta"
            >
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">
                ✓
              </div>
              <h2 className="text-4xl font-black mb-4 text-gray-900">Thank You!</h2>
              <p className="text-xl text-gray-600 font-medium">Your request has been submitted successfully.</p>
              <p className="text-sm text-gray-400 mt-4">We will be in touch with you shortly to create magic.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black mb-4 text-[#4a1c0d]">Let's Create Your <span className="text-gradient">Invite</span></h2>
              <p className="text-[#7a3e26] font-medium">Fill out the form below and our team will get in touch to start crafting your digital experience.</p>
            </div>

            {status === 'error' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700">
                <FiAlertCircle className="text-xl shrink-0" />
                <p className="font-medium">{errorMessage}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#4a1c0d]">Full Name</label>
                  <input 
                    {...register('fullName')} 
                    className={`w-full bg-white border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta transition-colors shadow-sm`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#4a1c0d]">Email Address</label>
                  <input 
                    {...register('email')} 
                    className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta transition-colors shadow-sm`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#4a1c0d]">Phone Number</label>
                  <input 
                    {...register('phoneNumber')} 
                    className={`w-full bg-white border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta transition-colors shadow-sm`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phoneNumber.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#4a1c0d]">Event Type</label>
                  <select 
                    {...register('eventType')} 
                    className={`w-full bg-white border ${errors.eventType ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta transition-colors shadow-sm`}
                  >
                    <option value="">Select an event</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.eventType && <p className="text-red-500 text-xs mt-1 font-medium">{errors.eventType.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4a1c0d]">Message Details</label>
                <textarea 
                  {...register('message')} 
                  rows="4"
                  className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta transition-colors resize-none shadow-sm`}
                  placeholder="Tell us a bit about your event theme, dates, and requirements..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl bg-red-700 text-white font-bold text-lg hover:bg-red-800 shadow-xl shadow-red-700/30 transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <><FiLoader className="animate-spin text-2xl" /> Sending...</>
                ) : (
                  'Send Request'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
