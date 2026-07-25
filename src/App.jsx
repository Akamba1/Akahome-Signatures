import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Trousers from './pages/Trousers'
import Shirts from './pages/Shirts'
import Suits from './pages/Suits'
import TraditionalWear from './pages/TraditionalWear'

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trousers" element={<Trousers />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/suits" element={<Suits />} />
        <Route path="/traditional-wear" element={<TraditionalWear />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App