function Footer() {
  return (
    <footer className="bg-[#0a1416] text-white py-10 mt-20 border-t border-[#10b981]/20 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-8">
        {/* Logo / Brand */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold tracking-wide text-[#10b981]">
            Hamada Store
          </h2>
          <p className="text-sm text-gray-400">
            Your trusted online shop since 2018.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm font-medium">
          <a
            href="#"
            className="hover:text-[#10b981] transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-[#10b981] transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-lg">
          <a href="#" className="hover:text-[#10b981] transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-[#10b981] transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-[#10b981] transition">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Hamada Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
