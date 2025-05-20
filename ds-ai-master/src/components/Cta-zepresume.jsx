"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function ZepresumeCTASection() {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)
  const [isVideoStarted, setIsVideoStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !isVideoStarted) {
            // Start playing video when section comes into view
            videoRef.current.play()
            setIsVideoStarted(true)
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVideoStarted])

  const handleVideoEnded = () => {
    // Video will naturally pause at the end
    // You can add additional logic here if needed
    console.log("Video ended")
  }

  return (
    <section 
      ref={sectionRef}
      className="py-2 px-24 bg-gradient-to-r from-blue-50 to-indigo-50 max-w-7xl mx-auto rounded-xl shadow-lg mt-12"
    >
      <div className="container mx-auto scale-90">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Boost your <span className="text-[#5473fc]">job search productivity</span> with ZepResume
              </h2>
              <p className="text-gray-700 text-lg">
                Our AI-powered tools help you prepare, apply, and succeed in your job search. Start using our app today
                and take your career to the next level.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#5473fc]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700">AI-powered interview preparation with real-time feedback</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#5473fc]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700">Personalized resume scoring and improvement recommendations</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#5473fc]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700">... & more</p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="https://zepresume.com/" >
              <Button className="bg-[#5473fc] hover:bg-[#5473fce1] hover:shadow-2xl text-white px-6 py-6 h-auto text-lg rounded-lg">
                Try ZepResume for free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-2">Free plan available. No credit card required.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden  ">
            {/* <video
              ref={videoRef}
              className="w-full h-auto"
              muted
              playsInline
              onEnded={handleVideoEnded}
              poster="mockimg.png"
            > */}
              {/* <source src="/zepresumemockup.mp4" type="video/mp4" /> */}
              {/* <source src="/path/to/your/video.webm" type="video/webm" /> */}
              {/* Fallback for browsers that don't support video */}
              <img
                src="/mockimg.png"
                alt="ZepResume AI tools interface showing various features like AI Interview Assistant, Resume Scorer, and Cover Letter Generator"
                className="w-full h-auto  scale-x-[-1] "
              />
            {/* </video> */}
          </div>
        </div>
      </div>
    </section>
  )
}