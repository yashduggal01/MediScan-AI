import { Button } from "@/components/ui/button"
import { Heart, FileText, Shield } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our healthcare platform and services.
          </p>
          <p className="text-blue-200 mt-4">Last updated: December 20, 2024</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-8">
              By accessing or using MediCare's platform and services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
              from using or accessing this site and our services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
            <p className="text-gray-600 mb-6">MediCare provides a digital healthcare platform that includes:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Medical record management and storage</li>
              <li>AI-powered health analysis and recommendations</li>
              <li>Appointment scheduling and medication reminders</li>
              <li>Emergency medical information access</li>
              <li>Secure communication with healthcare providers</li>
              <li>Health monitoring and tracking tools</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Accounts and Registration</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Creation</h3>
            <p className="text-gray-600 mb-6">
              To use our services, you must create an account by providing accurate, complete, and current information.
              You are responsible for maintaining the confidentiality of your account credentials.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">User Types</h3>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>
                <strong>Patients:</strong> Individuals seeking healthcare management services
              </li>
              <li>
                <strong>Healthcare Providers:</strong> Licensed medical professionals providing care
              </li>
              <li>
                <strong>Authorized Representatives:</strong> Individuals with legal authority to access patient data
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Medical Disclaimer</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Shield className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Important Medical Disclaimer:</strong> MediCare is a healthcare management platform and does
                    not provide medical advice, diagnosis, or treatment. Our AI-powered insights are for informational
                    purposes only and should not replace professional medical consultation.
                  </p>
                </div>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Always consult with qualified healthcare professionals for medical decisions</li>
              <li>In case of medical emergencies, contact emergency services immediately</li>
              <li>AI recommendations are not a substitute for professional medical judgment</li>
              <li>We do not guarantee the accuracy of AI-generated health insights</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. User Responsibilities</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Accuracy</h3>
            <p className="text-gray-600 mb-6">
              You are responsible for ensuring that all health information you provide is accurate and up-to-date.
              Inaccurate information may affect the quality of AI analysis and healthcare services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Uses</h3>
            <p className="text-gray-600 mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Use the service for any unlawful purpose or in violation of any regulations</li>
              <li>Attempt to gain unauthorized access to other users' accounts or data</li>
              <li>Upload malicious software or attempt to disrupt the service</li>
              <li>Share your account credentials with unauthorized individuals</li>
              <li>Use the platform to distribute spam or unsolicited communications</li>
              <li>Reverse engineer or attempt to extract source code from our AI systems</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Privacy and Data Protection</h2>

            <p className="text-gray-600 mb-6">
              Your privacy is paramount to us. Our data handling practices are governed by:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>HIPAA (Health Insurance Portability and Accountability Act) compliance</li>
              <li>GDPR (General Data Protection Regulation) where applicable</li>
              <li>State and federal privacy laws</li>
              <li>Our comprehensive Privacy Policy</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Intellectual Property</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Intellectual Property</h3>
            <p className="text-gray-600 mb-6">
              All content, features, and functionality of the MediCare platform, including but not limited to text,
              graphics, logos, software, and AI algorithms, are owned by MediCare and protected by copyright, trademark,
              and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Content</h3>
            <p className="text-gray-600 mb-8">
              You retain ownership of your health data and personal information. By using our service, you grant us a
              limited license to process your data solely for the purpose of providing healthcare services and AI
              analysis as described in our Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Payment Terms</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscription Plans</h3>
            <p className="text-gray-600 mb-6">
              MediCare offers various subscription plans with different features and pricing. By subscribing, you agree
              to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Pay all applicable fees as described in your chosen plan</li>
              <li>Automatic renewal unless cancelled before the renewal date</li>
              <li>Price changes with 30 days advance notice</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Refund Policy</h3>
            <p className="text-gray-600 mb-8">
              We offer a 30-day money-back guarantee for new subscribers. Refunds are processed within 5-10 business
              days after approval. Certain services may have different refund terms as specified at the time of
              purchase.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Service Availability</h2>

            <p className="text-gray-600 mb-6">
              While we strive to maintain 99.9% uptime, we cannot guarantee uninterrupted service availability. We may
              temporarily suspend service for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Scheduled maintenance and updates</li>
              <li>Emergency security measures</li>
              <li>Technical difficulties beyond our control</li>
              <li>Compliance with legal requirements</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Limitation of Liability</h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FileText className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    <strong>Important:</strong> To the maximum extent permitted by law, MediCare shall not be liable for
                    any indirect, incidental, special, consequential, or punitive damages, including but not limited to
                    loss of profits, data, or other intangible losses.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-8">
              Our total liability for any claims arising from your use of the service shall not exceed the amount you
              paid for the service in the 12 months preceding the claim.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Indemnification</h2>

            <p className="text-gray-600 mb-8">
              You agree to indemnify and hold harmless MediCare, its officers, directors, employees, and agents from any
              claims, damages, or expenses arising from your use of the service, violation of these terms, or
              infringement of any third-party rights.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Termination</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Termination by You</h3>
            <p className="text-gray-600 mb-6">
              You may terminate your account at any time by contacting our support team or using the account deletion
              feature in your dashboard. Upon termination, your data will be handled according to our data retention
              policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Termination by Us</h3>
            <p className="text-gray-600 mb-8">
              We may terminate or suspend your account immediately if you violate these terms, engage in fraudulent
              activity, or for any other reason at our sole discretion. We will provide reasonable notice when possible.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Governing Law</h2>

            <p className="text-gray-600 mb-8">
              These terms shall be governed by and construed in accordance with the laws of the State of California,
              without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of
              California.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Changes to Terms</h2>

            <p className="text-gray-600 mb-8">
              We reserve the right to modify these terms at any time. We will notify users of material changes via email
              and by posting the updated terms on our website. Your continued use of the service after such changes
              constitutes acceptance of the new terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">15. Contact Information</h2>

            <p className="text-gray-600 mb-4">If you have questions about these Terms of Service, please contact us:</p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-2">
                <strong>Legal Department</strong>
              </p>
              <p className="text-gray-600 mb-2">MediCare Legal Team</p>
              <p className="text-gray-600 mb-2">123 Medical Center Drive</p>
              <p className="text-gray-600 mb-2">Healthcare City, HC 12345</p>
              <p className="text-gray-600 mb-2">Email: legal@medicare.com</p>
              <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <p className="text-blue-800 text-sm">
                By using MediCare's services, you acknowledge that you have read, understood, and agree to be bound by
                these Terms of Service and our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who trust MediCare for their healthcare management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Create Account
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              >
                Contact Support
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
