import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Indices = () => {
  const [showMore, setShowMore] = useState(false);

  // Example data array
  const data = [
    { heading: "NIFTY 50", amount: "18,250", percentage: "(+1.2%)" },
    { heading: "SENSEX", amount: "61,500", percentage: "(+0.8%)" },
    { heading: "BANK NIFTY", amount: "42,150", percentage: "(+1.5%)" },
    { heading: "MIDCAP 100", amount: "30,750", percentage: "(-0.5%)" },
    { heading: "SMALLCAP 50", amount: "9,800", percentage: "(+2.1%)" },
    { heading: "NIFTY IT", amount: "28,600", percentage: "(+0.9%)" },
  ];

  return (
    <div className="p-8 flex flex-col md:flex-row items-start justify-between rounded-2xl">
      {/* Indices Section */}
      <div className="w-full md:w-[70%]">
        {/* Indices Title */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#2B5541] mb-6">Market Indices</h1>

          {/* Toggle Arrow */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#2B5541] p-2 rounded-full transition-all duration-300"
          >
            {showMore ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>

        {/* Tiles Container with Smooth Transition */}
        <AnimatePresence>
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {data.slice(0, showMore ? data.length : 3).map((item, index) => {
              const percentageColor = item.percentage.includes("-")
                ? "text-red-500"
                : "text-blue-500";

              return (
                <motion.div
                  key={index}
                  className="w-full sm:w-[45%] md:w-[30%] min-w-[220px] border border-[#359e53] rounded-xl p-5 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-lg font-semibold text-[#2B5541]">{item.heading}</h2>
                  <p className="font-bold text-black">{item.amount}</p>
                  <p className={`text-sm ${percentageColor}`}>{item.percentage}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right-Side Section - Your Investments */}
      <div className="w-full md:w-[30%] bg-[#FAF3E0] p-6 mt-1 md:mt-0 rounded-xl">
        {/* Heading */}
        <h2 className="font-bold text-[#2B5541] mb-4">Your Investments</h2>

        {/* Investment Tile */}
        <div className="rounded-xl p-5 flex flex-col border border-[#359e53] sm:flex-row justify-between">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-sm text-gray-600">Total Returns</p>
            <p className="font-bold text-black">₹12,500</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-600">Current Value</p>
            <p className="font-bold text-black">₹50,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indices;

