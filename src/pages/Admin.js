import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/api';

export default function Admin() {
  const [members, setMembers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState({
    members: true,
    trainers: true,
    classes: true,
  });
  const [activeTab, setActiveTab] = useState('members');

  useEffect(() => {
    async function loadData() {
      try {
        if (activeTab === 'members') {
          const data = await fetchData('/members');
          setMembers(data);
          setLoading((prev) => ({ ...prev, members: false }));
        } else if (activeTab === 'trainers') {
          const data = await fetchData('/trainers');
          setTrainers(data);
          setLoading((prev) => ({ ...prev, trainers: false }));
        } else if (activeTab === 'classes') {
          const data = await fetchData('/classes');
          setClasses(data);
          setLoading((prev) => ({ ...prev, classes: false }));
        }
      } catch (err) {
        console.error(err);
      }
    }
    loadData();
  }, [activeTab]);

  const renderTable = () => {
    if (loading[activeTab]) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {activeTab === 'members' && (
                <>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">ID</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Name</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Email</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Membership</th>
                </>
              )}
              {activeTab === 'trainers' && (
                <>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">ID</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Name</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Specialization</th>
                </>
              )}
              {activeTab === 'classes' && (
                <>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">ID</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Title</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Schedule</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Trainer</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {activeTab === 'members' &&
              members.map((member, index) => (
                <tr
                  key={member.id}
                  className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-yellow-50 transition duration-200`}
                >
                  <td className="py-3 px-4 text-gray-600">{member.id}</td>
                  <td className="py-3 px-4 text-gray-600">{member.name}</td>
                  <td className="py-3 px-4 text-gray-600">{member.email}</td>
                  <td className="py-3 px-4 text-gray-600">{member.membershipType || 'None'}</td>
                </tr>
              ))}
            {activeTab === 'trainers' &&
              trainers.map((trainer, index) => (
                <tr
                  key={trainer.id}
                  className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-yellow-50 transition duration-200`}
                >
                  <td className="py-3 px-4 text-gray-600">{trainer.id}</td>
                  <td className="py-3 px-4 text-gray-600">{trainer.name}</td>
                  <td className="py-3 px-4 text-gray-600">{trainer.specialization}</td>
                </tr>
              ))}
            {activeTab === 'classes' &&
              classes.map((cls, index) => (
                <tr
                  key={cls.id}
                  className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-yellow-50 transition duration-200`}
                >
                  <td className="py-3 px-4 text-gray-600">{cls.id}</td>
                  <td className="py-3 px-4 text-gray-600">{cls.title}</td>
                  <td className="py-3 px-4 text-gray-600">{cls.schedule}</td>
                  <td className="py-3 px-4 text-gray-600">{cls.trainer?.name || 'None'}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
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
            <span className="text-yellow-400">Admin</span> Dashboard
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Manage members, trainers, and classes with ease.
          </p>
        </section>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('members')}
              className={`px-6 py-3 rounded-md font-semibold transition duration-300 ${
                activeTab === 'members'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Members
            </button>
            <button
              onClick={() => setActiveTab('trainers')}
              className={`px-6 py-3 rounded-md font-semibold transition duration-300 ${
                activeTab === 'trainers'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Trainers
            </button>
            <button
              onClick={() => setActiveTab('classes')}
              className={`px-6 py-3 rounded-md font-semibold transition duration-300 ${
                activeTab === 'classes'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Classes
            </button>
          </div>

          {/* Table */}
          {renderTable()}
        </div>
      </div>
    </div>
  );
}