import React from 'react';

export default function Home() {
  return (
    <div>
      {/* Tailwind CSS CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />

      {/* Main Container */}
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[600px] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593078166874-1515992f0aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Welcome to <span className="text-yellow-400">Godlike</span> Gym
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Transform your fitness journey with our state-of-the-art facilities and expert trainers.
            </p>
            <a
              href="#join"
              className="inline-block bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
            >
              Join Now
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-yellow-500 text-4xl mb-4">🏋️‍♂️</div>
                <h3 className="text-lg font-semibold mb-2">Top Equipment</h3>
                <p className="text-gray-600">
                  Access cutting-edge fitness gear to maximize your workouts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-yellow-500 text-4xl mb-4">🧑‍🏫</div>
                <h3 className="text-lg font-semibold mb-2">Expert Trainers</h3>
                <p className="text-gray-600">
                  Personalized coaching to help you reach your goals faster.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-yellow-500 text-4xl mb-4">🕒</div>
                <h3 className="text-lg font-semibold mb-2">24/7 Access</h3>
                <p className="text-gray-600">
                  Work out on your schedule with round-the-clock gym access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-yellow-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-base md:text-lg mb-8">
              Sign up today and get your first session free!
            </p>
            <a
              href="#signup"
              className="inline-block bg-white text-yellow-500 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}