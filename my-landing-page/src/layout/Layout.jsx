const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-white z-50 font-sans" style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.10)' }}>
    <div className="w-full max-w-[1512px] mx-auto flex items-center justify-between px-6 md:px-8 lg:px-[30px] py-2">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.svg"
          alt="LUMEA"
          className="h-10 w-auto"
        />
      </div>

      {/* Navigation Links - Simplified */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-[#003FE3] text-[20px] font-normal leading-[140%] tracking-[-0.2px] hover:opacity-80 transition-colors">L'outil Lumea</a>
        <a href="#" className="text-[#003FE3] text-[20px] font-normal leading-[140%] tracking-[-0.2px] hover:opacity-80 transition-colors">À propos</a>
      </div>

      {/* CTA Button - Simplified */}
      <div className="hidden md:block">
        <a
          href="#"
          className="inline-block px-6 py-3 bg-[#FF6D00] text-white rounded-lg hover:bg-[#E56200] transition-colors whitespace-nowrap text-[20px] font-normal leading-[140%] tracking-[-0.2px]"
        >
          Accéder à Lumea
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
);

const Layout = ({ children }) => (
  <div className="min-h-screen bg-white font-sans">
    <Navbar />
    <main className="pt-[72px]">{children}</main>
  </div>
);

export default Layout; 