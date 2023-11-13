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
import Careers from './pages/Careers';
import AddPressRelease from './pages/admin/AddPressRelease';
import PressReleaseList from './pages/admin/PressReleaseList';
import EditPressRelease from './pages/admin/EditPressRelease';
import SearchList from './pages/SearchList';

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
        <Route path="/press-release/:pressReleaseId" element={<PressRelease />} />
        <Route path="/offering" element={<Offering />} />
        <Route path="/buy-now/:reportId/:buyId" element={<BuyNow />} />
        <Route path="/report/:reportId" element={<Report />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/search/:keyword" element={<SearchList />} />
        <Route path="/report/add" element={<AddReport />} />
        <Route path="/report/list" element={<ReportList />} />
        <Route path="/report/edit/:reportId" element={<EditReport />} />
        <Route path="/press-release/add" element={<AddPressRelease />} />
        <Route path="/press-release/list" element={<PressReleaseList />} />
        <Route path="/press-release/edit/:pressReleaseId" element={<EditPressRelease />} />
      </Routes>
      <ScrollToTop />
      <ToastContainer
        position='top-center'
        theme='light'
        hideProgressBar />
      <Footer />
    </ >
  );
}

export default App;
