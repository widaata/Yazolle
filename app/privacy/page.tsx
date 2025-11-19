import Logo from '../components/Logo';
import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy - Yazolle",
  description: "Yazolle's Privacy Policy - Learn how we protect and handle your personal information",
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <p className="text-sm text-blue-900 font-semibold">
              Last Updated: November 2025
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 space-y-6">
            {/* Placeholder content - to be replaced with PDF content */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Yazolle (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our Site users agree that they consent to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>The conditions set out in this Privacy Policy; and</li>
                <li>The collection, use, and retention of the data listed in this Privacy Policy.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information that you provide directly to us, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Financial information (income range, target home budget, current housing payments)</li>
                <li>Location data (ZIP code)</li>
                <li>Expense and spending information (for waitlist applicants who choose to share)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Process your waitlist application and mortgage application</li>
                <li>Communicate with you about our services</li>
                <li>Improve your experience</li>
                <li>Analyze spending patterns to provide insights to our partner companies</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Third Parties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">Important:</strong> Our business model involves sharing consumer spending insights with third-party companies who fund interest-free mortgages. We will ONLY share your data with third parties if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>You have not requested an explicit opt out</li>
                <li>The sharing complies with all applicable laws and regulations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Third parties will not be able to access user data beyond what is reasonably necessary to achieve the given purpose. You have the right to opt-out of data sharing at any time by contacting us, though this may affect your position on the waitlist for our interest-free home loans.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Disclosures</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will not sell or share your data with other third parties, except in the following cases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>If the law requires it;</li>
                <li>If it is required for any legal proceeding;</li>
                <li>To prove or protect our legal rights; and</li>
                <li>To buyers or potential buyers of this company in the event that we seek to sell the company.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                In order to protect your security, we use the strongest available browser encryption and store all of our data on cloud servers in secure facilities. While we take all reasonable precautions to ensure that user data is secure and that users are protected, there always remains the risk of harm. The Internet as a whole can be insecure at times and therefore we are unable to guarantee the security of user data beyond what is reasonably practical.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                We transfer your data to the following countries: 
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>The United States of America</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                When we transfer user personal data we will protect that data as described in this Privacy Policy and comply with applicable legal requirements for transferring personal data internationally.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access, correct, or delete your personal information</li>
                <li>Opt-out of data sharing with third parties</li>
                <li>Withdraw consent at any time</li>
                <li>Request a copy of your data in a portable format</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                The minimum age to use our website is 18 years of age. We do not knowingly collect or use personal data from children under 13 years of age. If we learn that we have collected personal data from a child under 13 years of age, the personal data will be deleted as soon as possible. If a child under 13 years of age has provided us with personal data their parent or guardian may contact our privacy officer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy may be amended from time to time in order to maintain compliance with the law and to reflect any changes to our data collection process. When we amend this Privacy Policy we will update the &quot;Last Updated Date&quot; at the top of this Privacy Policy. We recommend that our users periodically review our Privacy Policy to ensure that they are notified of any updates. If necessary, we may notify users by email of changes to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy, please contact our company&apos;s privacy officer at:
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
