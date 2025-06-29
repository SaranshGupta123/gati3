import React from 'react'
import logo from "../../public/Images/logo.png"
import Link from 'next/link'
import { Input } from './ui/input'
import send from "../../public/Images/send.svg"

const Footer = () => {
  return (
    <>
    <div className="w-full flex items-start justify-start gap-5 lg:items-start lg:justify-between flex-col lg:flex-row xl:flex-row px-5 py-3 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-10 flex items-center justify-between py-20 md:px-20 lg:px-30 ">
        <div className='flex items-start justify-start flex-col gap-3 p-3'>
            <div><img className='h-10' src={logo.src} alt="" /></div>
            <div><p>AiEnsured is complete testing suite for AI products.</p></div>
            <div className='grid grid-cols-3 gap-3'>
              <Link href="https://www.facebook.com/people/Aiensured/100083361199410/#" className="border-1 border-white rounded-full p-2 hover:bg-gray-400 cursor-pointer">
                <svg
                  className="bi"
                  width="22"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              <Link href="https://x.com/i/flow/login?redirect_after_login=%2FAiEnsured" className="border-1 border-white rounded-full p-2 hover:bg-gray-400 cursor-pointer">
                <svg
                  className="bi"
                  width="22"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/aiensured/" className="border-1 border-white rounded-full p-2 hover:bg-gray-400 cursor-pointer">
                <svg
                  className="bi"
                  width="22"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/aiensured_com/" className="border-1 border-white rounded-full p-2 hover:bg-gray-400 cursor-pointer">
                <svg
                  className="bi"
                  width="22"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="https://www.youtube.com/c/AiEnsured" className="border-1 border-white rounded-full p-2 hover:bg-gray-400 cursor-pointer">
                <svg
                  className="bi"
                  width="22"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
        </div>
        <div className='flex items-start justify-start flex-col p-3'>
            <h1 className='text-3xl mb-3'>Products</h1>
            <ul className='style-none'>
                <li className='text-lg mb-4'><Link className='hover:underline' href="https://aiensured.com/">Aiensured</Link></li>
                <li className='text-lg mb-4'><Link className='hover:underline' href="https://deepfake.aiensured.com/">Deepfake Detection</Link></li>
                <li className='text-lg mb-4'><Link className='hover:underline' href="http://20.197.35.138:3009/">LLM Integration</Link></li>
                <li className='text-lg mb-4'><Link className='hover:underline' href="https://deepfake.aiensured.com/">GPAI workflows</Link></li>
                <li className='text-lg mb-4'><Link className='hover:underline' href="https://euai.aiensured.com/">EUAI Act</Link></li>
                <li className='text-lg mb-4'><Link className='hover:underline' href="https://deepfake.aiensured.com/">TDM</Link></li>
                {/* <li className='text-lg mb-4'><Link className='hover:underline' href="/">AiEnsured Analytics</Link></li> */}
            </ul>
        </div>
        <div className='flex items-start justify-start flex-col p-3'>
            <h1 className='text-3xl mb-3'>Company</h1>
            <ul className='style-none'>
                <li className='text-lg mb-4'><Link className='hover:underline' href="https://www.aiensured.com/about-us/">About</Link></li>
                <li className='text-lg mb-4'><Link className='hover:underline' href="https://www.aiensured.com/careers/">Careers</Link></li>
                <li className='text-lg mb-4'><Link className='hover:underline' href="https://blog.aiensured.com/">Blog</Link></li>
            </ul>
        </div>
        <div className='flex items-start justify-start flex-col p-3'>
            <div className='text-3xl mb-3'>Subscribe now</div>
            <div className='mb-3'><p>Don't miss our future updates! Get Subscribed Today!</p></div>
            <div className='w-full relative'>
                <Input className="rounded-3xl bg-white text-gray-600 h-[38]"  type="text" placeholder="Your Email here"/>
                <div className='absolute right-0 top-0 bg-purple-700 py-1 px-3 flex items-center justify-center'  style={{borderRadius:"0 20px 20px 0"}}>
                    <img src={send.src} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className="w-full flex items-center justify-between px-5 py-3 bg-black text-white px-10 md:px-20 lg:px-30">
    ©{new Date().getFullYear()}.AiEnsured. All Rights Reserved
    </div>
    </>
  )
}

export default Footer