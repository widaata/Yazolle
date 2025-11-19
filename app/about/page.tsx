import Logo from '../components/Logo';
import Link from 'next/link';

export const metadata = {
  title: "About Us - Yazolle",
  description: "Learn about Yazolle's mission to make homeownership accessible through interest-free mortgages",
};

export default function AboutPage() {
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
              <Link href="/about" className="text-gray-900 font-semibold">About Us</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              At Yazolle, we believe that homeownership should be accessible to everyone without the burden of decades of interest payments. Our innovative approach connects American home buyers with interest-free mortgage opportunities, making the dream of owning a home more attainable.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              We&apos;ve reimagined the traditional mortgage model by creating a sustainable platform that benefits both home buyers and our partner companies. Through our unique business model, third-party companies fund interest-free mortgages by gaining access to valuable consumer spending insights, all with full transparency and consumer consent.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To revolutionize the home buying experience by eliminating interest payments and making homeownership financially sustainable for American families purchasing homes up to $500,000.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Transparency:</strong> Clear communication about how our platform works and how data is used</li>
              <li><strong>Accessibility:</strong> Making homeownership achievable for more Americans</li>
              <li><strong>Innovation:</strong> Challenging traditional financial models with creative solutions</li>
              <li><strong>Consumer-First:</strong> Prioritizing the needs and rights of home buyers</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Yazolle?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traditional mortgages can cost home buyers hundreds of thousands of dollars in interest over the life of the loan. We&apos;re changing that by introducing a first of its kind home loan for American home buyers which only includes a one time markup on the price of your home. Our a rent-to-own model means that we purchase your desired home and you pay a fixed amount for the entire duration of your loan. It&apos;s a revolutionary approach to an age-old problem!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-green-50 p-8 rounded-lg border border-green-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Waitlist</h3>
          <p className="text-gray-700 mb-6">
            Be among the first to experience interest-free homeownership with Yazolle.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get Started
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
