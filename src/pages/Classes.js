import React, { useState, useEffect } from 'react';

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadClasses() {
      try {
        // Mock data for two classes with timings (Spin Class removed)
        const mockClasses = [
          {
            id: 1,
            title: 'Yoga Flow',
            schedule: 'Mon/Wed/Fri',
            trainer: { name: 'Pooja Roy' },
            timings: '9:00 AM - 10:00 AM',
          },
          {
            id: 2,
            title: 'Strength Circuit',
            schedule: 'Mon-Sat',
            trainer: { name: 'Ayan Ghosh' },
            timings: '6:00 AM - 10:00 PM',
          },
        ];
        setClasses(mockClasses);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadClasses();
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
            Explore Our <span className="text-yellow-400">Fitness Classes</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Join our dynamic classes to boost your fitness with expert guidance.
          </p>
        </section>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
          </div>
        ) : (
          /* Classes Grid */
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {classes.map((cls) => (
                  <div
                    key={cls.id}
                    className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {cls.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{cls.schedule}</p>
                    <p className="text-gray-600 mb-2">{cls.timings}</p>
                    <p className="text-gray-500 mb-4">
                      Trainer: {cls.trainer?.name || 'TBD'}
                    </p>
                    <a
                      href="#book"
                      className="inline-block bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
                    >
                      Book Class
                    </a>
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