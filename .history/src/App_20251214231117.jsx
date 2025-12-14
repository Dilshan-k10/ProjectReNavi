import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AdmissionAnalyzer from './pages/AddmissionAnalyzer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/analyze" element={<AdmissionAnalyzer />} />
      </Routes>
    </Router>
  )
}

export default App
