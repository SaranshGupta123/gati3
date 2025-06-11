"use client"
import Card from "@/components/Card";
import AnimateSecond from "@/motion/AnimateSecond";
import React, { useState } from "react";
import { dataArray } from "@/data/dataArray";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ItemPage = () => {
 
  return (
    <AnimateSecond>
      <Tabs defaultValue="all" className="w-full flex items-center justify-center">
      <div className="w-full px-2 flex items-center justify-center flex-col lg:px-20">
      <TabsList className="mb-6 flex w-full max-w-[400px] justify-center space-x-1 rounded-xl bg-muted p-1 mb-10 text-white">
            <TabsTrigger className="cursor-pointer" value="all">All</TabsTrigger>
            {/* <TabsTrigger className="cursor-pointer p-2" value="aitools">AI Tools</TabsTrigger> */}
            <TabsTrigger className="cursor-pointer p-2" value="aiensuredpipeline">AiEnsured Pipeline</TabsTrigger>
      </TabsList>
     
      <TabsContent value="all" className="mt-0">
        
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
              // colour={val.colour}
            />
          );
        })}
      </div>
      </TabsContent>
      {/* <TabsContent value="aitools">
      <div className="grid grid-cols-1 pb-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
        {dataArray.map((val, ind) => {
          return (
            val.type==="AI"&&
            <Card
              key={ind}
              path={val.id}
              title={val.title}
              content={val.content}
              type={val.type}
              icon={val.icon}
              // colour={val.colour}
            />
          );
        })}
      </div>
      </TabsContent> */}
      <TabsContent value="aiensuredpipeline">
      <div className="grid grid-cols-1 pb-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-5">
        {dataArray.map((val, ind) => {
          return (
            val.type==="Pipeline"&&
            <Card
              key={ind}
              path={val.id}
              title={val.title}
              content={val.content}
              type={val.type}
              icon={val.icon}
              // colour={val.colour}
            />
          );
        })}
      </div>
      </TabsContent>
      </div>
      </Tabs>
    </AnimateSecond>
  );
};

export default ItemPage;
