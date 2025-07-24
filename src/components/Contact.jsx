import React, { useState } from 'react';

export default function PollutionContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Let's Start a Conversation</h2>
      <p className="text-center text-gray-700 mb-12">
        Whether you're a researcher, activist, student, or simply someone who cares deeply about the environment, your voice matters. The planet needs you. We need you. If you have knowledge, passion, or even just questions—share them. Let's fight pollution together.
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Form on the left */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-green-700 mb-6">Send Us a Message</h3>
          
          {sent ? (
            <div className="bg-green-100 text-green-700 p-4 rounded text-center">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your interest in environmental issues, questions, or how you'd like to get involved..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

       
        <div className="w-full md:w-1/2">
          <div className="bg-green-50 p-8 rounded-lg h-full">
            <h3 className="text-2xl font-semibold text-green-700 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-green-700 mb-2">Email Us</h4>
                <p className="text-gray-700">earthlight_journal_XCODERS@gmail.com </p>
                <p className="text-gray-600 text-sm">Send us a message anytime we are delighted </p>
              </div> 
    
              <div>
                <h4 className="text-lg font-medium text-green-700 mb-2">Team members</h4>
              
                <p className="text-gray-700">Mohamed  akrame kraichy</p>
                <p className="text-gray-700">Hajar Ennajdy</p>
                <p className="text-gray-700">abd Allah mazzouz</p>
                <p className="text-gray-700">Mohamed  maarouf </p>
                <p className="text-gray-700">Aya moujoud </p>
              </div> 
              
            </div>
            
          
          </div>
        </div>
      </div>
    </div>
  );
}