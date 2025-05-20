import { Card } from "@/components/ui/card"
import { CheckCircle, Award, BookOpen, Users, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function InstructorSection() {
  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prepare for a career in <span className="text-[#5473fc]">Data Science & AI</span>
          </h2>

          <div className="space-y-6">
            {[
              "Receive professional-level training from Zep Analytics",
              "Demonstrate your proficiency in portfolio-ready projects",
              "Earn an employer-recognized certificate from Zep Analytics",
              "Qualify for in-demand job titles: Machine Learning Engineer, AI Engineer, Data Scientist, Deep Learning Engineer, Gen AI Engineer",
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-[#5473fc] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: <Award className="h-6 w-6" />, title: "Industry Expert", value: "13+ years" },
              { icon: <BookOpen className="h-6 w-6" />, title: "Teaching Experience", value: "8+ years" },
              { icon: <Users className="h-6 w-6" />, title: "Students Taught", value: "10,000+" },
            ].map((stat, i) => (
              <Card key={i} className="p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#5473fc] mb-2">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card className="overflow-hidden border-none shadow-xl">
            <div className="bg-gradient-to-tr from-[#263a92] to-[#000105] p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Course Instructor</h3>
              <h2 className="text-2xl md:text-3xl font-bold">Dr. Satyajit Pattnaik</h2>
              <p className="text-blue-100">Lead Data/AI Consultant</p>
            </div>

            <div className="p-6">
              <div className="flex justify-center -mt-20 mb-6">
                <div className="w-60 h-60 rounded-full border-9 border-white bg-gradient-to-b from-[#263a92] to-[#000105] flex items-center justify-center overflow-hidden">
                  {/* Placeholder for instructor image */}
                  <Image src="https://res.cloudinary.com/do9kp7bzv/image/upload/v1747674738/cnkb4zr9felsyt4mywhr_i5za60.webp" alt="Instructor" width={228} height={128} className="rounded-full" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Meet Your Instructor</h3>

              <p className="text-gray-700 mb-4">
                13+ years experience working in Data Analytics and Data Sciences across different industry verticals
                including telecom, cyber security, insurance, e-commerce etc. Expertised on BI tech stack including
                Power BI & Tableau.
              </p>

              <p className="text-gray-700">
                Analytic experience includes ETL, descriptive and predictive data analysis, data visualization, Machine
                Learning & Deep Learning. Over 8+ years of training & teaching experience into Data Science & Analytics.
              </p>

              <div className="mt-6 flex justify-center">
                <Link href={'https://www.linkedin.com/in/satyajitpattnaik/'} target="_blank" rel="noopener noreferrer"> 
                <button className="bg-blue-500 hover:bg-blue-500/90 text-white text-lg font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center gap-2"> 
                 Linkedin <Linkedin/> 
                </button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
