import Layout from '../layout/Layout';
import arrowIcon from '../assets/icons.svg';

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

const SplitSection = ({
  titleOrange,
  titleBlue,
  titleBlack,
  text,
  reverse = false,
}) => (
  <section className="w-full py-20">
    <div className={`container mx-auto px-4 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
      <div className="flex-1">
        <h2 className="text-[40px] md:text-[44px] font-bold leading-tight mb-6">
          <span className="text-[#FF6D00]">{titleOrange} </span>
          <span className="text-[#0052FF]">{titleBlue} </span>
          <span className="text-[#222] font-black">{titleBlack}</span>
        </h2>
        <div className="text-[#444] text-lg md:text-xl leading-relaxed mb-8 whitespace-pre-line">{text}</div>
        <button className="inline-flex items-center px-8 py-3 border-2 border-[#0052FF] text-[#0052FF] rounded-full font-semibold text-lg hover:bg-[#F5F8FF] transition-colors group">
          En savoir plus
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="#0052FF" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <Layout>
    {/* Hero Section */}
    <section className="w-full bg-white pt-28 pb-20 font-sans">
      <div className="container mx-auto px-4">
        <h1 className="text-[56px] font-bold text-[#003FE3] text-center leading-tight max-w-[743px] mx-auto font-heading tracking-tight">
          Vous prenez soin d'un proche.<br />Qui prend soin de vous ?
        </h1>
        <p className="text-[24px] text-[#003FE3] text-center max-w-[592px] mx-auto font-normal leading-[130%] tracking-[-0.24px] mt-8">
          Lumea est votre copilote pour toutes les démarches administratives, médicales et familiales.
        </p>
        <div className="text-center mt-12">
          <button className="h-[52px] inline-flex items-center justify-center px-8 py-3 bg-[#FF6D00] text-white rounded-full gap-3 hover:bg-[#E56200] transition-colors text-[22px] font-semibold leading-[140%] tracking-[-0.2px] shadow-lg">
            <span>Découvrir Lumea</span>
            <img src={arrowIcon} alt="→" className="w-6 h-6" />
          </button>
        </div>
        {/* Illustration centrale */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-full max-w-[1100px] rounded-[32px] bg-gradient-to-b from-[#EAF2FF] to-[#3B82F6] shadow-2xl px-8 pt-16 pb-12 flex flex-col items-center">
            <div className="relative z-20 flex flex-col md:flex-row justify-between gap-8 mt-12 w-full">
              <div className="bg-white rounded-[24px] p-8 flex-1 shadow-lg border border-[#EAF2FF] min-w-[280px]">
                <h3 className="text-[22px] font-bold text-[#FF6D00] mb-3 font-heading">Moins de charge mentale</h3>
                <p className="text-[#003FE3] text-[16px] leading-[140%] font-normal">Lumea automatise l'organisation des démarches, vous rappelle les échéances importantes et vous guide pas à pas selon votre situation.</p>
              </div>
              <div className="bg-white rounded-[24px] p-8 flex-1 shadow-lg border border-[#EAF2FF] min-w-[280px]">
                <h3 className="text-[22px] font-bold text-[#FF6D00] mb-3 font-heading">Tout au même endroit</h3>
                <p className="text-[#003FE3] text-[16px] leading-[140%] font-normal">Un coffre-fort numérique sécurisé pour stocker tous les documents utiles, et des dossiers organisés automatiquement selon les besoins (APA, MDPH, mutuelle...).</p>
              </div>
              <div className="bg-white rounded-[24px] p-8 flex-1 shadow-lg border border-[#EAF2FF] min-w-[280px]">
                <h3 className="text-[22px] font-bold text-[#FF6D00] mb-3 font-heading">Une coordination facilitée</h3>
                <p className="text-[#003FE3] text-[16px] leading-[140%] font-normal">Partagez les rendez-vous et les informations avec les autres aidants ou soignants grâce à un calendrier commun et un espace collaboratif.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="w-full bg-[#0052FF] py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-[#EAF2FF] flex flex-col items-start">
              <h3 className="text-[#0052FF] font-semibold text-xl mb-2 font-heading">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Partners Logos Section */}
    <section className="w-full bg-[#F8FAFF] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-16 flex-wrap">
          <img src="assurance-maladie.svg" alt="L'Assurance Maladie" className="h-14" />
          <img src="docaposte.svg" alt="Docaposte" className="h-14" />
          <img src="france-identite.svg" alt="France Identité Numérique" className="h-14" />
          <img src="france-connect.svg" alt="France Connect" className="h-14" />
        </div>
      </div>
    </section>

    {/* Section 1 : Gestion intelligente des démarches */}
    <SplitSection
      titleOrange="Gestion intelligente"
      titleBlue="des démarches"
      titleBlack=""
      text={
        `Grâce à un questionnaire de départ, Lumea identifie les démarches adaptées à votre situation (APA, MDPH, mutuelle, procuration...) et vous guide étape par étape avec des checklists automatiques.\n\nImportez vos fichiers une seule fois : Lumea les analyse, les classe par démarche et les duplique si besoin. Plus besoin de chercher ou de scanner à répétition.`
      }
      reverse={false}
    />

    {/* Section 2 : Espace collaboratif pensé pour les aidants */}
    <SplitSection
      titleOrange="Espace collaboratif"
      titleBlue="pensé pour les aidants"
      titleBlack=""
      text={
        `Un espace centralisé pour stocker tous les documents essentiels (pièce d'identité, justificatifs, ordonnances...), accessible en un clic, même en mobilité.\n\nVisualisez tous les rendez-vous médicaux et échéances à venir. Coordonnez-vous facilement avec les autres aidants et les soignants.\n\nAjoutez des aidants secondaires ou des professionnels. L'accès aux infos peut être ajusté selon les rôles. Vous n'êtes plus seul(e) à tout gérer.`
      }
      reverse={true}
    />

    {/* Pricing Section */}
    <section className="w-full bg-[#FFF4EE] py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 font-heading">Tarification</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">Choisissez l'abonnement pour une utilisation illimitée ou optez pour le paiement par prestation pour répondre à vos besoins ponctuels.</p>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Solo Plan */}
          <div className="bg-white rounded-2xl p-10 shadow-lg flex flex-col items-center border border-[#EAF2FF]">
            <h3 className="text-2xl font-bold mb-2 font-heading">Forfait solo</h3>
            <div className="text-4xl font-bold text-[#0052FF] mb-8">5€<span className="text-lg text-gray-500">/mois</span></div>
            <ul className="space-y-4 mb-10 w-full">
              <li className="flex items-center text-lg"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Carte statut aidant</li>
              <li className="flex items-center text-lg"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>L'outil d'organisation</li>
              <li className="flex items-center text-lg"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Coffre fort numérique</li>
            </ul>
            <button className="w-full px-8 py-4 bg-[#FF6D00] text-white rounded-full hover:bg-orange-600 transition-colors font-semibold text-lg">Obtenir les services Lumea</button>
          </div>
          {/* Family Plan */}
          <div className="bg-white rounded-2xl p-10 shadow-lg flex flex-col items-center border border-[#EAF2FF]">
            <h3 className="text-2xl font-bold mb-2 font-heading">Forfait famille</h3>
            <div className="text-4xl font-bold text-[#0052FF] mb-8">10€<span className="text-lg text-gray-500">/mois</span></div>
            <ul className="space-y-4 mb-10 w-full">
              <li className="flex items-center text-lg"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Jusqu'à 5 aidants</li>
              <li className="flex items-center text-lg"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Coffre fort numérique</li>
              <li className="flex items-center text-lg"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Recommandations ciblées</li>
            </ul>
            <button className="w-full px-8 py-4 bg-[#0052FF] text-white rounded-full hover:bg-blue-600 transition-colors font-semibold text-lg">Je m'organise avec Lumea</button>
          </div>
        </div>
      </div>
    </section>

    {/* Footer Figma */}
    <footer className="w-full bg-[#0052FF] text-white pt-20 pb-10 mt-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Colonne 1 */}
          <div>
            <h4 className="font-bold mb-6 text-lg uppercase tracking-wide">LUMEA</h4>
            <ul className="space-y-3 text-base">
              <li>Coffre fort numérique</li>
              <li>Planneur adapté aux aidants !</li>
              <li>Suivi des démarches administratives</li>
              <li>Carte Lumea</li>
            </ul>
          </div>
          {/* Colonne 2 */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Lumea</h4>
            <ul className="space-y-3 text-base">
              <li>A propos</li>
              <li>Partenaires</li>
              <li>Contactez nous</li>
            </ul>
          </div>
          {/* Colonne 3 : Newsletter */}
          <div>
            <div className="bg-[#0033B3] rounded-[36px] p-10 flex flex-col gap-6">
              <div className="flex items-start mb-2">
                <span className="text-2xl mr-3 mt-1">👉</span>
                <span className="font-bold text-2xl leading-tight">Inscrivez vous à notre<br/>newsletter</span>
              </div>
              <form className="flex w-full mb-2">
                <input type="email" placeholder="Adresse Email" className="flex-1 h-[56px] px-6 rounded-l-[18px] text-[#0033B3] text-lg font-medium placeholder-gray-400 outline-none bg-white border-none" style={{minWidth:'0'}} />
                <button type="submit" className="h-[56px] w-[56px] bg-[#002288] rounded-r-[18px] flex items-center justify-center -ml-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
              </form>
              <p className="text-lg text-white opacity-90 leading-snug">Abonnez-vous à notre newsletter pour être informé du lancement officiel, des nouvelles fonctionnalités et des mises à jour importantes.</p>
            </div>
          </div>
        </div>
        {/* Ligne de séparation */}
        <div className="border-t border-white border-opacity-20 my-10"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo bas gauche */}
          <div className="mb-4 md:mb-0">
            <img src="/logo-light.svg" alt="Lumea logo" className="h-12 w-12" />
          </div>
          {/* Mentions */}
          <div className="flex gap-8 text-base font-medium">
            <a href="#" className="hover:underline">Mentions légales</a>
            <a href="#" className="hover:underline">Politiques de confidentialité</a>
            <a href="#" className="hover:underline">CGU</a>
          </div>
          {/* Réseaux sociaux */}
          <div className="flex gap-4">
            <a href="#" className="rounded-full border border-white border-opacity-30 p-2 hover:bg-white hover:bg-opacity-10 transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 01-12 0C4 5.238 6.238 3 9 3s5 2.238 5 5z"/><circle cx="12" cy="12" r="10"/></svg></a>
            <a href="#" className="rounded-full border border-white border-opacity-30 p-2 hover:bg-white hover:bg-opacity-10 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 8.99 4.07 7.13 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.28 4.28 0 01-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.54c-.28 0-.56-.02-.83-.05A12.13 12.13 0 006.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 4.59a8.36 8.36 0 01-2.54.7z"/></svg></a>
            <a href="#" className="rounded-full border border-white border-opacity-30 p-2 hover:bg-white hover:bg-opacity-10 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 8.99 4.07 7.13 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.28 4.28 0 01-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.54c-.28 0-.56-.02-.83-.05A12.13 12.13 0 006.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 4.59a8.36 8.36 0 01-2.54.7z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  </Layout>
);

export default HomePage; 