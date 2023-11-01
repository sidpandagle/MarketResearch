import { useState } from 'react'
import { Link } from 'react-router-dom'
import RequestSample from '../components/RequestSample'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Faq from '../components/Faq';
import { licenses, report } from '../constants';

export default function Report() {

  const [selectedTitle, setSelectedTitle] = useState('Description');

  const scrollToTop = (value) => {
    setSelectedTitle(value)
    window.scrollTo(0, 0);
  }

  const [discountFormOpen, setDiscountFormOpen] = useState(false);
  const handleDiscountFormOpen = () => setDiscountFormOpen(true);
  const handleDiscountFormClose = () => setDiscountFormOpen(false);

  const [license, setLicense] = useState('Single User License');


  return (

    <div className='px-4 py-2 mx-auto md:py-12 max-w-7xl md:pt-0 sm:px-6'>

      <div className='pt-8 pb-4'> Congruence / Report / Information & Communication Technology / Workforce Analytics Market</div>
      <div className="pb-8 md:flex">
        <div className="p-4 mb-4 border rounded-md md:mb-0 md:w-3/4">
          <div className="head">
            <div className='items-center justify-between md:flex'>
              <div className="w-full">
                <div className='mb-2 text-lg font-semibold'>{report.title}</div>
                <div className='gap-4 py-4 text-sm text-center bg-white md:py-2 md:text-left md:flex'>
                  <div>Date: {report.date}</div>
                  <div>Report Code: CGN/ICT/{report.id}</div>
                  <div>Pages: {report.pages}</div>
                </div>
                <div className={`${selectedTitle !== 'Request' && 'md:sticky top-0'} relative justify-between gap-2 py-4 bg-white md:flex`}>
                  <div onClick={() => scrollToTop('Description')} className={`md:w-1/4 p-2 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Description' ? 'font-bold bg-slate-500 text-white' : ''}`}>Description</div>
                  <div onClick={() => scrollToTop('Table')} className={`md:w-1/4 p-2 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Table' ? 'font-bold bg-slate-500 text-white' : ''}`}>Table Of Content</div>
                  <div onClick={() => scrollToTop('Highlights')} className={`md:w-1/4 p-2 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Highlights' ? 'font-bold bg-slate-500 text-white' : ''}`}>Highlights</div>
                  <div onClick={() => scrollToTop('Methodology')} className={`md:w-1/4 p-2 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Methodology' ? 'font-bold bg-slate-500 text-white' : ''}`}>Methodology</div>
                  <div onClick={() => scrollToTop('Request')} className={`md:w-1/4 w-full p-2 md:mb-0 mb-4 text-sm box-border relative z-30 inline-flex items-center justify-center  px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none ${selectedTitle === 'Request' ? 'font-bold' : ''}`}>
                    {/* Request Sample */}
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
                    <span className="relative z-20 flex items-center text-sm">
                      Request Sample
                    </span>
                  </div>
                </div>
                <div className={`py-4  ${selectedTitle !== 'Description' && 'hidden'}`}>
                  <div className='html-content' dangerouslySetInnerHTML={{ __html: report.description }}></div>
                  <Faq />
                </div>
                <div className={`py-4 flex justify-center overflow-clip h-[200vh] ${selectedTitle !== 'Table' && 'hidden'} `}>{report.toc}</div>
                <div className={`py-4 flex justify-center overflow-clip h-[200vh] ${selectedTitle !== 'Highlights' && 'hidden'} `}>{report.hightlights}</div>
                <div className={`py-4 flex justify-center overflow-clip h-[200vh] ${selectedTitle !== 'Methodology' && 'hidden'} `}>{report.methodology}</div>
                <div className={`py-4 ${selectedTitle !== 'Request' && 'hidden'} `}>
                  <RequestSample reportTitle={report.title} enquiryType='Request Sample' closeModal={()=>{}} />
                </div>
              </div>
            </div >
          </div >
        </div >
        <div className="relative md:pl-4 md:w-1/4">
          <div className='sticky top-[20px] flex flex-col gap-4 '>
            <div className='flex flex-col gap-2 p-4 border rounded-md bg-slate-50'>
              {
                licenses.map((res, i) => {
                  return (
                    <div key={i} onClick={() => setLicense(res.license)} className={`flex justify-between cursor-default hover:text-primary ${license == res.license && 'text-primary'} p-1 rounded-sm`}>
                      <div className='flex gap-2'>
                        {res.license}</div>
                      <div className='font-bold'>{res.price}</div>
                    </div>
                  )
                })
              }
              <div className='flex flex-col gap-2 mt-2'>
                {/* <button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Buy Now</button>
                <button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Inquiry Before Buying</button> */}
                <Link to={`/buy-now/1/${licenses.find(res => res.license === license).id}`} className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                  Buy Now
                </Link>
                <button type="button" onClick={handleDiscountFormOpen} className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                  Request Discount
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-2 border rounded-md'>
              <div>
                <div className='px-4 py-2'>Related Reports</div>
                <div className=''>
                  <div className='flex flex-col px-4 py-2 border-t-2 cursor-pointer group hover:bg-slate-100'>
                    <div className="font-bold group-hover:text-primary">Workforce Analytics Market</div>
                    <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse  ipsum dolor sit amet consectetur adipisicing elit. Esse</div>
                  </div>
                  <div className='flex flex-col px-4 py-2 border-t-2 cursor-pointer group hover:bg-slate-100'>
                    <div className="font-bold group-hover:text-primary">Workforce Analytics Market</div>
                    <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse  ipsum dolor sit amet consectetur adipisicing elit. Esse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Modal
        open={discountFormOpen}
        onClose={handleDiscountFormClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className='flex items-center justify-center'>
            <div className=' m-2 py-6 px-10 w-[700px] rounded-md bg-white'>
              <div className="pb-2 mb-2 text-xl font-semibold text-center">Request Discount</div>
              <RequestSample reportTitle={report.title} enquiryType='Request Discount' closeModal={handleDiscountFormClose} />
            </div>
          </div>
        </Box>
      </Modal>
    </div >
  )
}
