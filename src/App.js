import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AllReport from './pages/AllReport';
import Offering from './pages/Offering';
import Report from './pages/Report';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop'
import AllPressRelease from './pages/AllPressRelease';
import PressRelease from './pages/PressRelease';
import BuyNow from './pages/BuyNow';
import AddReport from './pages/admin/AddReport';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReportList from './pages/admin/ReportList';
import EditReport from './pages/admin/EditReport';

export const notifySuccess = (value) => toast.success(value);
export const notifyWarning = (value) => toast.warning(value);
export const notifyError = (value) => toast.error(value);
export const notifyInfo = (value) => toast.info(value);

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<AllReport />} />
        <Route path="/all-press-release/:categoryId" element={<AllPressRelease />} />
        <Route path="/press-release/:pressRelease" element={<PressRelease />} />
        <Route path="/offering" element={<Offering />} />
        <Route path="/buy-now/:reportId/:buyId" element={<BuyNow />} />
        <Route path="/report/:reportId" element={<Report />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/report/add" element={<AddReport />} />
        <Route path="/report/list" element={<ReportList />} />
        <Route path="/report/edit/:reportId" element={<EditReport />} />
      </Routes>
      <ScrollToTop />
      <ToastContainer
        theme='light'
        hideProgressBar />
      <Footer />
    </ >
  );
}

export default App;
