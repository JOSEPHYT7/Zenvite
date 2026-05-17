import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { FiAlertCircle, FiLoader, FiArrowRight, FiArrowLeft, FiCheckCircle, FiChevronDown, FiX } from 'react-icons/fi';

const schema = Joi.object({
  fullName: Joi.string().required().messages({ 'string.empty': 'Full name is required' }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({ 'string.empty': 'Email is required', 'string.email': 'Invalid email' }),
  countryCode: Joi.string().required(),
  phoneNumber: Joi.string().required().messages({ 'string.empty': 'Phone number is required' }),
  eventType: Joi.string().required().messages({ 'any.only': 'Select event type' }),
  eventDate: Joi.string().required().messages({ 'string.empty': 'Date is required' }),
  selectedServices: Joi.array().items(Joi.object({
    name: Joi.string(),
    price: Joi.string()
  })).min(1).required().messages({ 'array.min': 'Select at least one service' }),
  message: Joi.string().min(10).required().messages({ 'string.empty': 'Message is required', 'string.min': 'Min 10 characters' }),
  totalPrice: Joi.string().optional()
});

const serviceData = [
  { name: "Basic Invite", inr: "₹2,999", usd: "$39" },
  { name: "Premium Invite", inr: "₹5,999", usd: "$79" },
  { name: "Luxury Invite", inr: "₹11,999", usd: "$149" },
  { name: "Simple Reel", inr: "₹999", usd: "$15" },
  { name: "Cinematic Reel", inr: "₹2,499", usd: "$35" },
  { name: "Luxury Reel", inr: "₹4,999", usd: "$65" },
  { name: "Single Poster", inr: "₹399", usd: "$6" },
  { name: "Premium Poster", inr: "₹799", usd: "$10" },
  { name: "Social Media Pack", inr: "₹1,499", usd: "$20" },
  { name: "Printable Card (Basic)", inr: "₹699", usd: "$10" },
  { name: "Printable Card (Premium)", inr: "₹1,499", usd: "$20" }
];

const comboData = [
  { name: "Combo Package 1", inr: "₹3,999", usd: "$49" },
  { name: "Combo Package 2", inr: "₹7,999", usd: "$99" },
  { name: "Combo Package 3", inr: "₹14,999", usd: "$179" }
];

const countries = [
  { name: "India", code: "+91", iso: "in" },
  { name: "USA", code: "+1", iso: "us" },
  { name: "UK", code: "+44", iso: "gb" },
  { name: "UAE", code: "+971", iso: "ae" },
  { name: "Australia", code: "+61", iso: "au" },
  { name: "Canada", code: "+1", iso: "ca" },
  { name: "Singapore", code: "+65", iso: "sg" },
  { name: "Germany", code: "+49", iso: "de" },
  { name: "France", code: "+33", iso: "fr" },
  { name: "Italy", code: "+39", iso: "it" },
  { name: "Japan", code: "+81", iso: "jp" },
  { name: "China", code: "+86", iso: "cn" },
  { name: "Russia", code: "+7", iso: "ru" },
  { name: "Brazil", code: "+55", iso: "br" },
  { name: "South Africa", code: "+27", iso: "za" },
  { name: "Malaysia", code: "+60", iso: "my" },
  { name: "Indonesia", code: "+62", iso: "id" },
  { name: "Thailand", code: "+66", iso: "th" },
  { name: "Saudi Arabia", code: "+966", iso: "sa" },
  { name: "Netherlands", code: "+31", iso: "nl" }
];

const Contact = () => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);
  const [showCountryMenu, setShowCountryMenu] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue, watch, trigger } = useForm({
    resolver: joiResolver(schema),
    defaultValues: { countryCode: '+91', selectedServices: [], eventType: '', totalPrice: '' }
  });

  const countryCode = watch('countryCode');
  const selectedServices = watch('selectedServices');
  const selectedCountry = useMemo(() => countries.find(c => c.code === countryCode) || countries[0], [countryCode]);
  const isIndia = countryCode === '+91';

  // Update prices when currency changes
  useEffect(() => {
    if (selectedServices.length === 0) return;
    
    const updated = selectedServices.map(s => {
      const source = [...serviceData, ...comboData].find(item => item.name === s.name);
      if (source) {
        return { name: s.name, price: isIndia ? source.inr : source.usd };
      }
      return s;
    });
    
    // Only update if something actually changed to avoid infinite loops
    if (JSON.stringify(updated) !== JSON.stringify(selectedServices)) {
      setValue('selectedServices', updated);
    }
  }, [countryCode, isIndia, setValue, selectedServices]);

  useEffect(() => {
    const handleSelect = (e) => {
      const { name } = e.detail;
      const source = [...serviceData, ...comboData].find(item => item.name === name);
      if (source) {
        const price = isIndia ? source.inr : source.usd;
        const current = watch('selectedServices') || [];
        if (!current.some(s => s.name === name)) {
          setValue('selectedServices', [...current, { name, price }], { shouldValidate: true });
        }
      }
      setStep(2);
    };
    window.addEventListener('selectService', handleSelect);
    return () => window.removeEventListener('selectService', handleSelect);
  }, [setValue, watch, isIndia]);

  // Calculate Total Price
  useEffect(() => {
    const total = selectedServices.reduce((sum, s) => {
      const val = parseInt(s.price.replace(/[^\d]/g, '')) || 0;
      return sum + val;
    }, 0);
    const currencySym = isIndia ? '₹' : '$';
    if (selectedServices.length > 0) {
      setValue('totalPrice', `${currencySym}${total.toLocaleString()}`);
    } else {
      setValue('totalPrice', '');
    }
  }, [selectedServices, setValue, isIndia]);

  const toggleService = (s) => {
    const price = isIndia ? s.inr : s.usd;
    const current = [...selectedServices];
    const index = current.findIndex(item => item.name === s.name);
    
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push({ name: s.name, price });
    }
    setValue('selectedServices', current, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      const API_URL = import.meta.env.PROD ? 'https://zenvite-backend.vercel.app' : 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, phoneNumber: `${data.countryCode} ${data.phoneNumber}` })
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      reset();
      setShowCelebration(true);
      setTimeout(() => { setShowCelebration(false); setStatus('idle'); setStep(1); }, 10000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  const nextStep = async () => {
    let fields = [];
    if (step === 1) fields = ['fullName', 'email', 'phoneNumber'];
    if (step === 2) fields = ['selectedServices'];
    const isValid = await trigger(fields);
    if (isValid) setStep(step + 1);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative z-10 font-sans bg-red-50/50">
      <AnimatePresence>
        {showCelebration && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="bg-white p-8 md:p-12 rounded-3xl text-center shadow-2xl border-4 border-red-600 max-w-sm w-full">
              <FiCheckCircle className="text-6xl md:text-7xl text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black mb-2">Success!</h2>
              <p className="font-bold text-gray-600">Our team will contact you shortly.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 text-center">
          Contact <span className="text-red-700 italic font-serif">Us</span>
        </h2>
        <div className="w-24 h-1.5 bg-red-700 rounded-full"></div>
      </div>

      <div className="max-w-xl md:max-w-2xl mx-auto px-4 md:px-6">
        <motion.div layout className="bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-gray-100">
          <div className="mb-8 md:mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Get <span className="text-red-700 italic font-serif">Started</span></h2>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Step {step} of 3</p>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3].map(s => (
                <div key={s} className={`h-1 w-6 md:w-8 rounded-full transition-all ${step >= s ? 'bg-red-700' : 'bg-gray-100'}`} />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4 md:space-y-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                    <input {...register('fullName')} className="w-full bg-gray-50 border-2 border-transparent focus:border-red-700 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 font-bold outline-none transition-all text-sm md:text-base" placeholder="Enter your name" />
                    {errors.fullName && <p className="text-red-500 text-[10px] font-black">{errors.fullName.message}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                    <input {...register('email')} className="w-full bg-gray-50 border-2 border-transparent focus:border-red-700 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 font-bold outline-none transition-all text-sm md:text-base" placeholder="hello@example.com" />
                    {errors.email && <p className="text-red-500 text-[10px] font-black">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-1 relative">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                    <div className="flex gap-2">
                      <div className="relative shrink-0">
                        <button type="button" onClick={() => setShowCountryMenu(!showCountryMenu)} className="h-full flex items-center gap-2 bg-gray-50 border-2 border-transparent hover:border-gray-200 rounded-xl md:rounded-2xl px-3 md:px-4 py-3 md:py-4 font-bold outline-none cursor-pointer transition-all min-w-[90px] md:min-w-[110px]">
                          <img src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`} className="w-5 md:w-6 rounded-sm shadow-sm" alt="flag" />
                          <span className="text-xs md:text-sm">{selectedCountry.code}</span>
                          <FiChevronDown className={`transition-transform text-xs ${showCountryMenu ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {showCountryMenu && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-0 bottom-full mb-2 w-[180px] md:w-[220px] max-h-[250px] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 p-2 scrollbar-thin">
                              {countries.map(c => (
                                <button key={c.iso} type="button" onClick={() => { setValue('countryCode', c.code); setShowCountryMenu(false); }} className="w-full flex items-center gap-3 p-3 hover:bg-red-50 rounded-xl transition-all group">
                                  <img src={`https://flagcdn.com/w40/${c.iso}.png`} className="w-5 md:w-6 rounded-sm shadow-sm" alt={c.name} />
                                  <span className="text-xs font-bold text-gray-700 group-hover:text-red-700">{c.name} ({c.code})</span>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <input {...register('phoneNumber')} className="flex-1 min-w-0 w-full bg-gray-50 border-2 border-transparent focus:border-red-700 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 font-bold outline-none transition-all text-sm md:text-base" placeholder="00000 00000" />
                    </div>
                    {errors.phoneNumber && <p className="text-red-500 text-[10px] font-black">{errors.phoneNumber.message}</p>}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 block text-center">Select Services ({isIndia ? '₹' : '$'} Prices)</label>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedServices.map(s => (
                      <span key={s.name} className="flex items-center gap-2 bg-red-700 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase">
                        {s.name} ({s.price})
                        <button type="button" onClick={() => toggleService(serviceData.find(i => i.name === s.name) || comboData.find(i => i.name === s.name))}><FiX /></button>
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <p className="col-span-full text-[10px] font-black text-gray-300 uppercase tracking-widest border-b pb-1">Individual Services</p>
                      {serviceData.map(s => (
                        <button key={s.name} type="button" onClick={() => toggleService(s)} 
                          className={`p-3 rounded-xl border-2 font-bold text-xs text-left flex justify-between items-center transition-all ${selectedServices.some(item => item.name === s.name) ? 'border-red-700 bg-red-50 text-red-700' : 'border-gray-100 bg-gray-50/30'}`}>
                          {s.name}
                          <span className="text-[10px] opacity-60">{isIndia ? s.inr : s.usd}</span>
                        </button>
                      ))}
                      <p className="col-span-full text-[10px] font-black text-gray-300 uppercase tracking-widest border-b pb-1 mt-4">Combo Packages</p>
                      {comboData.map(s => (
                        <button key={s.name} type="button" onClick={() => toggleService(s)} 
                          className={`p-3 rounded-xl border-2 font-bold text-xs text-left flex justify-between items-center transition-all ${selectedServices.some(item => item.name === s.name) ? 'border-red-700 bg-red-50 text-red-700' : 'border-gray-100 bg-red-50/20'}`}>
                          {s.name}
                          <span className="text-[10px] opacity-60">{isIndia ? s.inr : s.usd}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {selectedServices.length > 0 && (
                    <div className="pt-4 border-t flex justify-between items-center">
                      <span className="text-xs font-black uppercase text-gray-400">Total Investment ({isIndia ? 'INR' : 'USD'})</span>
                      <span className="text-2xl font-black text-red-700">{watch('totalPrice')}</span>
                    </div>
                  )}

                  {errors.selectedServices && <p className="text-red-500 text-[10px] font-black text-center">{errors.selectedServices.message}</p>}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Event Type</label>
                      <select {...register('eventType')} className="w-full bg-gray-50 border-2 border-transparent focus:border-red-700 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 font-bold outline-none appearance-none cursor-pointer text-sm md:text-base">
                        <option value="">Select...</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.eventType && <p className="text-red-500 text-[10px] font-black">{errors.eventType.message}</p>}
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Event Date</label>
                      <input type="date" {...register('eventDate')} className="w-full bg-gray-50 border-2 border-transparent focus:border-red-700 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 font-bold outline-none text-sm md:text-base" />
                      {errors.eventDate && <p className="text-red-500 text-[10px] font-black">{errors.eventDate.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message / Requirements</label>
                    <textarea {...register('message')} rows="3" className="w-full bg-gray-50 border-2 border-transparent focus:border-red-700 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 font-bold outline-none resize-none text-sm md:text-base" placeholder="Tell us more about your vision..." />
                    {errors.message && <p className="text-red-500 text-[10px] font-black">{errors.message.message}</p>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex gap-3 md:gap-4 pt-4 md:pt-6">
              {step > 1 && (
                <button type="button" onClick={() => setStep(step - 1)} className="flex-1 py-3 md:py-4 rounded-xl md:rounded-2xl bg-gray-100 text-gray-900 font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                  <FiArrowLeft /> Back
                </button>
              )}
              {step < 3 ? (
                <button type="button" onClick={nextStep} className="flex-[2] py-3 md:py-4 rounded-xl md:rounded-2xl bg-gray-900 text-white font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-red-700 transition-all flex items-center justify-center gap-2">
                  Next <FiArrowRight />
                </button>
              ) : (
                <button type="submit" disabled={status === 'loading'} className="flex-[2] py-3 md:py-4 rounded-xl md:rounded-2xl bg-red-700 text-white font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-red-800 shadow-xl shadow-red-700/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 active:scale-95">
                  {status === 'loading' ? <FiLoader className="animate-spin" /> : 'Finish Request'}
                </button>
              )}
            </div>
          </form>

          {status === 'error' && (
            <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-[10px] md:text-xs font-bold">
              <FiAlertCircle /> {errorMessage}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
