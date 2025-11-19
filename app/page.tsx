import WaitlistForm from './components/WaitlistForm';
import Logo from './components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Logo className="w-10 h-10" />
              <h1 className="text-3xl font-bold text-green-600">Yazolle</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#waitlist" className="text-gray-600 hover:text-gray-900">Join Waitlist</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Own Your Home Without Paying Interest
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Yazolle offers interest-free home loans up to $500,000 for American home buyers. 
            Say goodbye to decades of interest payments and hello to true homeownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-green-600 hover:bg-green-50 transition-colors"
            >
              Learn More
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl font-bold text-green-600 mb-2">$500K</div>
              <div className="text-gray-600">Maximum Home Value</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl font-bold text-green-600 mb-2">0%</div>
              <div className="text-gray-600">Interest Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl font-bold text-green-600 mb-2">USA</div>
              <div className="text-gray-600">Available Nationwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            How Yazolle Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Join the Waitlist</h3>
              <p className="text-gray-600">
                Tell us about your home buying goals, income, and target budget. We&apos;ll review your information to ensure you qualify.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Approved</h3>
              <p className="text-gray-600">
                Once qualified, we&apos;ll work with you to finalize your application and connect your financial information securely.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Move In</h3>
              <p className="text-gray-600">
                Yazolle purchases your chosen home, and you move in with an interest-free payment plan tailored to your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our waitlist today and take the first step toward interest-free homeownership. 
              We&apos;ll review your information and get in touch with next steps.
            </p>
          </div>
          
          <WaitlistForm />
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your financial information is encrypted and protected with standard enterprise security.</p>
            </div>
            
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Regulatory Compliant</h3>
              <p className="text-gray-600">We follow all applicable regulations and consumer protection laws.</p>
            </div>
            
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Team</h3>
              <p className="text-gray-600">Our dedicated team is here to guide you through every step of the process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
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
