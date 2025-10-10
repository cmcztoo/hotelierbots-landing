import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="font-bold text-xl tracking-wide">HotelierBots</div>
        <nav>
          <a
            href="mailto:hello@hotelierbots.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 mb-4">
            Stop revenue leakage.
            <br />
            <span className="text-gray-500">
              Automate OTA & fee reconciliation.
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            AI-assisted back-office tools for independent and small-portfolio
            hoteliers. Start by catching missed commissions, duplicate fees, and
            fraud—without more spreadsheets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://calendly.com/your-link"
              className="bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors border-2 border-gray-900"
            >
              Book a 15-min intro
            </a>
            <Link
              href="/waitlist"
              className="text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors border-2 border-gray-300"
            >
              Join the waitlist
            </Link>
          </div>

          {/* Coming Soon Panel */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 max-w-4xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-4">Coming soon</h3>
            <ul className="text-left text-gray-700 space-y-2">
              <li>
                • OTA reconciliation (Expedia, Booking.com) against PMS & bank
              </li>
              <li>• Brand fee checks & variance alerts</li>
              <li>• Simple fraud flags from daily activity</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-gray-200">
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} HotelierBots. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
