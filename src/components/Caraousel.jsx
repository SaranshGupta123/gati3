"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


const heroContent = [
 {
    id: 1,
    title: "Large Language Models",
    subtitle: "Powering Next-Gen Conversations",
    description: "LLMs are AI systems trained on massive text data to understand and generate human-like language.",
    ctaText: "Explore LLMs",
    ctaLink: "#llm-section",
    // image: llmBanner, // replace with actual image import or path
    url: "llm"
  },
  {
    id: 2,
    title: "Deepfake",
    subtitle: "AI-Generated Media and Its Impact",
    description: "Deepfakes use AI to manipulate video, audio, or images—raising both innovative possibilities and critical concerns in media authenticity.",
    ctaText: "Explore Deepfakes",
    ctaLink: "#deepfake-section",
    // image: deepfakeBanner, // replace with actual image import or path
    url: "deepfake"
  },
  {
    id: 3,
    title: "EUAI Act",
    subtitle: "Regulating AI for a Safer Future",
    description: "A demo and awareness platform aligned with the EU AI Act, showcasing AI transparency and deepfake detection.",
    ctaText: "Explore the EUAI Act",
    ctaLink: "#euai-section",
    // image: euaiBanner, // replace with actual image import or path
    url: "euai"
  },
  {
    id: 4,
    title: "Image Pipelines",
    subtitle: "For Vision-Based AI Models",
    description: "Image pipelines simulate realistic scenes using 3D tools like Blender to create and label synthetic datasets for computer vision tasks.",
    ctaText: "Explore More",
    ctaLink: "#image-pipeline-section",
    // image: imagePipelineBanner, // replace with actual image import or path
    url: "imagepipeline"
  },
  {
    id: 5,
    title: "Test Data Management (TDM)",
    subtitle: "High-Quality Synthetic Data for Testing",
    description: "AI-based platform for generating synthetic datasets to simulate real-world scenarios and improve model training",
    ctaText: "Explore TDM",
    ctaLink: "#tdm-section",
    // image: tdmBanner,  // replace with actual image import or path
    url: "tdm"
  }
]

export default function AnimatedHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentContent = heroContent[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    
    <div className="relative h-[55vh] md:h-[80vh] w-full overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800">
    
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiAxNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
      </div>

      <div className="container mx-auto h-full flex flex-col md:flex-row items-center">
       
        <div className="w-full md:w-1/2 px-6 py-12 md:py-0 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentContent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-4"
              >
                Featured
              </motion.span>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold mb-2"
              >
                {currentContent.title}
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-medium text-white/80 mb-6"
              >
                {currentContent.subtitle}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-m text-white/70 mb-8 max-w-md"
              >
                {currentContent.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                 <Link href={currentContent.url}>
                <Button size="lg" className="group cursor-pointer" url={currentContent.ctaLink}>
                    {currentContent.ctaText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          
          <div className="flex mt-12 gap-3">
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all cursor-pointer hover:bg-white ${index !== currentIndex && "hover:scale-200"} ${
                  index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    
  )
}
