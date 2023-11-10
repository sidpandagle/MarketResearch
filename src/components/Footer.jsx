import React, { useState } from "react";
import RequestSample from '../components/RequestSample'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';



const Footer = () => {
  const [formOpen, setFormOpen] = useState(false);
  const handleFormOpen = () => setFormOpen(true);
  const handleFormClose = () => setFormOpen(false);
  return (
    <div>
      <div className="text-center text-white bg-slate-800 md:text-left">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="flex flex-col items-center gap-4 p-8 md:items-start md:px-12 md:py-16 md:flex-row border-slate-700">
              <div className="flex font-bold md:w-2/5">
                <img src={'/cmilightlogo.png'} alt="logo" className="flex justify-center "></img>
              </div>
              <div className="w-3/5 text-sm">Harvesting market intelligence to sow success, cultivating strategies for growth in dynamic landscapes. Your compass in the evolving business terrain.</div>
            </div>
            <div className="flex flex-col gap-4 p-8 text-sm border-t md:gap-36 md:flex-row md:px-12 md:py-16 border-slate-600">
              {/* <div>
                <div className="mb-4 text-xl font-bold">Resources</div>
                <div className="mb-2">Why Congruence?</div>
                <div className="mb-2">Customer Service</div>
                <div className="mb-2">Blogs</div>
                <div className="mb-2">Guides</div>
                <div className="mb-2">Webinars</div>
                <div className="mb-2">Workplace Mgmt</div>
                <div className="mb-2">Glossary</div>
              </div> */}
              <div>
                <div className="mb-4 text-xl font-bold">Company</div>
                <div className="mb-2">About Us</div>
                <Link to='/careers'>
                  <div className="mb-2">Careers</div>
                </Link>
                <div className="mb-2">Contact Us</div>
                <div className="mb-2">Partnerships</div>
                <div className="mb-2">Press</div>
              </div>

              <div>
                <div className="mb-4 text-xl font-bold">Connect</div>
                <div className="mb-2">Facebook</div>
                <div className="mb-2">Twitter</div>
                <div className="mb-2">LinkedIn</div>
                <div className="mb-2">Instagram</div>
                <div className="mb-2">YouTube</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-8 border-t md:border-t-0 md:border-l md:w-1/2 md:px-12 md:py-16 border-slate-600">
            <div className="flex flex-col gap-3 text-3xl text-white md:text-3xl ">
              <div>
                Have any custom research requirements?
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 text-black bg-white rounded-full md:mt-8 md:w-3/4">
              <input className="w-full p-2 ml-3 outline-0" placeholder="Enter your email..." />
              <div onClick={handleFormOpen} className="p-4 md:p-4 rounded-full bg-[#6f32be] hover:bg-[#763dc0] scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </svg>

              </div>
            </div>
          </div>
        </div>
        <div className="text-sm border-t border-slate-600">
          <div className="md:h-[300px] flex flex-col md:flex-row md:items-end gap-8 px-12 py-8">
            <div>© 2023 Congruence</div>
            <div>Support</div>
            <div>Privacy</div>
            <div>Terms and Conditions</div>
            <div>Support</div>
            <div>Support</div>
          </div>
        </div>
      </div>
      <Modal
        open={formOpen}
        onClose={handleFormClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className='flex items-center justify-center'>
            <div className=' m-2 py-6 px-6 w-[700px] rounded-md bg-white'>
              <div className="flex justify-between pb-2 mb-2 text-xl font-semibold text-center">
                <div></div>
                <div>Custom Research Requirements</div>
                <svg height={24} width={24} onClick={handleFormClose} className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#1C274C" /> </g></svg>
              </div>
              <RequestSample reportTitle={'User'} enquiryType='Custom Research Requirements' closeModal={handleFormClose} />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Footer;

