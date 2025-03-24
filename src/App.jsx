import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CapAndTrade from './CapAndTrade'
import Tokenisation from './Tokenisation'



const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/capAndTrade" element={<CapAndTrade />} />
          <Route path="/Tokenisation" element={<Tokenisation />} />
        </Routes>
      </div>
  )
}

export default App
