import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Using Formspree ID from the original template
      const response = await fetch('https://formspree.io/f/xjgyblll', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#f0f7ff]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-6xl font-black text-[#001f3f] mb-8 uppercase tracking-tighter">Get in touch.</h2>
          <p className="text-xl text-slate-600 leading-relaxed">We are passionate about pump foiling and want to help as many people as possible getting started. Feel free to reach out with any question or suggestion, we value feedback to improve the site and make it more useful.</p>
        </div>
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-blue-100 relative min-h-[400px]">
          {status === 'success' ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 animate-fadeIn">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-black text-[#001f3f] uppercase mb-2">Message Sent!</h3>
              <p className="text-slate-500 mb-6 font-medium">Thank you for reaching out. We'll get back to you shortly.</p>
              <button onClick={() => setStatus('idle')} className="mt-4 text-cyan-600 font-bold uppercase text-xs tracking-widest hover:underline">Send another</button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input 
                name="name"
                type="text" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 font-bold text-[#001f3f] focus:border-cyan-400 outline-none transition-all" 
                placeholder="YOUR NAME" 
              />
              <input 
                name="email"
                type="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 font-bold text-[#001f3f] focus:border-cyan-400 outline-none transition-all" 
                placeholder="YOUR EMAIL" 
              />
              <textarea 
                name="message"
                rows={4} 
                required 
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 font-bold text-[#001f3f] focus:border-cyan-400 outline-none transition-all" 
                placeholder="YOUR MESSAGE"
              ></textarea>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-[#001f3f] hover:bg-cyan-500 text-white hover:text-blue-950 font-black py-5 rounded-2xl transition-all uppercase tracking-widest disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-center font-bold text-sm animate-fadeIn">Oops! There was an issue sending your message. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
