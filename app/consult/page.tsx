import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Consultation – ATX Boat Supply Co",
  description: "Book a free consultation with ATX Boat Supply Co for marine fuel delivery.",
};

export default function ConsultPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-2xl font-bold tracking-tight">ATX Boat Supply Co</h1>
          <p className="text-sm text-blue-200 mt-0.5">⭐ 5.05 Google Reviews</p>
        </Link>
        <a
          href="tel:5124503669"
          className="text-blue-200 hover:text-white text-sm font-medium transition-colors"
        >
          (512) 450-3669
        </a>
      </header>

      {/* Consult Form */}
      <main className="flex-1 flex items-center justify-center py-16 px-6 bg-gray-50">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-2">
            Free Consultation
          </h2>
          <p className="text-gray-500 mb-8">
            Tell us about your needs and we&apos;ll get back to you fast.
          </p>

          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(512) 000-0000"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us your location, boat type, how much fuel you need..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-4 rounded-full text-base transition-colors"
            >
              Send Message
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Or call us directly:{" "}
            <a href="tel:5124503669" className="text-blue-700 hover:underline font-medium">
              (512) 450-3669
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-300 text-center py-6 text-sm">
        <p>
          &copy; {new Date().getFullYear()} ATX Boat Supply Co &mdash;{" "}
          <Link href="/" className="underline hover:text-white transition-colors">
            Home
          </Link>
        </p>
        <p className="mt-1 text-xs text-blue-400">Designed by aWS</p>
      </footer>
    </div>
  );
}
