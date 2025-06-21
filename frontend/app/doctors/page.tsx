import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Star, MapPin, Calendar, MessageCircle, Award, Users, Clock } from "lucide-react"
import Link from "next/link"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Endocrinologist",
    experience: "15 years",
    rating: 4.9,
    reviews: 127,
    location: "New York, NY",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Specializes in diabetes management and hormonal disorders. Board-certified with extensive experience in AI-assisted diagnostics.",
    education: ["Harvard Medical School", "Johns Hopkins Residency"],
    languages: ["English", "Spanish"],
    availability: "Available Today",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Cardiologist",
    experience: "12 years",
    rating: 4.8,
    reviews: 89,
    location: "Los Angeles, CA",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Expert in cardiovascular health and preventive cardiology. Pioneer in using AI for heart disease prediction.",
    education: ["Stanford Medical School", "Mayo Clinic Fellowship"],
    languages: ["English", "Mandarin"],
    availability: "Available Tomorrow",
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    specialty: "General Practitioner",
    experience: "8 years",
    rating: 4.9,
    reviews: 156,
    location: "Chicago, IL",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Comprehensive primary care with focus on preventive medicine and patient education.",
    education: ["University of Chicago", "Northwestern Residency"],
    languages: ["English", "French"],
    availability: "Available Today",
  },
  {
    id: 4,
    name: "Dr. Robert Wilson",
    specialty: "Neurologist",
    experience: "20 years",
    rating: 4.7,
    reviews: 203,
    location: "Boston, MA",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Leading expert in neurological disorders and brain health. Research focus on AI-assisted diagnosis.",
    education: ["MIT", "Massachusetts General Hospital"],
    languages: ["English", "German"],
    availability: "Available Next Week",
  },
  {
    id: 5,
    name: "Dr. Maria Garcia",
    specialty: "Pediatrician",
    experience: "10 years",
    rating: 4.9,
    reviews: 178,
    location: "Miami, FL",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Dedicated to children's health and development. Expert in pediatric AI diagnostics and family care.",
    education: ["University of Miami", "Children's Hospital Fellowship"],
    languages: ["English", "Spanish", "Portuguese"],
    availability: "Available Today",
  },
  {
    id: 6,
    name: "Dr. James Thompson",
    specialty: "Orthopedic Surgeon",
    experience: "18 years",
    rating: 4.8,
    reviews: 134,
    location: "Seattle, WA",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Specializes in sports medicine and joint replacement. Uses AI for surgical planning and recovery optimization.",
    education: ["University of Washington", "Seattle Sports Medicine"],
    languages: ["English"],
    availability: "Available This Week",
  },
]

const specialties = [
  "All Specialties",
  "Cardiology",
  "Endocrinology",
  "General Practice",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
  "Psychiatry",
]

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MediCare</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/doctors" className="text-blue-600 font-medium">
                Doctors
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </div>
            <Link href="/login">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Expert Doctors</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Connect with board-certified physicians who use cutting-edge AI technology to provide personalized,
            comprehensive healthcare.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Expert Doctors</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Specialties</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">4.8</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-600">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {specialty}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} />
                    <AvatarFallback className="text-lg">
                      {doctor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl text-gray-900">{doctor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{doctor.specialty}</CardDescription>

                  <div className="flex items-center justify-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-sm text-gray-500">({doctor.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{doctor.bio}</p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-medium">{doctor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Languages:</span>
                      <span className="font-medium">{doctor.languages.join(", ")}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Badge
                      variant="outline"
                      className={`w-full justify-center ${
                        doctor.availability.includes("Today")
                          ? "border-green-200 text-green-700 bg-green-50"
                          : "border-blue-200 text-blue-700 bg-blue-50"
                      }`}
                    >
                      {doctor.availability}
                    </Badge>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Doctors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Doctors?</h2>
            <p className="text-xl text-gray-600">
              Experience the future of healthcare with our AI-enhanced medical professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Board Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  All our doctors are board-certified specialists with extensive training and years of experience in
                  their respective fields.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">AI-Enhanced Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Our physicians use cutting-edge AI tools to provide more accurate diagnoses and personalized treatment
                  plans.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Access healthcare when you need it most with our round-the-clock availability and emergency
                  consultation services.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Meet Your Doctor?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a consultation with one of our expert physicians today and experience the future of personalized
            healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Book Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              >
                Learn More
              </Button>
            </Link>
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
