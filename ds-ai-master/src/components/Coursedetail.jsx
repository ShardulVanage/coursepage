import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, Target, Star } from "lucide-react"

export default function CourseDetailsSection({openCourseDialog}) {
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Everything you need to <span className="text-[#5473fc]">master Data Science & AI</span>
            </h2>

            {/* What's Included */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Interview Prep Videos",
                  "Industry level Projects",
                  "24/7 Chat support",
                  "Job Assistance",
                  "Mock Interviews",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What You'll Learn */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
              <div className="space-y-4">
                {[
                  "Build a solid foundation in Python programming to effectively implement AI concepts and applications.",
                  "Learn how transformer models revolutionize NLP tasks, and how to leverage them for various applications.",
                  "Learn how to utilize vector databases for efficient storage and retrieval of embeddings in AI projects.",
                  "Explore the essentials of Large Language Models (LLMs) and their applications in generative tasks.",
                  "Learn how Machine Learning & Deep Learning works",
                  "Gain hands-on experience with Retrieval-Augmented Generation (RAG) and Langchain for building advanced AI applications.",
                 
                 
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="relative mt-1.5">
                      <div className="h-3 w-3 rounded-full bg-blue-500 group-hover:bg-[#5473fc] transition-colors"></div>
                      {i < 7 && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-5 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                      )}
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Course Info Cards */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#5473fc] mb-2">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">120+ hours</h3>
                    <p className="text-gray-600">of content</p>
                  </div>
                  <p className="text-gray-700 mt-auto">Earn a career credential that demonstrates your expertise</p>
                </div>
              </Card>

              <Card className="p-6 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xl font-bold text-gray-900">4.7</span>
                    </div>
                    <p className="text-gray-600">568 reviews</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <a href="#reviews" className="text-[#5473fc] hover:text-blue-700 text-sm font-medium">
                      Read all reviews →
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#5473fc] mb-2">
                      <Target className="h-6 w-6" />
                    </div>
                    <h3 className="text-gray-900 font-bold">Beginner level</h3>
                    <p className="text-gray-600">Recommended experience</p>
                  </div>
                  <p className="text-gray-700 mt-auto">No prior experience needed, just enthusiasm to learn</p>
                </div>
              </Card>

              <Card className="p-6 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#5473fc] mb-2">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-gray-900 font-bold">3-4 months</h3>
                    <p className="text-gray-600">at 10 hours a week</p>
                  </div>
                  <p className="text-gray-700 mt-auto">Flexible schedule, learn at your own pace</p>
                </div>
              </Card>
            </div>

            {/* Call to Action */}
            <Card className="p-8 border-none bg-gradient-to-r from-[#5473fc] to-indigo-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to start your journey?</h3>
              <p className="mb-6">
                Join thousands of students who have already transformed their careers with our comprehensive Data
                Science & AI program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={openCourseDialog} className="bg-white text-[#5473fc] hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors">
                  Enroll Now
                </button>
                {/* <button className="bg-transparent border border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Download Syllabus
                </button> */}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
