import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function CertificateSection() {
  return (
    <section className="py-8 px-4 max-w-7xl mx-auto ">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Earn a <span className="text-[#5473fc]">career certificate</span> recognized by top employers
          </h2>

          <p className="text-gray-700 mb-6">
            Add this credential to your LinkedIn profile, resume, or CV to showcase your newly acquired skills to the
            professional community and stand out in the job market.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Certificate highlights:</h3>
            <ul className="space-y-3">
              {[
                "Accredited by Zep Analytics, a leader in AI education",
                "Showcases your proficiency in Data Science & AI",
                "Verifiable digital credential with unique ID",
                "Demonstrates completion of hands-on projects",
                "Recognized by hiring partners across the industry",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="group flex items-center gap-2 text-[#5473fc] font-medium hover:text-blue-800 transition-colors">
            <span>Learn more about our certification process</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex justify-center">
          <div className="relative max-w-md">
            {/* Certificate image with decorative elements */}
            {/* <div className="relative z-10 bg-white rounded-xl shadow-xl border border-gray-200 p-6 transform rotate-1 transition-transform hover:rotate-0 duration-300">
              <div className="border-4 border-blue-100 p-4 rounded-lg">
                <div className="text-center mb-4">
                  <div className="flex justify-center mb-2">
                    <div className="h-16 w-16 bg-blue-500 flex items-center justify-center transform rotate-45">
                      <div className="h-12 w-12 bg-white flex items-center justify-center transform -rotate-45">
                        <span className="text-blue-500 font-bold text-2xl">Z</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">CERTIFICATE OF COMPLETION</h3>
                  <p className="text-gray-500 text-sm">This certifies that</p>
                </div>

                <div className="text-center mb-4">
                  <p className="text-2xl font-bold text-[#5473fc] border-b-2 border-blue-100 pb-2">Your Name</p>
                  <p className="text-gray-700 mt-2">has successfully completed all requirements for the program</p>
                </div>

                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900">Data Science & AI Masters</h4>
                  <p className="text-gray-600">from Python To Gen AI</p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Date Issued</p>
                    <p className="text-gray-700 font-medium">May 19, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Certificate ID</p>
                    <p className="text-gray-700 font-medium">ZEP-DS-AI-25051</p>
                  </div>
                </div>
              </div>
            </div> */}
<Image src={'https://res.cloudinary.com/do9kp7bzv/image/upload/v1747677157/daPwQdkrELtI_GMGzbpHwDa_k6b8wc.webp'} alt="Certificate" width={500} height={500} className="rounded-xl shadow-xl border border-gray-200 p-6 transform rotate-1 transition-transform hover:rotate-0 duration-300 z-10" />
            {/* Decorative elements */}
            <div className="absolute top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-70 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-full opacity-70 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
