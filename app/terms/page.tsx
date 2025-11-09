import Logo from '../components/Logo';
import Link from 'next/link';

export const metadata = {
  title: "Terms of Service - Yazolle",
  description: "Yazolle's Terms of Service - Review the terms and conditions for using our platform",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Logo className="w-10 h-10" />
              <h1 className="text-3xl font-bold text-green-600">Yazolle</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link>
              <Link href="/#waitlist" className="text-gray-600 hover:text-gray-900">Join Waitlist</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <p className="text-sm text-blue-900 font-semibold">
              Last Updated: November 2025
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 space-y-6">
            {/* Placeholder content - to be replaced with PDF content */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using Yazolle's website and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use our services, you must:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Be at least 18 years of age</li>
                <li>Be a legal resident of the United States</li>
                <li>Have the legal capacity to enter into a binding contract</li>
                <li>Provide accurate and complete information when registering</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Yazolle provides a platform that connects American home buyers with interest-free mortgage opportunities for homes up to $500,000. Our services include waitlist registration, mortgage application processing, and facilitating connections between applicants and funding partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts and Registration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you create an account with us, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide truthful, accurate, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Collection and Consent</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Important Notice:</strong> By using our services, you acknowledge and consent to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Collection of your personal and financial information</li>
                <li>Connection to your bank accounts through secure third-party services (e.g., Plaid)</li>
                <li>Analysis of your spending patterns and transaction history</li>
                <li>Sharing of aggregated, anonymized spending insights with third-party funding partners</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You have the right to withdraw consent at any time, though this may affect your eligibility for interest-free mortgage programs. Please review our <Link href="/privacy" className="text-green-600 hover:text-green-700">Privacy Policy</Link> for detailed information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mortgage Application Process</h2>
              <p className="text-gray-700 leading-relaxed">
                Joining our waitlist or submitting an application does not guarantee approval for an interest-free mortgage. All applications are subject to review, verification, and approval based on our eligibility criteria and funding availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Activities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide false or misleading information</li>
                <li>Impersonate another person or entity</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Interfere with the proper functioning of our platform</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, features, and functionality on our website are owned by Yazolle and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are provided "as is" without warranties of any kind. We do not guarantee:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Mortgage approval or funding availability</li>
                <li>Uninterrupted or error-free service</li>
                <li>Accuracy of third-party information</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To the fullest extent permitted by law, Yazolle shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Yazolle and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnity</h2>
              <p className="text-gray-700 leading-relaxed">
                Except where prohibited by law, by using this Site you indemnify and hold harmless Yazolle and our directors, officers, agents, employees, subsidiaries, and affiliates from any actions, claims, losses, damages, liabilities and expenses including legal fees arising out of your use of our Site or your violation of these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to suspend or terminate your account and access to our services at any time, with or without notice, for any reason, including violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which Yazolle is incorporated, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms, please contact us at:
              </p>
              <a 
                href="mailto:support@yazolle.com" 
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                support@yazolle.com
              </a>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/">
                <h3 className="text-2xl font-bold mb-4 hover:text-green-400 transition-colors cursor-pointer">Yazolle</h3>
              </Link>
              <p className="text-gray-400">
                Making homeownership accessible through interest-free home loans.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Yazolle. All rights reserved. Available exclusively to US residents for homes up to $500,000.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
