
import React from 'react';

/* ──IMAGES*/
const types = [
  {
    name: 'Air Pollution',
    img: 'https://i.pinimg.com/1200x/9f/ba/4e/9fba4ef35a6d8078df11fe3ea942c1aa.jpg',
    example: 'Harmful gases from vehicles, factories, and burning fossil fuels.'
  },
  {
    name: 'Water Pollution',
    img: 'https://i.pinimg.com/736x/26/43/ab/2643abc63af784e58e626d1f4478c44a.jpg',
    example: 'Trash, oil spills, and industrial waste dumped into rivers and oceans.'
  },
  {
    name: 'Soil Pollution',
    img: 'https://i.pinimg.com/1200x/68/60/b3/6860b38400a45f3d75fa4a5ecd6ec93b.jpg',
    example: 'Chemical fertilizers, pesticides, and illegal dumping harming land.'
  },
  {
    name: 'Plastic Pollution',
    img: 'https://i.pinimg.com/1200x/78/46/6b/78466b1e7b88edfe36e8ea08f5d5eb3f.jpg',
    example: 'Plastic waste piling up in oceans, harming wildlife and ecosystems.'
  },
  {
    name: 'Noise Pollution',
    img: 'https://i.pinimg.com/736x/ba/69/02/ba6902989c59ab904ea9c3ef30fff2fe.jpg',
    example: 'Disruptive sound from heavy traffic, construction, or loud industries'
  },
  {
    name: 'Light Pollution',
    img: 'https://i.pinimg.com/1200x/40/de/76/40de76d477471d453f0c560837c9259a.jpg',
    example: 'City glow obscuring the night sky'
  }
];

const Body = () => {
  return (
    <main className="bg-gray-100 py-12 px-6 md:px-16">
      
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Pollution: A Global Threat
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          From the air we breathe to the oceans we rely on, pollution affects every corner of
          our planet. Understanding its many forms is the first step toward real change.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://i.pinimg.com/1200x/45/65/93/456593eec7aeb6fc47dee5d71c9a0c46.jpg"
            alt="Polluted city skyline"
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>
      </section>

      {/* ─Types of Pollution ─*/}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Six Common Types of Pollution
        </h2>

        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {types.map(({ name, img, example }) => (
            <article
              key={name}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img src={img} alt={name} className="w-full h-40 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{name}</h3>
                <p className="text-sm text-gray-500">{example}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;
