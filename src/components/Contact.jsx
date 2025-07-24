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
        Whether you're a researcher, activist, student, or simply someone who cares about the environment, we welcome your input and collaboration.
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

        {/* Contact info on the right */}
        <div className="w-full md:w-1/2">
          <div className="bg-green-50 p-8 rounded-lg h-full">
            <h3 className="text-2xl font-semibold text-green-700 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-green-700 mb-2">Email Us</h4>
                <p className="text-gray-700">info@ecoaware.org</p>
                <p className="text-gray-600 text-sm">Send us a message anytime</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-green-700 mb-2">Call Us</h4>
                <p className="text-gray-700">+1 (555) 123-4567</p>
                <p className="text-gray-600 text-sm">Mon-Fri 9AM-5PM PST</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-green-700 mb-2">Visit Us</h4>
                <p className="text-gray-700">San Francisco, CA</p>
                <p className="text-gray-700">United States</p>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-green-200">
              <p className="text-gray-600">📧 pollution@gmail.com</p>
              <p className="text-gray-600 mt-2">📞 +212614178456</p>
              <p className="text-gray-600 mt-2">🌍 Let's protect our universe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}