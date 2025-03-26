import React from 'react'
import Indices from './components/capAndTradeComponents/Indices'
import Listing from './components/capAndTradeComponents/Listing';
import Footer from './components/Footer';
import Navbar from './components/tokenisationComponents/Navbar';


const CapAndTrade = () => {
  return (
    <div className="bg-[#FAF3E0] min-h-screen">
        <Navbar/>
        <Indices/>
        <Listing/>
        <Footer/>
    </div>
  )
}

export default CapAndTrade;