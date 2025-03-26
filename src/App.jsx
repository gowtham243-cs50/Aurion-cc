import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CapAndTrade from './CapAndTrade'
import Tokenisation from './Tokenisation'
import ProjectDetails from './ProjectDetails'

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/capAndTrade" element={<CapAndTrade />} />
          <Route path="/Tokenisation" element={<Tokenisation />} />
          <Route path="/project-details" element={<ProjectDetails />} />
        </Routes>
      </div>
  )
}

export default App
