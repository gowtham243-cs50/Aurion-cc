import React, { useState, useRef } from "react";
import Navbar from "./components/tokenisationComponents/Navbar";
import { TokenTypeButtons } from "./components/tokenisationComponents/TokenTypeButtons";
import { TokenGrid } from "./components/tokenisationComponents/TokenGrid";
import { ScrollButtons } from "./components/tokenisationComponents/ScrollButtons";
import ScreenerButton from "./components/tokenisationComponents/ScreenerButton";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

const Tokenisation = () => {
  const shareTokens = [
    {
      id: 1,
      projectName: "Tech Innovations",
      companyName: "InnoTech Corp",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      currentPrice: 125.75,
      priceChange: 2.35,
      projectType: "Technology",
      projectLocation: "San Francisco, USA",
      certificationStandard: "ISO 14001",
      projectDeveloper: "InnoTech Corp",
      carbonReduction: "15,000",
      sdgs: ["Clean Energy", "Innovation", "Climate Action"],
      cobenefits: "Job creation, improved infrastructure, knowledge transfer",
      impactReports: "Annual Sustainability Report 2023",
      availableCredits: "5,000",  
      vintageYear: "2023",
      creditPrice: 125.75,
      creditStatus: "Available",
      description:
        "Tech Innovations is a pioneering project focused on developing sustainable technology solutions that reduce carbon emissions in the tech industry. Through innovative cloud computing optimizations and energy-efficient hardware designs, this project has significantly reduced the carbon footprint of digital infrastructure.",
    },
    {
      id: 2,
      projectName: "Green Energy",
      companyName: "EcoSolutions Ltd",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      currentPrice: 87.2,
      priceChange: -1.45,
    },
    {
      id: 3,
      projectName: "Healthcare Plus",
      companyName: "MediCare Group",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Logo_of_the_World_Health_Organization.svg",
      currentPrice: 213.5,
      priceChange: 0.75,
    },
    {
      id: 4,
      projectName: "Renewable Power",
      companyName: "SolarTech",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Renewable_energy.svg",
      currentPrice: 95.6,
      priceChange: 1.2,
    },
    {
      id: 5,
      projectName: "Fintech Solutions",
      companyName: "DigitalFinance Inc",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
      currentPrice: 156.3,
      priceChange: -0.5,
    },
  ];

  const mutualFundTokens = [
    {
      id: 1,
      projectName: "Global Growth Fund",
      companyName: "Invest Partners",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2020_Investopedia.svg",
      currentPrice: 48.92,
      priceChange: 1.2,
    },
    {
      id: 2,
      projectName: "Balanced Portfolio",
      companyName: "WealthWise Capital",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Wealthsimple_logo.svg",
      currentPrice: 75.3,
      priceChange: -0.45,
    },
    {
      id: 3,
      projectName: "Tech Innovation Fund",
      companyName: "Future Investments",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      currentPrice: 62.5,
      priceChange: 0.75,
    },
  ];

  const [activeTokenType, setActiveTokenType] = useState("shares");
  const sharesScrollContainerRef = useRef(null);
  const mutualFundsScrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const navigate = useNavigate();
  const [activeCapGainers, setActiveCapGainers] = useState(null);
  const [activeCapLosers, setActiveCapLosers] = useState(null);

  const handleTokenTypeChange = (type) => {
    setActiveTokenType(type);
  };

  const scrollLeft = () => {
    const container =
      activeTokenType === "shares"
        ? sharesScrollContainerRef.current
        : mutualFundsScrollContainerRef.current;

    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" });
      setTimeout(checkScrollability, 300);
    }
  };

  const scrollRight = () => {
    const container =
      activeTokenType === "shares"
        ? sharesScrollContainerRef.current
        : mutualFundsScrollContainerRef.current;

    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" });
      setTimeout(checkScrollability, 300);
    }
  };

  const checkScrollability = () => {
    const container =
      activeTokenType === "shares"
        ? sharesScrollContainerRef.current
        : mutualFundsScrollContainerRef.current;

    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const handleTileClick = (project) => {
    console.log("Tile clicked:", project);
    navigate("/project-details", { state: { project } });
  };

  const handleCapClickGainers = (capType) => {
    setActiveCapGainers(capType);
    console.log(`Gainers: ${capType} Filter Clicked`);
  };

  const handleCapClickLosers = (capType) => {
    setActiveCapLosers(capType);
    console.log(`Losers: ${capType} Filter Clicked`);
  };

  return (
    <div className="font-inter bg-[#faf3e0]">
      <Navbar />
      <div className="p-6 bg-[#faf3e0] min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <TokenTypeButtons onTypeChange={handleTokenTypeChange} />
            <ScreenerButton />
          </div>

          <div className="px-4 sm:px-6 lg:px-8">
            {activeTokenType === "shares" && (
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 mb-4 w-[850px]">
                  <h2 className="text-lg sm:text-xl font-semibold">Most Popular Tokens</h2>
                  <ScrollButtons
                    onScrollLeft={scrollLeft}
                    onScrollRight={scrollRight}
                    disableLeft={!canScrollLeft}
                    disableRight={!canScrollRight}
                  />
                </div>
                <div
                  ref={sharesScrollContainerRef}
                  className="flex flex-nowrap space-x-4 overflow-x-auto overflow-y-hidden max-w-full h-49 scrollbar-none scroll-smooth w-[850px]"
                  onScroll={checkScrollability}
                >
                  <TokenGrid
                    tokens={shareTokens}
                    type="share"
                    onTileClick={handleTileClick}
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 mb-4 w-[850px]">
                  <h2 className="text-lg sm:text-xl font-semibold">Top Gainers</h2>
                  <ScrollButtons
                    onScrollLeft={scrollLeft}
                    onScrollRight={scrollRight}
                    disableLeft={!canScrollLeft}
                    disableRight={!canScrollRight}
                  />
                </div>
                <div className="flex justify-start space-x-2 mb-2">
                  <button
                    className={`px-4 py-2 rounded-full border ${
                      activeCapGainers === "Small Cap"
                        ? "text-green-500 border-green-500 bg-[#faf3e0] font-bold"
                        : "bg-green-500 text-[#faf3e0] border-green-500"
                    } hover:bg-green-100`}
                    onClick={() => handleCapClickGainers("Small Cap")}
                  >
                    Small Cap
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full border ${
                      activeCapGainers === "Mid Cap"
                        ? "text-green-500 border-green-500 bg-[#faf3e0] font-bold"
                        : "bg-green-500 text-[#faf3e0] border-green-500"
                    } hover:bg-green-100`}
                    onClick={() => handleCapClickGainers("Mid Cap")}
                  >
                    Mid Cap
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full border ${
                      activeCapGainers === "Large Cap"
                        ? "text-green-500 border-green-500 bg-[#faf3e0] font-bold"
                        : "bg-green-500 text-[#faf3e0] border-green-500"
                    } hover:bg-green-100`}
                    onClick={() => handleCapClickGainers("Large Cap")}
                  >
                    Large Cap
                  </button>
                </div>
                <div className="flex flex-nowrap space-x-4 overflow-x-auto overflow-y-hidden max-w-full h-49 scrollbar-none scroll-smooth w-[850px]">
                  <TokenGrid
                    tokens={shareTokens.filter((token) => token.priceChange > 0)}
                    type="share"
                    onTileClick={handleTileClick}
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 mb-4 w-[850px]">
                  <h2 className="text-lg sm:text-xl font-semibold">Top Losers</h2>
                  <ScrollButtons
                    onScrollLeft={scrollLeft}
                    onScrollRight={scrollRight}
                    disableLeft={!canScrollLeft}
                    disableRight={!canScrollRight}
                  />
                </div>
                <div className="flex justify-start space-x-2 mb-2 ">
                  <button
                    className={`px-4 py-2 rounded-full border ${
                      activeCapLosers === "Small Cap"
                        ? "text-green-500 border-green-500 bg-[#faf3e0] font-bold"
                        : "bg-green-500 text-[#faf3e0] border-green-500"
                    } hover:bg-green-100`}
                    onClick={() => handleCapClickLosers("Small Cap")}
                  >
                    Small Cap
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full border ${
                      activeCapLosers === "Mid Cap"
                        ? "text-green-500 border-green-500 bg-[#faf3e0] font-bold"
                        : "bg-green-500 text-[#faf3e0] border-green-500"
                    } hover:bg-green-100`}
                    onClick={() => handleCapClickLosers("Mid Cap")}
                  >
                    Mid Cap
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full border ${
                      activeCapLosers === "Large Cap"
                        ? "text-green-500 border-green-500 bg-[#faf3e0] font-bold"
                        : "bg-green-500 text-[#faf3e0] border-green-500"
                    } hover:bg-green-100`}
                    onClick={() => handleCapClickLosers("Large Cap")}
                  >
                    Large Cap
                  </button>
                </div>
                <div className="flex flex-nowrap space-x-4 overflow-x-auto overflow-y-hidden max-w-full h-49 scrollbar-none scroll-smooth w-[850px]">
                  <TokenGrid
                    tokens={shareTokens.filter((token) => token.priceChange < 0)}
                    type="share"
                    onTileClick={handleTileClick}
                  />
                </div>
              </div>
            )}

            {activeTokenType === "mutual-funds" && (
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 mb-4 w-[850px]">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    Available Mutual Fund Tokens
                  </h2>
                  <ScrollButtons
                    onScrollLeft={scrollLeft}
                    onScrollRight={scrollRight}
                    disableLeft={!canScrollLeft}
                    disableRight={!canScrollRight}
                  />
                </div>
                <div
                  ref={mutualFundsScrollContainerRef}
                  className="flex flex-nowrap space-x-4 overflow-x-auto overflow-y-hidden max-w-full h-48 scrollbar-none scroll-smooth"
                  onScroll={checkScrollability}
                >
                  <TokenGrid
                    tokens={mutualFundTokens}
                    type="mutual fund"
                    onTileClick={handleTileClick}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tokenisation;