import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as React from 'react';
import { Link } from 'react-router-dom'
import RequestSample from '../components/RequestSample'
import ContentLoading from '../components/ContentLoading'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Faq from '../components/Faq';
import { apiUrl, getAbrByCategory, licenses, categories } from '../constants';
import axios from 'axios';
import moment from 'moment';
import SEO from '../components/SEO';

export default function Report() {

  const [selectedTitle, setSelectedTitle] = useState('Description');
  const [report, setReport] = useState({});
  const [relatedReportList, setRelatedReportList] = useState([]);

  const scrollToTop = (value) => {
    setSelectedTitle(value)
    window.scrollTo(0, 0);
  }

  const [discountFormOpen, setDiscountFormOpen] = useState(false);
  const handleDiscountFormOpen = () => setDiscountFormOpen(true);
  const handleDiscountFormClose = () => setDiscountFormOpen(false);

  const [license, setLicense] = useState('Single User License');

  const { reportId } = useParams();

  useEffect(() => {
    axios.get(`${apiUrl}/reports/${reportId}`)
      .then((res) => {
        setBlankImage(res.data.data);
        return res
      })
      .then((res) => {
        getReportImages();
        getRelatedReports(res.data.data.category);
      })
  }, [])

  const getRelatedReports = (categoryValue) => {
    axios.get(`${apiUrl}/reports/category/${categoryValue}?page=1&per_page=3`).then(res => {
      if (res.data.data.length) {
        let filterData = res.data.data.filter(res => res.id !== Number(reportId));
        filterData = filterData.filter((r, i) => i < 2);
        setRelatedReportList(filterData)
      } else {
        setRelatedReportList([])
      }
    })
  };


  const setBlankImage = (reportData) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(reportData.description, "text/html");
    const imgToModify1 = doc.querySelectorAll("img")[0];
    const imgToModify2 = doc.querySelectorAll("img")[1];
    if (imgToModify1) {
      imgToModify1.setAttribute("src", '');
      imgToModify1.style.height = '0px';
    }
    if (imgToModify2) {
      imgToModify2.setAttribute("src", '');
      imgToModify2.style.height = '0px';
    }
    reportData.description = doc.documentElement.outerHTML;
    setReport(reportData)
  }

  const getReportImages = () => {
    axios.get(`${apiUrl}/report_images/RP${reportId}`).then((response) => {
      let img1 = response.data.data.find(res => res.img_name.includes('_1'))?.img_file || '';
      let img2 = response.data.data.find(res => res.img_name.includes('_2'))?.img_file || '';


      const allImages = document.querySelectorAll('.html-content p span img');

      if (allImages.length > 0) {
        allImages[0].src = img1 ? img1 : '';
        allImages[0].style.height = 'auto';

        if (allImages.length > 1) {
          allImages[1].src = img2 ? img2 : '';
          allImages[1].style.height = 'auto';
        }
      }

      // updateImageSrc(img2, img1, reportData)
    })
  }

  // const updateImageSrc = (base64_1, base64_2, reportData) => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(reportData.description, "text/html");

  //   const imgToModify1 = doc.querySelectorAll("img")[0];
  //   if (imgToModify1) {
  //     imgToModify1.setAttribute("src", base64_1);
  //   }

  //   const imgToModify2 = doc.querySelectorAll("img")[1];
  //   if (imgToModify2) {
  //     imgToModify2.setAttribute("src", base64_2);
  //   }

  //   reportData.description = doc.documentElement.outerHTML;

  // }

  return (


    <div className='px-4 py-2 mx-auto md:py-12 max-w-7xl md:pt-0 sm:px-6'>

      <SEO title={report.meta_title} description={report.meta_desc} keywords={report.meta_keyword} name='Congruence Market Research' type='article' />
      {/* <div className='pt-8 pb-4 '> Congruence / {report.category} / <span className='text-primary'> {report.url}</span></div> */}

      <nav className="flex pt-8 pb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link to='/'>
              <div className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <span className='hidden md:block'>Home</span>
              </div>
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
              </svg>
              <Link to={`/category/${categories.find(res => res.name === report.category)?.url}`}>
                <div className="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 ">{report.category}</div>
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
              </svg>
              <span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 ">{report.url}</span>
            </div>
          </li>
        </ol>
      </nav>


      <div className="pb-8 md:flex">
        <div className="mb-4 border rounded-md shadow-lg overflow-clip md:mb-0 md:w-3/4">
          <div className='items-center justify-between md:flex'>
            <div className="w-full">
              {/* <div className='p-4 text-white bg-[#2C3E50]'> */}
              <div className='p-4 font-semibold text-black bg-tertiary'>
                <div className='mb-2 text-justify'>{report.title}</div>
                <div className='justify-end gap-4 py-4 text-sm text-center md:py-2 md:text-left md:flex '>
                  <div className='pr-4 border-black border-r-[1px]'><span>Date:</span> {moment(report.created_date).format('MMMM YYYY')}</div>
                  <div className='pr-4 border-black border-r-[1px]'><span>Report Code:</span> CGN{getAbrByCategory(report.category)}{report.id}</div>
                  <div ><span>Pages:</span> {report.pages}</div>
                </div>
              </div>
              <div className={`${selectedTitle !== 'Request' && 'md:sticky top-0'} p-4 relative justify-between gap-2 bg-white md:flex`}>
                <div onClick={() => scrollToTop('Description')} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Description' ? 'font-bold bg-primary text-white' : ''}`}>Description</div>
                <div onClick={() => scrollToTop('Table')} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Table' ? 'font-bold bg-primary text-white' : ''}`}>Table Of Content</div>
                <div onClick={() => scrollToTop('Highlights')} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Highlights' ? 'font-bold bg-primary text-white' : ''}`}>Highlights</div>
                <div onClick={() => scrollToTop('Methodology')} className={`md:w-1/4 py-3 md:mb-0 mb-4 duration-200 text-sm flex justify-center items-center border rounded-sm cursor-pointer  ${selectedTitle === 'Methodology' ? 'font-bold bg-primary text-white' : ''}`}>Methodology</div>
                <div onClick={() => scrollToTop('Request')} className={`codepen-button md:w-1/4 w-full md:mb-0 mb-4 text-sm box-border relative z-30 flex justify-center items-center border rounded-sm cursor-pointer ${selectedTitle === 'Request' ? 'font-bold' : ''}`}>
                  <span className='py-2 text-center'>Request Sample</span>
                </div>
              </div>
              <div className='px-4'>
                {selectedTitle === 'Description' &&
                  <div>
                    {!report.description && <ContentLoading />}
                    <div className='html-content' dangerouslySetInnerHTML={{ __html: report.description }}></div>
                    {report.description && <Faq faqs={JSON.parse(report.faqs)} />}
                  </div>
                }
                {selectedTitle === 'Table' &&
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: report.toc }}></div>
                  </div>
                }
                {selectedTitle === 'Highlights' &&
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: report.highlights }}></div>
                  </div>
                }
                {selectedTitle === 'Methodology' &&
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: report.methodology }}></div>
                  </div>
                }
                {selectedTitle === 'Request' &&
                  <div>
                    <RequestSample reportTitle={report.url} enquiryType='Request Sample' closeModal={() => { }} />
                  </div>
                }
              </div>
            </div>
          </div >

        </div >
        <div className="relative md:pl-4 md:w-1/4">
          <div className='sticky top-[20px] flex flex-col gap-4 '>
            <div className='flex flex-col gap-2 p-4 border rounded-md shadow-lg '>
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
                <Link to={`/buy-now/${reportId}/${licenses.find(res => res.license === license)?.id}`} className="inline-flex items-center justify-center font-semibold codepen-button">
                  <span className='flex items-center justify-center py-2 text-center'>
                    Buy Now
                  </span>
                </Link>
                <button type="button" onClick={handleDiscountFormOpen} className="inline-flex items-center justify-center px-8 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                  Request Discount
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-2 border rounded-md shadow-lg'>
              <div>
                <div className='px-4 py-2'>Related Reports</div>
                <div className=''>
                  {
                    relatedReportList.map((r, i) => {
                      return (
                        <div key={i} className='flex flex-col px-4 py-2 border-t-2 cursor-pointer group hover:bg-slate-100'>
                          <div className="font-bold group-hover:text-primary">{r.url}</div>
                          <div className="text-sm">{r.summary.split(' ').filter((s, j) => j < 15).join(' ')}...</div>
                        </div>
                      )
                    })
                  }
                  {relatedReportList.length === 0
                    &&
                    <div className='flex flex-col px-4 py-2 border-t-2 cursor-pointer group hover:bg-slate-100'>
                      <div className="p-4 font-bold text-center group-hover:text-primary">No Report Found</div>
                      {/* <div className="text-sm">{r.summary.split(' ').filter((s, j) => j < 15).join(' ')}...</div> */}
                    </div>
                  }
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
              <RequestSample reportTitle={report.url} enquiryType='Request Discount' closeModal={handleDiscountFormClose} />
            </div>
          </div>
        </Box>
      </Modal>
    </div >
  )
}
