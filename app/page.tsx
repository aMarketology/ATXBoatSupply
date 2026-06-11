import Link from "next/link";

const fuels = [
  { grade: "REGULAR", price: "6.25" },
  { grade: "MIDGRADE", price: "6.50" },
  { grade: "PREMIUM", price: "6.75" },
  { grade: "DIESEL", price: "7.50" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">ATX Boat Supply Co</h1>
          <p className="text-sm text-blue-200 mt-0.5">⭐ 5.05 Google Reviews</p>
        </div>
        <a
          href="tel:5124503669"
          className="text-blue-200 hover:text-white text-sm font-medium transition-colors"
        >
          (512) 450-3669
        </a>
      </header>

      {/* Hero */}
      <section className="bg-blue-800 text-white text-center py-20 px-6">
        <p className="text-blue-300 uppercase tracking-widest text-sm mb-3 font-semibold">
          Gas Delivery
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Get Gas Now!
        </h2>
        <p className="text-xl md:text-2xl font-semibold mb-6">
          We Bring Gas Directly to Your Boat
        </p>
        <p className="max-w-2xl mx-auto text-blue-100 text-base leading-relaxed mb-8">
          We&apos;re dedicated to fueling your adventures by delivering top-quality
          boat gas right to your dock, making it easier than ever to bring your
          boating dreams to life! ATX Boat Supply Co brings Marine Fuel Delivery
          right to your dock, with no added fees.
        </p>
        <a
          href="tel:5124503669"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-10 rounded-full text-lg transition-colors shadow-lg"
        >
          Get Gas Now
        </a>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-2xl font-bold mb-10 text-blue-900">
            Fuel Prices
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {fuels.map(({ grade, price }) => (
              <div
                key={grade}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
                  {grade}
                </p>
                <p className="text-3xl font-extrabold text-gray-900">
                  ${price}
                  <span className="text-sm font-normal text-gray-500">/gal</span>
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 font-medium">
            $20 Delivery Fee
          </p>
          <div className="text-center mt-8">
            <a
              href="tel:5124503669"
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-colors shadow-lg"
            >
              Get Gas Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-blue-900 text-blue-300 text-center py-6 text-sm">
        <p>
          &copy; {new Date().getFullYear()} ATX Boat Supply Co &mdash;{" "}
          <Link href="/consult" className="underline hover:text-white transition-colors">
            Free Consultation
          </Link>
        </p>
        <p className="mt-1 text-xs text-blue-400">Designed by aWS</p>
      </footer>
    </div>
  );
}
