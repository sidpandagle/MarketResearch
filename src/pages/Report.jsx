import React, { Component, useState } from 'react'
import ReportTabs from '../components/ReportTabs'
import Inquiry from '../components/Inquiry'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 400,
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};


export default function Report() {

  const [selectedTitle, setSelectedTitle] = useState('Description');

  const selectTitleMoveUp = (value) => {
    setSelectedTitle(value)
    window.scrollTo(0, 0);
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (

    <div className='px-4 py-2 mx-auto md:py-12 max-w-7xl md:pt-0 sm:px-6'>

      <div className='pt-8 pb-4'> Congruence / Report / Information & Communication Technology / Workforce Analytics Market</div>
      <div className="pb-8 md:flex">
        <div className="p-4 mb-4 border rounded-md md:mb-0 md:w-3/4">
          <div className="head">
            <div className='items-center justify-between md:flex'>
              <div className="w-full">
                <div className='mb-2 text-lg font-semibold'>Workforce Analytics Market Size, Share & Segmentation By Component (Solution, Service), By Organization Size (Large Enterprises, SMEs), By Deployment (On-Premise, Cloud), By Industry Vertical (BFSI, Manufacturing, Healthcare, Government, Retail, IT and Telecom, Education, Others), By Region and Global Forecast 2023-2030</div>
                <div className='gap-4 py-4 text-sm text-center bg-white md:py-2 md:text-left md:flex'>
                  <div>Date: September 2023</div>
                  <div>Report Code: SNS/ICT/3982</div>
                  <div>Pages: 138</div>
                </div>
                <div className={`${selectedTitle !== 'Request' && 'sticky top-0'} justify-between gap-2 py-4 bg-white md:flex`}>
                  <div onClick={() => selectTitleMoveUp('Description')} className={`md:w-1/4 p-2 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Description' ? 'font-bold bg-slate-500 text-white' : ''}`}>Description</div>
                  <div onClick={() => selectTitleMoveUp('Table')} className={`md:w-1/4 p-2 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Table' ? 'font-bold bg-slate-500 text-white' : ''}`}>Table Of Content</div>
                  <div onClick={() => selectTitleMoveUp('Highlights')} className={`md:w-1/4 p-2 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Highlights' ? 'font-bold bg-slate-500 text-white' : ''}`}>Highlights</div>
                  <div onClick={() => selectTitleMoveUp('Methodology')} className={`md:w-1/4 p-2 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Methodology' ? 'font-bold bg-slate-500 text-white' : ''}`}>Methodology</div>
                  <div onClick={() => selectTitleMoveUp('Request')} className={`md:w-1/4 p-2 md:mb-0 mb-4 text-sm box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none ${selectedTitle === 'Request' ? 'font-bold' : ''}`}>
                    {/* Request Sample */}
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
                    <span className="relative z-20 flex items-center text-sm">
                      Request Sample
                    </span>


                  </div>
                </div>
                <div className={`py-4 flex justify-center overflow-clip h-[200vh] ${selectedTitle !== 'Description' && 'hidden'}`}>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia deserunt itaque! Facere asperiores rerum eveniet nemo sed at dolorum numquam consectetur voluptate, soluta laboriosam veniam a veritatis nesciunt ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates sapiente ullam labore, tenetur explicabo in autem facere? Veniam ducimus ratione impedit soluta voluptates laudantium doloribus necessitatibus vero itaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur et corporis deserunt, enim ex neque quis quia eius nesciunt ducimus dolore sit, tenetur provident a nihil rerum velit? Cum!</div>
                <div className={`py-4 flex justify-center overflow-clip h-[200vh] ${selectedTitle !== 'Table' && 'hidden'}`}>Table</div>
                <div className={`py-4 flex justify-center overflow-clip h-[200vh] ${selectedTitle !== 'Highlights' && 'hidden'}`}>Highlights</div>
                <div className={`py-4 flex justify-center overflow-clip h-[200vh] ${selectedTitle !== 'Methodology' && 'hidden'}`}>Methodology</div>
                <div className={`py-4 ${selectedTitle !== 'Request' && 'hidden'}`}>
                  <Inquiry />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:pl-4 md:w-1/4">
          <div className='sticky top-[20px] flex flex-col gap-4 '>
            <div className='flex flex-col gap-2 p-4 border rounded-md'>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  Single User License</div>
                <div>$4650</div>
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  Enterprise User License</div>
                <div>$6450</div>
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  Excel Datasheet</div>
                <div>$2325</div>
              </div>
              <div className='flex flex-col gap-2 mt-2'>
                {/* <button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Buy Now</button>
                <button className='w-full py-2 font-semibold text-white bg-blue-500 rounded-md text-md'>Inquiry Before Buying</button> */}
                <button type="button" onClick={handleOpen} className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                  Buy Now
                </button>
                <button type="button" onClick={handleOpen} className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                  Request Discount
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-2 border rounded-md'>
              <div>
                <div className='px-4 py-2'>Related Reports</div>
                <div className=''>
                  <div className='flex flex-col px-4 py-2 border-b-2 cursor-pointer group hover:bg-slate-100'>
                    <div className="font-bold group-hover:text-primary">Workforce Analytics Market</div>
                    <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse  ipsum dolor sit amet consectetur adipisicing elit. Esse</div>
                  </div>
                  <div className='flex flex-col px-4 py-2 border-b-2 cursor-pointer group hover:bg-slate-100'>
                    <div className="font-bold group-hover:text-primary">Workforce Analytics Market</div>
                    <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse  ipsum dolor sit amet consectetur adipisicing elit. Esse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          test
        </Box>
      </Modal>
    </div>
  )
}
