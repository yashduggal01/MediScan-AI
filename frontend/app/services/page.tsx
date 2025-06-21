import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Upload,
  MessageCircle,
  QrCode,
  Calendar,
  Utensils,
  Shield,
  Brain,
  Smartphone,
  Clock,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Upload,
    title: "Smart Medical Records",
    description: "Upload, organize, and analyze your medical documents with AI-powered insights",
    features: ["PDF Upload & OCR", "AI Analysis", "Categorization", "Search & Filter"],
    color: "bg-blue-100 text-blue-600",
    price: "Free",
  },
  {
    icon: MessageCircle,
    title: "HealthGPT Assistant",
    description: "24/7 AI health assistant that understands your medical history",
    features: ["Natural Language Queries", "Medical History Access", "Health Recommendations", "Symptom Analysis"],
    color: "bg-emerald-100 text-emerald-600",
    price: "$9.99/month",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated medication reminders and appointment management",
    features: ["Medication Tracking", "Appointment Reminders", "Doctor Sync", "Adherence Analytics"],
    color: "bg-purple-100 text-purple-600",
    price: "$4.99/month",
  },
  {
    icon: Utensils,
    title: "AI Diet Planner",
    description: "Personalized nutrition plans based on your health conditions",
    features: ["Custom Meal Plans", "Nutrition Tracking", "Health Goal Integration", "Recipe Suggestions"],
    color: "bg-orange-100 text-orange-600",
    price: "$7.99/month",
  },
  {
    icon: QrCode,
    title: "Emergency QR Access",
    description: "Instant access to critical medical information in emergencies",
    features: ["QR Code Generation", "Emergency Contacts", "Medical Alerts", "Secure Access"],
    color: "bg-red-100 text-red-600",
    price: "Free",
  },
  {
    icon: Shield,
    title: "Blockchain Security",
    description: "Military-grade security with blockchain data protection",
    features: ["End-to-End Encryption", "Blockchain Storage", "Access Logs", "HIPAA Compliant"],
    color: "bg-gray-100 text-gray-600",
    price: "Included",
  },
]

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Essential health management tools",
    features: ["Medical Records Upload", "Basic AI Analysis", "Emergency QR Codes", "5GB Storage", "Email Support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$19.99",
    description: "Advanced AI-powered healthcare",
    features: [
      "Everything in Basic",
      "HealthGPT Assistant",
      "Smart Scheduling",
      "AI Diet Planner",
      "50GB Storage",
      "Priority Support",
      "Advanced Analytics",
    ],
    popular: true,
  },
  {
    name: "Family",
    price: "$39.99",
    description: "Complete family health management",
    features: [
      "Everything in Pro",
      "Up to 6 Family Members",
      "Family Health Dashboard",
      "Shared Emergency Access",
      "Unlimited Storage",
      "24/7 Phone Support",
      "Custom Integrations",
    ],
    popular: false,
  },
]

export default function ServicesPage() {
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
              <Link href="/services" className="text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/doctors" className="text-gray-700 hover:text-blue-600 font-medium">
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
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive healthcare solutions powered by AI, secured by blockchain, and designed to put you in control
            of your health journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Healthcare Management</h2>
            <p className="text-xl text-gray-600">Everything you need to manage your health in one platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {service.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Flexible pricing options to fit your healthcare needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-white border-0 shadow-lg relative ${plan.popular ? "ring-2 ring-blue-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "Free" && <span className="text-gray-600">/month</span>}
                  </div>
                  <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`}
                  >
                    {plan.price === "Free" ? "Get Started" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MediCare?</h2>
            <p className="text-xl text-gray-600">Advanced features that set us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600">Advanced machine learning algorithms analyze your health data</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Blockchain Secure</h3>
              <p className="text-gray-600">Your data is protected with military-grade encryption</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile First</h3>
              <p className="text-gray-600">Access your health data anywhere, anytime</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance when you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Take Control of Your Health?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who trust MediCare for their healthcare management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              >
                Contact Sales
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
