import Logo from '../components/Logo';
import Link from 'next/link';

export const metadata = {
  title: "Contact Us - Yazolle",
  description: "Get in touch with the Yazolle team for questions about interest-free mortgages",
};

export default function ContactPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              We&apos;re here to help answer any questions you may have about Yazolle&apos;s interest-free mortgage platform. Whether you&apos;re curious about how the process works, eligibility requirements, or anything else, our support team is ready to assist you.
            </p>
            
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-4">
                For all inquiries, questions, or support requests, please email us at:
              </p>
              <a 
                href="mailto:support@yazolle.com" 
                className="text-green-600 hover:text-green-700 font-semibold text-xl"
              >
                support@yazolle.com
              </a>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What You Can Reach Out About</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Questions about interest-free mortgages and how they work</li>
              <li>Eligibility requirements for home buyers</li>
              <li>Information about the waitlist and application process</li>
              <li>Details about data privacy and consumer consent</li>
              <li>Technical support with the platform</li>
              <li>Partnership and business inquiries</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Response Time</h2>
            <p className="text-gray-700 mb-4">
              Our team typically responds to all inquiries within 1-2 business days. During peak periods, response times may be slightly longer, but we&apos;ll get back to you as soon as possible.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Before You Contact Us</h2>
            <p className="text-gray-700 mb-4">
              You might find answers to common questions on our main page under the &quot;How It Works&quot; section. For detailed information about our policies, please review our <Link href="/privacy" className="text-green-600 hover:text-green-700">Privacy Policy</Link> and <Link href="/terms" className="text-green-600 hover:text-green-700">Terms of Service</Link>.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-green-50 p-8 rounded-lg border border-green-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-700 mb-6">
            Join our waitlist to be among the first to experience interest-free homeownership with Yazolle.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Join the Waitlist
          </Link>
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
                Making homeownership accessible through interest-free mortgages.
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
