import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80'
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Earthlight Journal
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          Stories, science, and hope for a greener tomorrow
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <a 
            href="#articles"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Read Articles
          </a>
          <a 
            href="#contact"
            className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>


    </section>
  );
};

export default Hero;