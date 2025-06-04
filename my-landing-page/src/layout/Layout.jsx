const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-blue-100 shadow-sm">
    <div className="max-w-screen-xl mx-auto px-8 py-3 flex items-center justify-between">
      {/* Logo/Brand */}
      <a href="#" className="text-2xl font-bold text-gray-900 tracking-tight">LUMEA</a>
      {/* Navigation Links + CTA */}
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-6">
          <a href="#" className="text-base font-medium text-gray-700 hover:text-blue-600 transition">La carte</a>
          <a href="#" className="text-base font-medium text-gray-700 hover:text-blue-600 transition">L'outil d'organisation</a>
          <a href="#" className="text-base font-medium text-gray-700 hover:text-blue-600 transition">Tarifs</a>
          <a href="#" className="text-base font-medium text-gray-700 hover:text-blue-600 transition">À propos</a>
        </div>
        <a href="#" className="ml-4 px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition text-sm md:text-base whitespace-nowrap">
          Créer mon compte
        </a>
      </div>
    </div>
  </nav>
);

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main className="flex-1 pt-20 md:pt-16">{children}</main>
  </div>
);

export default Layout; 