import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Lock, Eye } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your privacy and data security are our top priorities. Learn how we protect and handle your personal health
            information.
          </p>
          <p className="text-blue-200 mt-4">Last updated: December 20, 2024</p>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">HIPAA Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We follow strict HIPAA guidelines to protect your health information
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Encrypted Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  All data is encrypted using military-grade blockchain technology
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">You Control Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  You decide who can access your data and for how long
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Privacy Policy Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Health Information (PHI)</h3>
            <p className="text-gray-600 mb-6">
              We collect and store personal health information that you provide to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Medical records, test results, and diagnostic reports</li>
              <li>Medication history and current prescriptions</li>
              <li>Appointment history and treatment plans</li>
              <li>Health monitoring data and vital signs</li>
              <li>Emergency contact information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            <p className="text-gray-600 mb-6">
              We also collect personal information necessary to provide our services:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Name, date of birth, and contact information</li>
              <li>Insurance information and billing details</li>
              <li>Account credentials and security information</li>
              <li>Device information and usage analytics</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>

            <p className="text-gray-600 mb-6">We use your information solely for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Providing healthcare services and medical consultations</li>
              <li>AI-powered health analysis and personalized recommendations</li>
              <li>Appointment scheduling and medication reminders</li>
              <li>Emergency medical access when authorized</li>
              <li>Billing and insurance processing</li>
              <li>Platform improvement and security monitoring</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Information Sharing</h2>

            <p className="text-gray-600 mb-6">
              We do not sell, rent, or share your personal health information except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>
                <strong>With Your Consent:</strong> When you explicitly authorize sharing with healthcare providers
              </li>
              <li>
                <strong>For Treatment:</strong> With doctors and medical professionals involved in your care
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or court order
              </li>
              <li>
                <strong>Emergency Situations:</strong> To protect your health and safety in emergencies
              </li>
              <li>
                <strong>Business Associates:</strong> With HIPAA-compliant service providers under strict agreements
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Blockchain Technology</h3>
            <p className="text-gray-600 mb-6">
              We use advanced blockchain technology to secure your medical data. This provides:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Immutable record keeping that prevents unauthorized changes</li>
              <li>Decentralized storage that eliminates single points of failure</li>
              <li>Cryptographic security that protects against data breaches</li>
              <li>Transparent audit trails for all data access</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Security Measures</h3>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>End-to-end encryption for all data transmission</li>
              <li>Multi-factor authentication for account access</li>
              <li>Regular security audits and penetration testing</li>
              <li>Employee training on privacy and security protocols</li>
              <li>Secure data centers with 24/7 monitoring</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Your Rights</h2>

            <p className="text-gray-600 mb-6">Under HIPAA and other privacy laws, you have the following rights:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>
                <strong>Access:</strong> Request copies of your health information
              </li>
              <li>
                <strong>Amendment:</strong> Request corrections to your health information
              </li>
              <li>
                <strong>Restriction:</strong> Request limits on how we use your information
              </li>
              <li>
                <strong>Portability:</strong> Export your data in a standard format
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and data
              </li>
              <li>
                <strong>Notification:</strong> Be notified of any data breaches
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. AI and Machine Learning</h2>

            <p className="text-gray-600 mb-6">
              Our AI systems analyze your health data to provide personalized insights. Important details:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>AI analysis is performed on encrypted, anonymized data</li>
              <li>Machine learning models do not store individual patient data</li>
              <li>You can opt out of AI analysis at any time</li>
              <li>AI recommendations are for informational purposes only</li>
              <li>All AI decisions are auditable and explainable</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Data Retention</h2>

            <p className="text-gray-600 mb-6">We retain your information according to the following schedule:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>
                <strong>Medical Records:</strong> 7 years after last treatment (or longer if required by law)
              </li>
              <li>
                <strong>Account Information:</strong> Until account deletion is requested
              </li>
              <li>
                <strong>Usage Analytics:</strong> 2 years in anonymized form
              </li>
              <li>
                <strong>Emergency QR Codes:</strong> 30 days after generation
              </li>
              <li>
                <strong>Audit Logs:</strong> 7 years for compliance purposes
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. International Transfers</h2>

            <p className="text-gray-600 mb-8">
              Your data is primarily stored in secure data centers within the United States. If we need to transfer data
              internationally, we ensure adequate protection through appropriate safeguards and compliance with
              applicable privacy laws.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Children's Privacy</h2>

            <p className="text-gray-600 mb-8">
              Our services are not intended for children under 13. For minors aged 13-17, we require parental consent
              before collecting any personal health information. Parents have the right to review, modify, or delete
              their child's information.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Changes to This Policy</h2>

            <p className="text-gray-600 mb-8">
              We may update this privacy policy from time to time. We will notify you of any material changes by email
              and by posting the updated policy on our website. Your continued use of our services after such changes
              constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Contact Us</h2>

            <p className="text-gray-600 mb-4">
              If you have questions about this privacy policy or want to exercise your rights, contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-2">
                <strong>Privacy Officer</strong>
              </p>
              <p className="text-gray-600 mb-2">MediCare Privacy Department</p>
              <p className="text-gray-600 mb-2">123 Medical Center Drive</p>
              <p className="text-gray-600 mb-2">Healthcare City, HC 12345</p>
              <p className="text-gray-600 mb-2">Email: privacy@medicare.com</p>
              <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Questions About Your Privacy?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our privacy team is here to help you understand how we protect your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Contact Privacy Team
              </Button>
            </Link>
            <Link href="/terms">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              >
                View Terms of Service
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
