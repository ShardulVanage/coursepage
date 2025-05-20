"use client"
import Image from "next/image"



export default function TopCompaniesSection({ openEnterpriseDialog }) {
  // Sample company logos (in a real implementation, you would use actual company logos)
  const companies = [
    {
      name: "Google",
      employees: "50+",
      img: "https://res.cloudinary.com/do9kp7bzv/image/upload/v1747674738/Google__G__logo.svg_bxbugi.webp",
    },
    {
      name: "Microsoft",
      employees: "42+",
      img: "https://res.cloudinary.com/do9kp7bzv/image/upload/v1747675097/Microsoft_logo_sbxhil.svg",
    },
    {
      name: "Amazon",
      employees: "63+",
      img: "https://res.cloudinary.com/do9kp7bzv/image/upload/v1747675181/Amazon_icon_cm0lx1.svg",
    },
    {
      name: "Meta",
      employees: "30+",
      img: "https://res.cloudinary.com/do9kp7bzv/image/upload/v1747675243/Meta_Platforms_Inc._logo__cropped_zubyqi.svg",
    },
    {
      name: "Apple",
      employees: "450+",
      img: "https://res.cloudinary.com/do9kp7bzv/image/upload/v1747675324/Apple_logo_black_a3jbci.svg",
    },
    {
      name: "Tesla",
      employees: "20+",
      img: "https://res.cloudinary.com/do9kp7bzv/image/upload/v1747675434/tesla_f7gowl.svg",
    },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          See how employees at <span className="text-[#5473fc]">top companies</span> are mastering in-demand skills
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Join thousands of professionals from leading tech companies who have transformed their careers with our
          comprehensive Data Science & AI curriculum.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white group"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
              <Image src={company.img || "/placeholder.svg"} height={50} width={50} alt="company logo" />
            </div>
            <h3 className="font-bold text-gray-900">{company.name}</h3>
            {/* <div className="flex items-center mt-2 text-sm text-gray-500">
              <Users className="w-4 h-4 mr-1" />
              <span>{company.employees} learners</span>
            </div> */}
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-2xl p-2 px-12 ">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Empower your workforce with cutting-edge AI skills
            </h3>
            <p className="text-gray-700 mb-6">
              Our enterprise solutions help companies upskill their teams with the latest in Data Science and AI
              technologies. Customized learning paths ensure your employees gain the specific skills needed for your
              business challenges.
            </p>
            <button
              className="bg-[#5473fc] hover:bg-[#5473fce5] hover:shadow-2xl text-white font-medium py-3 px-6 rounded-lg transition-colors"
              onClick={openEnterpriseDialog}
            >
              Learn about Enterprise plans
            </button>
          </div>
          <div className="relative h-80 w-full">
            <Image
              src="/entripse.jpg?height=400&width=600"
              alt="Enterprise training illustration"
              width={500}
              height={400}
              className="absolute bottom-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
