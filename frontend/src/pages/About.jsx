function About() {
  return (
    <div className="bg-[#0d1b1e] min-h-screen pb-20 text-white">
      {/* Hero Section */}
      <section className="bg-[#0a1416] text-center py-20 shadow-inner border-b border-[#10b981]/20">
        <h1 className="text-5xl font-extrabold mb-4 text-[#10b981] drop-shadow-lg">
          About Us
        </h1>
        <p className="text-[#b0c4c4] text-lg max-w-2xl mx-auto leading-relaxed">
          Your one-stop destination for premium tech products at unbeatable
          prices.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#10b981] mb-6">Our Mission</h2>
        <p className="text-[#a3b3b3] text-lg leading-relaxed">
          At <span className="text-[#10b981] font-semibold">Hamada Store</span>,
          we aim to make technology accessible to everyone — combining
          top-quality gadgets, honest pricing, and reliable service. Our mission
          is to simplify your tech shopping experience and bring you closer to
          innovation.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-[#121c1d] rounded-2xl shadow-md hover:shadow-[#10b981]/20 p-8 border border-[#10b981]/10 transition-transform hover:-translate-y-2">
          <h3 className="text-xl font-bold text-[#10b981] mb-3">
            🌍 Global Vision
          </h3>
          <p className="text-[#b0c4c4]">
            We source the latest and best tech from around the world to ensure
            our customers always stay ahead.
          </p>
        </div>

        <div className="bg-[#121c1d] rounded-2xl shadow-md hover:shadow-[#10b981]/20 p-8 border border-[#10b981]/10 transition-transform hover:-translate-y-2">
          <h3 className="text-xl font-bold text-[#10b981] mb-3">
            ⚡ Fast & Reliable
          </h3>
          <p className="text-[#b0c4c4]">
            With quick shipping, responsive support, and secure payments, your
            experience is always smooth.
          </p>
        </div>

        <div className="bg-[#121c1d] rounded-2xl shadow-md hover:shadow-[#10b981]/20 p-8 border border-[#10b981]/10 transition-transform hover:-translate-y-2">
          <h3 className="text-xl font-bold text-[#10b981] mb-3">
            💎 Quality Guaranteed
          </h3>
          <p className="text-[#b0c4c4]">
            Every product in our store is carefully verified for performance and
            authenticity.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Want to collaborate or learn more?
        </h2>
        <a
          href="/contact"
          className="inline-block bg-[#10b981] hover:bg-[#059669] text-white font-medium px-8 py-3 rounded-full shadow-lg shadow-[#10b981]/30 transition-transform duration-300 hover:scale-105"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default About;
