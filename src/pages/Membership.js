import React, { useState, useEffect } from 'react';
import { fetchData, postData } from '../services/api';

export default function Membership() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    async function loadPlans() {
      try {
        // In a real app, you would fetch these from your backend
        const mockPlans = [
          { id: 1, name: 'Basic', price: 'Rs.500/month' },
          { id: 2, name: 'Classic', price: 'Rs.1000/month' },
          { id: 3, name: 'Prime', price: 'Rs.1500/month' },
        ];
        setPlans(mockPlans);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadPlans();
  }, []);

  const handleEnroll = async () => {
    if (!selectedPlan) return;

    try {
      await postData('/members/update-membership', {
        planId: selectedPlan,
      });
      alert(`Successfully enrolled in ${plans.find((p) => p.id === selectedPlan).name} plan!`);
    } catch (err) {
      alert('Enrollment failed');
    }
  };

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
            Choose Your <span className="text-yellow-400">Membership Plan</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Unlock your fitness potential with a plan tailored to your goals.
          </p>
        </section>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
          </div>
        ) : (
          /* Plans Grid */
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`bg-white rounded-lg shadow-md p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg ${
                      selectedPlan === plan.id ? 'border-2 border-yellow-500' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      id={`plan-${plan.id}`}
                      name="membershipPlan"
                      value={plan.id}
                      checked={selectedPlan === plan.id}
                      onChange={() => setSelectedPlan(plan.id)}
                      className="mb-4"
                    />
                    <label
                      htmlFor={`plan-${plan.id}`}
                      className="block cursor-pointer"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 text-lg mb-4">{plan.price}</p>
                    </label>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button
                  onClick={handleEnroll}
                  disabled={!selectedPlan}
                  className={`inline-block font-semibold py-3 px-8 rounded-full transition duration-300 ${
                    selectedPlan
                      ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}