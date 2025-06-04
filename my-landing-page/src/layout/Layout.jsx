const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 font-sans">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='16' fill='%230052FF'/%3E%3C/svg%3E"
          alt="LUMEA"
          className="h-8 w-8 mr-2"
        />
        <a href="#" className="text-primary font-bold text-2xl">LUMEA</a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-700 hover:text-primary transition-colors">Accueil</a>
        <a href="#" className="text-gray-700 hover:text-primary transition-colors">Carte Lumea</a>
        <a href="#" className="text-gray-700 hover:text-primary transition-colors">Outil d'organisation</a>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <a
          href="#"
          className="px-6 py-2 text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
        >
          Tester mon éligibilité à la carte
        </a>
        <a
          href="#"
          className="px-6 py-2 bg-secondary text-white rounded-full hover:bg-orange-600 transition-colors whitespace-nowrap"
        >
          Accès à l'outil Lumea
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