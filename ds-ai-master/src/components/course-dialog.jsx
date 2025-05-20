"use client"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function CourseDialog({ open, onOpenChange, defaultTab = "course" }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-[#5473fc]">
            Data Science & AI Masters Program
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="course">Course & Pricing</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
          </TabsList>

          {/* Course & Pricing Tab */}
          <TabsContent value="course">
            <Card>
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
                <CardDescription>
                  Comprehensive training in Data Science and AI from Python fundamentals to GenAI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">What you'll learn:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Python programming fundamentals</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Data analysis & visualization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Machine learning algorithms</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Deep learning & neural networks</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Generative AI applications</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Course details:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>6-month comprehensive program</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Live online sessions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Hands-on projects & assignments</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>24/7 doubt resolution</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Industry-recognized certification</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-bold">Price: $1,999</p>
                      <p className="text-sm text-gray-500">or 6 monthly installments of $349</p>
                    </div>
                    <Button className="bg-[#5473fc] hover:bg-[#5473fcef]">Buy Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Instructor Tab */}
          <TabsContent value="instructor">
            <Card>
              <CardHeader>
                <CardTitle>Meet Your Instructor</CardTitle>
                <CardDescription>Learn from industry expert with extensive experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-40 h-40 relative rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://res.cloudinary.com/do9kp7bzv/image/upload/v1747674738/cnkb4zr9felsyt4mywhr_i5za60.webp"
                      alt="Dr. Satyajit Pattnaik"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold">Dr. Satyajit Pattnaik</h3>
                      <p className="text-[#5473fc]">Lead Data/AI Consultant</p>
                    </div>
                    <div className="space-y-2">
                      <p>
                        13+ years experience working in Data Analytics and Data Sciences across different industry
                        verticals including telecom, cyber security, insurance, e-commerce etc. Expertised on BI tech
                        stack including Power BI & Tableau.
                      </p>
                      <p>
                        Analytic experience includes ETL, descriptive and predictive data analysis, data visualization,
                        Machine Learning & Deep Learning. Over 8+ years of training & teaching experience into Data
                        Science & Analytics.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enterprise Tab */}
          <TabsContent value="enterprise">
            <Card>
              <CardHeader>
                <CardTitle>Enterprise Solutions</CardTitle>
                <CardDescription>Custom training programs for your organization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-2 border-[#5473fc]">
                    <CardHeader className="bg-[#5473fc]/10">
                      <CardTitle className="text-[#5473fc]">Team Training</CardTitle>
                      <CardDescription>For small to medium teams</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>5-20 team members</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Customized curriculum</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Dedicated instructor</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Industry-specific projects</span>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <p className="font-bold">Starting at $9,999</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-[#5473fc] hover:bg-[#5473fcef]">Request Quote</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="bg-gray-100">
                      <CardTitle>Corporate Training</CardTitle>
                      <CardDescription>For large organizations</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>20+ team members</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Fully customized program</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Multiple instructors</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Enterprise integration</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Executive reporting</span>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <p className="font-bold">Custom pricing</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                        <Link onClick={(e) => {
      e.preventDefault()
      onOpenChange(false) // close the dialog
      // wait until dialog is closed before scrolling
      setTimeout(() => {
        const section = document.getElementById("contact")
        section?.scrollIntoView({ behavior: "smooth" })
      }, 300) // adjust delay to match dialog close animation
    }}  href="#contact">
                      <Button variant="outline" className="w-full border-gray-300">
                        Contact Sales
                      </Button>
                        </Link>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
