import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from "lucide-react"
// ArrowUpRight

const Card = ({path,title,content,type,icon,colour}) => {
  return (
    <Link href={`/${path}`} className="no-underline text-black" style={{width:"fit-content"}}>
    <div className='flex items-center justify-center flex-col h-[300px] text-black aspect-square border-1 hover:border-blue-50 border-gray-200 box-border hover:bg-blue-50 hover:bg-opacity-40 hover:backdrop-blur-lg transform transition-transform duration-300 ease-in-out hover:scale-105' style={{backgroundColor:colour}}>
        <div className='w-full flex items-center justify-between px-5 py-3'>
            <div className='bg-gray-100 flex items-center justify-center p-1 rounded'><img src={icon.src} alt="" /></div>
            <div className='border-1 border-gray-200 px-3 rounded-2xl bg-white font-semibold'>{type}</div>
        </div>
        <div className='px-5 py-2 text-xl font-semibold w-full text-start'>{title}</div>
        <div className='px-5 py-2 flex-1 font-medium text-start w-full text-gray-500 '>{content.length<=70 ? content : content.slice(0,70)+"..."}</div>
        <div className='px-5 w-full'>
        <div className='py-2 border-2 flex items-center justify-center gap-3 border-gray-200 bg-gray-100 font-semibold text-center rounded-md hover:bg-gray-200 transition-colors mb-5 font-medium w-full'>Learn More <ArrowUpRight/></div>
        </div>
    </div>
    </Link>
  )
}

export default Card