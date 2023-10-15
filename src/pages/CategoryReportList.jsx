import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../components/Search'

const CategoryReportList = () => {
  const { category } = useParams();
  return (
    <div>
      <div className="mb-6 md:text-3xl text-lg h-[200px] md:h-[300px] font-extrabold flex items-center justify-center bg-gradient  text-white">{category.toUpperCase()}</div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-2 md:pt-10 text-center md:text-left">
          <div className="max-w-8xl pb-12 mx-auto md:pb-10">
            <div className='md:flex'>
              <div className="md:w-1/4">
                <div className='sticky top-[20px]'>
                  <div className="text-xl font-semibold mb-4">Reports by Industry</div>
                  <div className='flex flex-col gap-2'>
                    {categories.map((res, key) => {
                      return (
                        <div className=' border-b-2 py-2 md:mr-8 hover:text-primary cursor-pointer text-sm' key={key}>{res} (6)</div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="md:w-3/4 md:ml-8 mt-12 md:mt-0">
                <div className="text-xl px-4 font-semibold mb-4">Research Reports in {category}</div>
                {[...new Array(10)].map((res, key) => {
                  return (
                    <div className='group' key={key}>
                      <div className=' border-b-2 p-4 flex flex-col gap-2 cursor-pointer  hover:bg-slate-100'>
                        <div className="font-semibold group-hover:text-primary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </div>
                        <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque illum sunt nulla rerum fugiat explicabo rem placeat eius veniam, perspiciatis ducimus eaque commodi ut dolor ipsa animi ex impedit.</div>
                        <div className=" text-sm">October 2023</div>
                      </div>
                    </div>
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

export default CategoryReportList;
