import React from 'react'

const LandingPage = () => {
  return (
    <div className="bg-[#FAF3E0] text-gray-800">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center px-10"
        style={{ backgroundImage: "url('/path-to-nature-image.jpg')" }}
      >
        <div className="max-w-lg bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold text-[#2B5541] leading-tight">
            Making climate solutions accessible for you.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Invest in carbon-reducing projects and trade tokenized carbon credits.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#2B5541] text-white rounded-lg shadow-md hover:bg-[#1E4031] transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-10">
        <h2 className="text-4xl font-bold text-center text-[#2B5541] mb-8">What We Do</h2>
        <p className="text-center text-lg mb-6 text-gray-700">
          Aurion allows users to buy tokenized shares in carbon-reducing projects, earn dividends
          from carbon credits, and trade shares using blockchain for transparency.
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-3xl mx-auto">
          <li><strong>Support Green Projects:</strong> Invest in companies that reduce carbon emissions.</li>
          <li><strong>Earn Dividends:</strong> Profits from sold carbon credits are distributed to shareholders.</li>
          <li><strong>Trade Shares:</strong> Token-based trading in a secondary market.</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-10 bg-[#38B2AC] text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example Project Card */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Renewable Energy</h3>
            <p className="mb-4">Invest in solar and wind energy projects.</p>
            <p className="mb-4 font-semibold">Impact: 200 tons of CO₂ reduced</p>
            <button className="px-4 py-2 bg-[#2B5541] text-white rounded-lg hover:bg-[#1E4031] transition duration-300">
              Invest Now
            </button>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-10">
        <h2 className="text-4xl font-bold text-center text-[#2B5541] mb-8">About Us</h2>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
          Aurion’s mission is to make carbon credits more accessible and create a transparent,
          decentralized platform for carbon trading.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <div className="mb-4">
          <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
          <a href="#" className="mx-2 hover:underline">Terms of Service</a>
          <a href="#" className="mx-2 hover:underline">Contact Us</a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
        </div>
        <p className="mt-4">&copy; 2023 Aurion. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage
