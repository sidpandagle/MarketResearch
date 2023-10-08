import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryReportList = () => {
  const { category } = useParams();

  return (
    <div className='container '>
      <div className='flex flex-wrap h-[20vh] text-3xl items-center justify-center mx-4'>
        <p>Category : {category}</p>
      </div>
    </div>
  );
};

export default CategoryReportList;
