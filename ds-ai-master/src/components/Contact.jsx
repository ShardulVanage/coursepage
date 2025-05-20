"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'
import Link from "next/link"

export default function ContactFormSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#5473fc]">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about our Data Science & AI Masters program? We're here to help.
            Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <Card className="h-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-xl shadow-lg border-none">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8 text-blue-100">
                Fill up the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-200 mt-1" />
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <p className="text-blue-100">+91 82370 40802</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-200 mt-1" />
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-blue-100">contact@zepanalytics.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-200 mt-1" />
                  <div>
                    <h4 className="font-medium text-white">Office</h4>
                    <p className="text-blue-100">
                       Bhubaneswar, ODISHA,
                     INDIA
                    
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium text-white mb-4">Connect with us</h4>
                <div className="flex gap-4">
                  {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                    <button
                      key={social}
                      href={`#${social}`} 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-6 h-6 text-white">
                        {/* Simple placeholder for social icons */}
                        {social === "twitter" && <Link href={'https://x.com/ZepAnalytics'}><Twitter/></Link>}
                        {social === "linkedin" && <Link href={'https://www.linkedin.com/company/zep-analytics/posts/?feedView=all'}><Linkedin/></Link>}
                        {social === "facebook" && <Link href={'https://www.facebook.com/zepanalytics'}><Facebook/></Link>}
                        {social === "instagram" && <Link href={'https://www.instagram.com/zep.analytics/'} ><Instagram/></Link>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
             
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="p-8 shadow-lg border border-gray-100 rounded-xl">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 max-w-md">
                    Your message has been received. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form  action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                     <input type="hidden" name="access_key" value="77cf27ad-d0fe-43a9-aee4-f2929f11d0fa"></input>
 <input type="hidden" name="subject" value="New Submission For Course "></input>
 <input type="hidden" name="replyto" value="vsharadul@gmail.com"></input>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formState.phone}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                      <Select onValueChange={handleSelectChange} value={formState.subject}>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="course-inquiry">Course Inquiry</SelectItem>
                          <SelectItem value="admission">Admission Process</SelectItem>
                          <SelectItem value="payment">Payment & Fees</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please provide details about your inquiry..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <Label htmlFor="privacy" className="text-gray-600 text-sm">
                      I agree to the <a href="#privacy" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-[#5473fc] hover:bg-[#5473fcd5] hover:drop-shadow-2xl text-white px-8 py-6 h-auto text-lg rounded-lg w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
