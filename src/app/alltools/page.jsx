import React from 'react'
import Card from '@/components/Card';
import { dataArray } from '@/data/dataArray';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className="h-[100%] w-[100%] overflow-scroll bg-white">
        <div className='py-10 w-full flex items-center justify-center ' >
         <div className="grid grid-cols-1 pb-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-5">
        {dataArray.map((val, ind) => {
          return (
            <Card
              key={ind}
              path={val.id}
              title={val.title}
              content={val.content}
              type={val.type}
              icon={val.icon}
            />
          );
        })}
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page