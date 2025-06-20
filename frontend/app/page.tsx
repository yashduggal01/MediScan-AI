import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Upload,
  MessageCircle,
  QrCode,
  Shield,
  Brain,
  Calendar,
  Heart,
  Users,
  Play,
  Phone,
  MapPin,
  Clock,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MediCare</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact Us
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                  Login
                </Button>
              </Link>
              <Link href="/patient/dashboard">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-2 text-blue-600">
                <Star className="h-5 w-5" />
                <span className="font-medium">Top Notch Medical Care, Just for You</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Your Best <span className="text-blue-600">Medical</span>
                  <br />
                  <span className="text-blue-600">Experience</span> Awaits
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Expert medical care at your fingertips. AI-powered insights, secure data management, and personalized
                  healthcare solutions.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Link href="/patient/dashboard">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3">
                    Explore Our Services
                  </Button>
                </Link>
                <Button variant="ghost" size="lg" className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Video</span>
                </Button>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Here</p>
                  <p className="text-xs text-gray-600">123 Main St</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Phone Number</p>
                  <p className="text-xs text-gray-600">+1 234 567 890</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Preferred Date</p>
                  <p className="text-xs text-gray-600">Select Date</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Preferred Time</p>
                  <p className="text-xs text-gray-600">Select Time</p>
                </div>
              </div>

              <Link href="/appointment">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                  Book an Appointment
                </Button>
              </Link>
            </div>

            {/* Right Content - Doctor Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="absolute inset-0 bg-blue-600 rounded-full transform scale-75 opacity-20"></div>
                <Image
                  src="/images/doctor-hero-new.png"
                  alt="Professional female doctor with stethoscope in medical setting"
                  width={600}
                  height={600}
                  className="relative z-20 w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="absolute top-4 left-4 space-y-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full ml-2"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <div className="bg-gray-100 rounded-3xl p-8 relative">
                <div className="w-64 h-64 bg-gray-200 rounded-2xl mx-auto flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full p-3">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="text-blue-600 font-medium">ABOUT US</div>
              <h2 className="text-4xl font-bold text-gray-900">
                15 Years of Expertise
                <br />
                in Medical Care
              </h2>
              <p className="text-gray-600 text-lg">
                Expert medical care at your fingertips. AI-powered insights, secure data management, and personalized
                healthcare solutions tailored to your needs.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Provides Dental Services You Can Trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Award-Winning Excellence in Medical Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Dedicated Experts Behind Every Smile</span>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Revolutionizing Healthcare Management</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-sky-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Smart Report Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Upload medical reports and get instant AI-powered analysis with plain-language explanations
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">HealthGPT Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Chat with your personal AI health assistant for instant answers about your medical history
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <QrCode className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Emergency QR Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Generate QR codes for emergency access to critical health information when you need it most
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <Heart className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">General Medicine</h3>
              <p className="text-blue-100">Comprehensive primary care services</p>
            </div>
            <div>
              <Brain className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Diagnostics</h3>
              <p className="text-blue-100">Advanced AI-powered health analysis</p>
            </div>
            <div>
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Records</h3>
              <p className="text-blue-100">Blockchain-secured medical data</p>
            </div>
            <div>
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Scheduling</h3>
              <p className="text-blue-100">Automated appointment management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-semibold">MediCare</span>
              </div>
              <p className="text-gray-400">
                Advanced healthcare management with AI-powered insights and secure data protection.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white">
                    Medical Records
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    AI Diagnostics
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Health Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Emergency Access
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/doctors" className="hover:text-white">
                    Our Doctors
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Medical Center Drive</li>
                <li>Healthcare City, HC 12345</li>
                <li>+1 (555) 123-4567</li>
                <li>info@medicare.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex items-center justify-between">
            <p className="text-gray-400">© 2024 MediCare. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
