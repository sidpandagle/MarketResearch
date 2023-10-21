import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryReportList from './pages/CategoryReportList';
import Offering from './pages/Offering';
import PressRelease from './pages/PressRelease';
import Report from './pages/Report';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryReportList />} />
        <Route path="/press-release/:category" element={<PressRelease />} />
        <Route path="/offering" element={<Offering />} />
        <Route path="/report" element={<Report />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
