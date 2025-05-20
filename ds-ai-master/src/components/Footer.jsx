import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-4">
        

        <div className="   flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} ZEP Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
