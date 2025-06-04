import Layout from '../layout/Layout';

const HomePage = () => (
  <Layout>
    {/* Hero Section */}
    <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white flex items-center justify-center min-h-[70vh]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Column: Textual Content */}
        <div className="flex-1 max-w-xl">
          <div className="uppercase text-[14px] tracking-wider text-purple-600 font-semibold mb-3">Lumea vous simplifie la vie</div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            La carte d'identité numérique des aidants
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Une solution pensée pour vous reconnaître officiellement comme aidant et alléger vos démarches au quotidien.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold shadow-md hover:bg-blue-700 transition">
            Découvrir Lumea
          </button>
        </div>
        {/* Right Column: Visual/Illustration */}
        <div className="flex-1 flex items-center justify-center">
          {/* Card Illustration Placeholder */}
          <div className="relative w-72 h-44 md:w-96 md:h-60 bg-gradient-to-tr from-blue-400 via-purple-400 to-blue-300 rounded-2xl shadow-2xl flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur-sm" />
            <span className="relative z-10 text-white text-xl font-semibold drop-shadow-lg">Carte Lumea<br/>[Mockup visuel]</span>
          </div>
        </div>
      </div>
    </section>
    {/* Features Section */}
    {/* Testimonials Section */}
    {/* Final CTA Section */}
  </Layout>
);

export default HomePage; 