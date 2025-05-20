'use client'
import CertificateSection from "@/components/Certificate"
import CoursePage from "@/components/Hero"
import InstructorSection from "@/components/Instrutor"
import TopCompaniesSection from "@/components/TopCompaniesSection"
import CourseDetailsSection from "@/components/Coursedetail"
import ZepresumeCTASection from "@/components/Cta-zepresume"
import SyllabusSection from "@/components/Syllabus"
import ContactFormSection from "@/components/Contact"
import Footer from "@/components/Footer"
import { useState } from "react"
import CourseDialog from "@/components/course-dialog"

export default function Home() {
    const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogTab, setDialogTab] = useState("course")
  return (
    <main className="">
      <CoursePage/>
      <ZepresumeCTASection/>
      <CourseDetailsSection
       openCourseDialog={() => {
                setDialogTab("course")
                setDialogOpen(true)
              }}
      />
      <SyllabusSection/>  
          <TopCompaniesSection
              openEnterpriseDialog={() => {
                setDialogTab("enterprise")
                setDialogOpen(true)
              }}
            />
      <InstructorSection/>
      <CertificateSection/>
      <ContactFormSection/>
      <Footer/>
       <CourseDialog open={dialogOpen} onOpenChange={setDialogOpen} defaultTab={dialogTab} />
    </main>
  )
}
