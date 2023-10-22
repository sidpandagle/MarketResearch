import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom';
import { categories } from '../components/Search'


export default function AllPressRelease() {
  const { category } = useParams();
  const scrollToTop = () => {
    window.scroll(0, 0)
  }
  return (
    <div>
      <div className="mb-6 md:text-3xl text-lg h-[200px] md:h-[300px] font-extrabold flex items-center justify-center bg-gradient  text-white">{'Press Release - ' + category.toUpperCase()}</div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-2 text-center md:pt-10 md:text-left">
          <div className="pb-12 mx-auto max-w-8xl md:pb-10">
            <div className='md:flex'>
              <div className=" md:w-1/4">
                <div className='border rounded-md p-4 sticky top-[20px]'>
                  <div className="mb-2 text-xl font-semibold">By Industry</div>
                  <div className='flex flex-col gap-2'>
                    {categories.map((res, key) => {
                      return (
                        <Link key={key} to={`/press-release/${res}`} onClick={scrollToTop}>
                          <div className={`py-2 text-sm cursor-pointer hover:text-primary ${key < categories.length - 1 && 'border-b-2'}`} key={key}>{res} (6)</div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="mt-12 md:w-3/4 md:ml-8 md:mt-0">
                {/* <div className="px-4 mb-4 text-xl font-semibold">Press Release in {heading}</div> */}
                {[...new Array(10)].map((res, key) => {
                  return (
                    // <Link to='/report' key={key}>
                    //   </Link>
                    <div className='group relative' key={key} >
                      <div className='absolute top-[-10px] right-[20px] py-1 px-4 text-xs bg-primary text-white rounded-sm'>
                        13 Oct 2023
                      </div>
                      <div className='flex flex-col gap-2 p-4 border-2 rounded-md mb-6 cursor-pointer group-hover:bg-slate-50'>
                        <div className="font-semibold group-hover:text-primary group-hover:underline">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </div>
                        <div className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque illum sunt nulla rerum fugiat explicabo rem placeat eius veniam, perspiciatis ducimus eaque commodi ut dolor ipsa animi ex impedit.</div>
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
}
