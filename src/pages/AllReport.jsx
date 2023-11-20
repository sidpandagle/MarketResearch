import {
  useEffect, useState
} from 'react';
import { Link, useParams } from 'react-router-dom';
import { apiUrl, categories } from '../constants'
import axios from 'axios';
import moment from 'moment';
import { notifyError } from '../App';

const AllReport = () => {

  const { categoryUrl } = useParams();
  const [category, setCategory] = useState({});
  const [categoryList, setCategoryList] = useState([]);
  const [reportList, setReportList] = useState([]);

  const scrollToTop = () => {
    window.scroll(0, 0)
  }

  useEffect(() => {
    setCategory(categories.find(res => res.url === categoryUrl))
    axios.get(`${apiUrl}/reports/category/category_count`).then(res => {
      let categoryList = res.data.data.map(res => {
        res.id = categories.find(result => result.name === res.category).id;
        res.back_cover = categories.find(result => result.name === res.category).back_cover;
        return res;
      })
      setCategoryList(categoryList)
    })
    if (categoryUrl) {
      axios.get(`${apiUrl}/reports/category/${categories.find(res => res.url === categoryUrl).name}?page=1&per_page=100`).then(res => {
        let reportList = res.data.data;
        if (reportList.length) {
          setReportList(reportList)
        } else {
          setReportList([])
          notifyError('No reports for this category')
        }
      })
    }
  }, [categoryUrl]);

  return (
    <div>
      <div className="mb-6 md:text-3xl overflow-clip relative text-lg h-[200px] md:h-[300px] font-extrabold flex items-center justify-center  text-white">
        <img loading="lazy" className='absolute flex items-center justify-center w-auto h-auto md:object-contain md:w-full' src={category.back_cover} alt="" />
        <div className='z-10'>
          {category.name && category.name.toUpperCase()}
        </div>
      </div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-2 text-center md:pt-10 md:text-left">
          <div className="pb-12 mx-auto max-w-8xl md:pb-10">
            <div className='md:flex'>
              <div className="md:w-[28%]">
                <div className='border rounded-md p-4 sticky top-[20px]'>
                  <div className="mb-2 text-xl font-semibold">Reports by Industry</div>
                  <div className='flex flex-col gap-2'>
                    {categoryList.map((res, key) => {
                      return (
                        <Link key={key} to={`/category/${categories.find(r => r.name === res.category)?.url}`} onClick={scrollToTop}>
                          <div className={`py-2 text-sm cursor-pointer hover:text-primary ${res.category === category.namve && 'text-primary'} ${key < categoryList.length - 1 && 'border-b-2'}`} key={key}>{res.category} ({res.count})</div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="mt-12 md:w-3/4 md:ml-8 md:mt-0">
                <div className="px-4 mb-4 text-xl font-semibold">Research Reports in {category.name}</div>
                {reportList.map((res, key) => {
                  return (
                    <Link to={`/industry-report/${res.url.split(' ').join('-').toLowerCase()}/${res.id}`} key={key}>
                      <div className='group' >
                        <div className='flex flex-col gap-2 p-4 border-b-2 cursor-pointer group-hover:bg-slate-50'>
                          <div className="font-semibold group-hover:text-primary group-hover:underline">{res.title.split('').filter((res, i) => i < 160).join('')}... </div>
                          <div className="">{res.summary}...</div>
                          <div className='flex gap-4 text-sm'>
                            <div className='pr-4 border-r-2 border-gray'>{moment(res.created_date).format('MMMM YYYY')}</div>
                            <div className='pr-4 border-gray'>{res.pages} Pages</div>
                            {/* <div className='pr-4'>October 2023</div> */}
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReport;
