"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import CourseDialog from "@/components/course-dialog"
import { useState } from "react"


export default function CoursePage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogTab, setDialogTab] = useState("course")

  return (
    <div className="relative w-full md:h-screen overflow-hidden bg-white">
      {/* Background image fixed at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img%20hero-fUDiwjC040KLi48kA8TR2Q8D438N2o.svg"
          alt="Hero background"
          width={1080}
          height={400}
          className="mx-auto"
        />
      </div>

      {/* Content positioned above the background image */}
      <div className="container h-screen relative z-10 mx-auto px-4 py-16 ">
        <div className="flex flex-col items-center text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zepanalytics-6l2BNCdob2x3hBdbRcioUmeBHFI0Uq.png"
            alt="ZEP Logo"
            width={150}
            height={60}
            className="mb-8"
          />

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-[#5473fc]">Data Science & AI Masters</span>
            <span className="block mt-2">form Python To Gen AI</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-center text-xl text-gray-600">
            Our technology-driven courses provide comprehensive training in programming and data analytics. Designed for
            all skill levels with hands-on projects and expert guidance.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              className="bg-[#5473fc] hover:bg-[#5473fcef] hover:shadow-2xl text-white px-8 py-6 text-lg"
              onClick={() => {
                setDialogTab("course")
                setDialogOpen(true)
              }}
            >
              Get started
            </Button>
            {/* <Button
              variant="outline"
              className="border-[#5473fc] text-[#5473fc] hover:bg-[#5473fc]/10 px-8 py-6 text-lg hover:shadow-2xl"
            >
              Browse courses
            </Button> */}
          </div>
        </div>
      </div>

      {/* Top Companies Section */}
  

      {/* Course Dialog */}
      <CourseDialog open={dialogOpen} onOpenChange={setDialogOpen} defaultTab={dialogTab} />
    </div>
  )
}
