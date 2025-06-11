"use client"
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mid from "@/components/Mid";
import ItemPage from "@/views/ItemPage";
import { Button } from "@/components/ui/button";
import { ChevronRight} from "lucide-react"
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";




export default function Home() {
  return (
      <div className="h-[100%] w-[100%] overflow-scroll ">
        
        <Hero/>
        <Mid/> 
        <ItemPage/>
        <Footer/>
      </div>
  );
}
