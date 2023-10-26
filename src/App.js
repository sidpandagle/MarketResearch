import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AllReport from './pages/AllReport';
import Offering from './pages/Offering';
import Report from './pages/Report';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop'
import AllPressRelease from './pages/AllPressRelease';
import PressRelease from './pages/PressRelease';
import BuyNow from './pages/BuyNow';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<AllReport />} />
        <Route path="/all-press-release/:category" element={<AllPressRelease />} />
        <Route path="/press-release/:pressRelease" element={<PressRelease />} />
        <Route path="/offering" element={<Offering />} />
        <Route path="/buy-now" element={<BuyNow />} />
        <Route path="/report" element={<Report />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </ >
  );
}

export default App;
