import React, { useState, useEffect } from 'react';

export default function Trainers() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTrainers() {
      try {
        // Mock data for two trainers
        const mockTrainers = [
          {
            id: 1,
            name: 'Ayan Ghosh',
            specialization: 'Strength Training',
            description:
              'With over 10 years of experience, Ayan specializes in building muscle and boosting endurance through personalized strength programs.',
          },
          {
            id: 2,
            name: 'Pooja Roy',
            specialization: 'Yoga & Mindfulness',
            description:
              'Pooja brings a holistic approach, combining yoga flows and mindfulness techniques to enhance flexibility and mental clarity.',
          },
        ];
        setTrainers(mockTrainers);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadTrainers();
  }, []);

  return (
    <div>
      {/* Tailwind CSS CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />

      {/* Main Container */}
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Header Section */}
        <section className="bg-gray-800 py-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Meet Our <span className="text-yellow-400">Expert Trainers</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Our certified trainers are here to guide you to your fitness goals.
          </p>
        </section>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
          </div>
        ) : (
          /* Trainers Grid */
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainers.map((trainer) => (
                  <div
                    key={trainer.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {trainer.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{trainer.specialization}</p>
                      <p className="text-gray-500 text-sm mb-4">{trainer.description}</p>
                      <a
                        href="#book"
                        className="inline-block bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
                      >
                        Book Session
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}