export default function Home() {
  const services = ["Emergency plumbing", "Gas engineering", "Boiler services", "Gas Safe registered"]
  const calendarLink = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_LINK || '#book'
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #16a34a 0%, #f59e0b 100%)' }} className="text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Gas and Plumbing Services Leeds</h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">Leeds</p>
          <p className="text-lg mb-8 opacity-80">Professional plumbing services in Leeds - available 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#widget" className="bg-white text-gray-800 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition">Try AI Receptionist</a>
            <a href="tel:+44 7552 765263" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-gray-800 transition">Call +44 7552 765263</a>
          </div>
        </div>
      </section>

      {/* Widget */}
      <section id="widget" className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">AI Voice Receptionist</h2>
          <p className="text-center text-gray-500 mb-8">Available 24/7 — ask about our services, pricing, or book an appointment</p>
          <iframe src="/widget.html" title="AI Voice Receptionist" width="100%" height="600" style={{border:'none',borderRadius:'12px'}} />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-2xl mb-3">🔧</div>
                <h3 className="font-semibold text-gray-800">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why an AI Receptionist?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-gray-500">Never miss a call, day or night. Our AI is always on.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-2">Instant Booking</h3>
              <p className="text-gray-500">Customers can book appointments instantly without waiting.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Never Miss a Call</h3>
              <p className="text-gray-500">Every enquiry is captured and responded to professionally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #16a34a 0%, #f59e0b 100%)' }} className="py-16 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg opacity-90 mb-8">Book a free demo call and see how AI can transform your business.</p>
          <a href={calendarLink} className="bg-white text-gray-800 font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition">Book a Demo Call</a>
        </div>
      </section>
    </main>
  )
}
