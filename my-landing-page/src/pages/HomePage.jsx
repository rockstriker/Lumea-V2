import Layout from '../layout/Layout';

const HomePage = () => (
  <Layout>
    {/* Hero Section */}
    <section className="w-full bg-white text-center pt-24 pb-16 font-sans">
      <div className="container mx-auto px-4">
        <h1 className="text-[40px] md:text-[48px] font-bold text-primary mb-4 max-w-[800px] mx-auto leading-tight">
          Simplifiez la vie des aidants,
          <br />
          facilitez celle de vos proches
        </h1>
        <p className="text-[18px] text-gray-600 mb-8 max-w-[600px] mx-auto font-normal">
          Lumea centralise, organise et suit toutes les démarches administratives et médicales pour vous soulager au quotidien.
        </p>
        <button className="px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-orange-600 transition-colors">
          Tester Lumea
        </button>
      </div>
    </section>

    {/* Feature Overview Section */}
    <section className="w-full bg-[#0052FF] py-16">
      <div className="container mx-auto px-4">
        {/* Laptop Mockup */}
        <div className="max-w-[800px] mx-auto mb-16">
          <div className="bg-white rounded-lg p-8">
            <img 
              src="/mockup-laptop.png" 
              alt="Dashboard Lumea"
              className="w-full"
              style={{ content: 'url("data:image/svg+xml,%3Csvg width=\'800\' height=\'500\' viewBox=\'0 0 800 500\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'800\' height=\'500\' fill=\'%23F5F5F5\'/%3E%3Ctext x=\'400\' y=\'250\' font-family=\'Arial\' font-size=\'24\' fill=\'%23666\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3E[Mockup visuel]%3C/text%3E%3C/svg%3E")' }}
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6">
              <h3 className="text-[#0052FF] font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Partners Logos Section */}
    <section className="w-full bg-[#F8FAFF] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {/* Replace with actual partner logos */}
          <img src="assurance-maladie.svg" alt="L'Assurance Maladie" className="h-12" />
          <img src="docaposte.svg" alt="Docaposte" className="h-12" />
          <img src="france-identite.svg" alt="France Identité Numérique" className="h-12" />
          <img src="france-connect.svg" alt="France Connect" className="h-12" />
        </div>
      </div>
    </section>

    {/* Split Sections */}
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        {/* First Split */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#FF6D00]">Organiser</span>{' '}
              <span className="text-[#0052FF]">votre</span>{' '}
              <br />vie d'aidant
            </h2>
            <p className="text-gray-600 mb-6">
              Tableau de bord de gestion des démarches administratives,
              <br />Agenda partagés entre aidant,
              <br />coffre fort numérique.
            </p>
            <button className="px-6 py-2 border border-[#0052FF] text-[#0052FF] rounded-full hover:bg-[#0052FF] hover:text-white transition-colors">
              En savoir plus
            </button>
          </div>
          <div className="flex-1">
            <img 
              src="/dashboard-mockup.png" 
              alt="Dashboard"
              className="w-full rounded-lg shadow-lg"
              style={{ content: 'url("data:image/svg+xml,%3Csvg width=\'600\' height=\'400\' viewBox=\'0 0 600 400\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23F5F5F5\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'24\' fill=\'%23666\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3E[Mockup visuel]%3C/text%3E%3C/svg%3E")' }}
            />
          </div>
        </div>

        {/* Second Split (Mirrored) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#FF6D00]">Organiser</span>{' '}
              <span className="text-[#0052FF]">votre</span>{' '}
              <br />vie d'aidant
            </h2>
            <p className="text-gray-600 mb-6">
              Tableau de bord de gestion des démarches administratives,
              <br />Agenda partagés entre aidant,
              <br />coffre fort numérique.
            </p>
            <button className="px-6 py-2 border border-[#0052FF] text-[#0052FF] rounded-full hover:bg-[#0052FF] hover:text-white transition-colors">
              En savoir plus
            </button>
          </div>
          <div className="flex-1">
            <img 
              src="/dashboard-mockup-2.png" 
              alt="Dashboard"
              className="w-full rounded-lg shadow-lg"
              style={{ content: 'url("data:image/svg+xml,%3Csvg width=\'600\' height=\'400\' viewBox=\'0 0 600 400\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'600\' height=\'400\' fill=\'%23F5F5F5\'/%3E%3Ctext x=\'300\' y=\'200\' font-family=\'Arial\' font-size=\'24\' fill=\'%23666\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3E[Mockup visuel]%3C/text%3E%3C/svg%3E")' }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="w-full bg-[#FFF4EE] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Tarification</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choisissez l'abonnement pour une utilisation illimitée ou optez pour le paiement par prestation pour répondre à vos besoins ponctuels.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Solo Plan */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Forfait solo</h3>
            <div className="text-3xl font-bold text-[#0052FF] mb-6">5€<span className="text-lg text-gray-500">/mois</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Carte statut aidant
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                L'outil d'organisation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Coffre fort numérique
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-[#FF6D00] text-white rounded-full hover:bg-orange-600 transition-colors">
              Obtenir les services Lumea
            </button>
          </div>

          {/* Family Plan */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Forfait famille</h3>
            <div className="text-3xl font-bold text-[#0052FF] mb-6">10€<span className="text-lg text-gray-500">/mois</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Jusqu'à 5 aidants
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Coffre fort numérique
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Recommandations ciblées
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-[#0052FF] text-white rounded-full hover:bg-blue-600 transition-colors">
              Je m'organise avec Lumea
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="w-full bg-[#0052FF] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1: LUMEA */}
          <div>
            <h4 className="font-bold mb-4">LUMEA</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Coffre fort numérique</a></li>
              <li><a href="#" className="hover:underline">Registre aidant aux démarches administratives</a></li>
              <li><a href="#" className="hover:underline">Suivi des démarches</a></li>
              <li><a href="#" className="hover:underline">Carte Lumea</a></li>
            </ul>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="font-bold mb-4">Lumea</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">À propos</a></li>
              <li><a href="#" className="hover:underline">Partenaires</a></li>
              <li><a href="#" className="hover:underline">Contactez-nous</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Inscrivez-vous à notre newsletter</h4>
            <div className="bg-[#003EBF] p-6 rounded-xl">
              <p className="text-sm mb-4">
                Recevez tous les mois nos nouveautés pour être informé de l'avancement de nos services technologiques et de nos offres.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 rounded-full text-gray-900"
                />
                <button className="px-6 py-2 bg-[#FF6D00] rounded-full hover:bg-orange-600 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-[#003EBF] flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">Mentions légales</a>
            <a href="#" className="hover:underline">Politique de confidentialité</a>
            <a href="#" className="hover:underline">CGU</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </Layout>
);

// Feature data
const features = [
  {
    title: "La Carte Lumea",
    description: "Un justificatif officiel pour représenter votre proche sans tutelle ni paperasse à répétition."
  },
  {
    title: "Un outil de gestion intuitif",
    description: "Visualisez toutes vos démarches en un seul endroit, avec des rappels automatiques et un tableau de bord clair."
  },
  {
    title: "Un coffre-fort numérique sécurisé",
    description: "Conservez et retrouvez tous les documents essentiels : identifiants, ordonnances, aides sociales..."
  },
  {
    title: "Un accompagnement complet",
    description: "Lumea vous guide à chaque étape, avec des checklists personnalisées."
  },
  {
    title: "Une app miroir pour la personne aidée",
    description: "Elle reste informée de ce que vous gérez pour elle, avec transparence et autonomie respectée."
  },
  {
    title: "Un allègement de la charge mentale",
    description: "Moins de stress, moins d'incertitudes. Vous êtes soutenu, organisé et reconnu dans votre rôle."
  }
];

export default HomePage; 