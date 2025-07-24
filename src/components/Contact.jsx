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
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">Contact Us</h2>
      <p className="text-center text-gray-700 mb-8">
        Want to fight pollution together? Send us a message!
      </p>

      {sent ? (
        <div className="bg-green-100 text-green-700 p-4 rounded text-center">
          Thank you! Your message has been sent.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      )}

        <div className="mt-10 text-center text-gray-600 text-sm">
          <p>📧 polution @gmail .com </p>
          <p>📞 +212614178456</p>
          <p>🌍 let's protect our univers </p>
        </div>
      </div>
    
  );
}
