"use client";
import { dataArray } from "@/data/dataArray";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import redirect from "../../../public/rename.svg";
import Link from "next/link";
import Footer from "@/components/Footer";


const Page = () => {
  const { productid } = useParams();
  const [toolData, setToolData] = useState(null);
  const [expanded, setExpanded] = useState({});


  useEffect(() => {
    const matchedTool = dataArray.find((val) => val.id.toString() === productid);
    setToolData(matchedTool);
  }, [productid]);

  if (!toolData) {
    return (
      <>

        <div className="p-10 text-black">
          <h1 className="text-2xl">Tool not found</h1>
        </div>
      </>
    );
  }

  return (
    <div className="h-[100%] w-[100%] overflow-scroll bg-white">

      <div className="w-full p-5 bg-white text-black flex flex-col px-10 py-10 mb-3 md:px-30 lg:px-50 xl:px-60">
        <Link className="hover:underline" href="/">
          <div className="text-sm text-gray-600 cursor-pointer mb-4 ">
            ← Back to Dashboard
          </div>
        </Link>

        <div className="w-full flex flex-col  mt-10 mb-10 md:flex-row items-start md:items-center justify-between mb-6">
          <div className="flex items-center justify-center gap-3 my-2">
            <div className="bg-gray-300 p-2 rounded-md">
              <img src={toolData.icon.src} alt="" />
            </div>
            <h1 className="text-3xl font-semibold">{toolData.title}</h1>
            <div className="px-3 border-2 border-gray-200 rounded-2xl font-semibold">{toolData.type}</div>
          </div>
          <a
            href={toolData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-lg mt-2 w-full md:w-fit bg-black text-white px-4 py-2 rounded-md md:mt-0"
          >
            Open Tool
            <img src={redirect.src} alt="redirect" className="w-5 h-5" />
          </a>
        </div>

        <div className="w-full border p-5 rounded-md mb-10">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-gray-500 text-lg">{toolData.description}</p>
        </div>

        <div className="w-full border p-5 rounded-md mb-10">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-lg">
            {toolData.keyFeatures?.map((feature, index) => (
              <li key={index} className="font-medium text-gray-800">{feature}</li>
            ))}
          </ul>
        </div>
        <div className="w-full border p-5 rounded-md mb-10">
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <p className="text-gray-500 mb-5 font-medium">To get started with Analytics Dashboard, follow these steps:</p>
          <ol className="list-disc list-inside space-y-1 text-gray-700 text-lg  grid grid-cols-1 items-start justify-between md:grid-cols-3  list-none gap-10">
            {
              toolData.working?.map((obj, ind) => {
                return <li key={ind} className="w-full flex items-center justify-center flex-col">
                  <div className="p-2 bg-gray-200 rounded-full mb-3 flex items-center justify-center"><img src={obj.icon.src} alt="" /></div>
                  <div className="font-semibold text-xl mb-3 text-center">{obj.title}</div>
                  {
                    expanded[ind] && obj.content.length>=100 ? (
                      <div className="text-gray-500 text-xs mb-3 text-center">
                        {obj.content}{
                        <span
                          className="font-semibold text-gray-800 my-2 cursor-pointer p-1"
                          onClick={() =>
                            setExpanded((prev) => ({
                              ...prev,
                              [ind]: false,
                            }))
                          }
                        >
                          see less
                        </span>
              }
                      </div>
                    ): !expanded[ind] && obj.content.length>=100 ?  (
                      <div className="text-gray-500  text-xs mb-3 text-center">
                        {obj.content.slice(0, 100)}...{
                        <span
                          className="font-semibold text-gray-800 my-2 cursor-pointer p-1"
                          onClick={() =>
                            setExpanded((prev) => ({
                              ...prev,
                              [ind]: true,
                            }))
                          }
                        >
                          see more
                        </span>
              }
                      </div>
                    ):<div className="w-full text-center font-medium text-sm font-semibold">{obj.content}</div>
                  }

                  
                </li>
              })
            }
          </ol>
        </div>

        <div className="w-full flex items-center justify-between flex-col  md:flex-row pb-10">
          <Link className="w-full md:w-fit" href="/"><div className="px-4 border-1 border-gray-200 py-2 rounded-md cursor-pointer w-full flex items-center justify-center md:w-fit">← Back to Dashboard</div></Link>
          <Link
            href={toolData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg mt-2 w-full md:w-fit bg-black text-white px-4 py-2 flex items-center justify-center rounded-md md:mt-0"
          >
            Open Tool
            <img src={redirect.src} alt="redirect" className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
