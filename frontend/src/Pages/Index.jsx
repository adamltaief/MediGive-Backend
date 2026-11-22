import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Menu from "../components/header/Menu";

function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState(null);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      toast.error("Veuillez remplir tous les champs du formulaire de contact.");
      return;
    }
    toast.success("Votre message a été envoyé avec succès ! Nous vous répondrons rapidement.");
    setContactName("");
    setContactEmail("");
    setContactMessage("");
  };

  const faqs = [
    {
      q: "Comment puis-je savoir si un médicament peut être donné ?",
      a: "Les médicaments donnés doivent obligatoirement être non ouverts, dans leur emballage d'origine, et leur date d'expiration doit être d'au moins 6 mois. Les médicaments entamés ou réfrigérés ne sont pas acceptés."
    },
    {
      q: "Comment se déroule la remise du matériel médical ?",
      a: "Une fois que vous proposez un don, un bénévole ou le demandeur coordonne directement avec vous pour la remise en main propre ou via un point de collecte partenaire."
    },
    {
      q: "MediGive est-il un service gratuit ?",
      a: "Oui ! MediGive est une plateforme 100% bénévole et solidaire. Aucun frais n'est prélevé sur les dons de matériel ou de médicaments."
    },
    {
      q: "Comment faire si j'ai besoin d'un équipement urgent ?",
      a: "Vous pouvez consulter la liste des dons disponibles ou soumettre directement une demande dans la section 'Demander de l'aide'."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-20">
      <Menu />
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
              <span>Solidarité Médicale Solidaire</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Donnez une seconde vie à votre <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">matériel médical</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
              MediGive connecte les donateurs, les associations et les personnes dans le besoin pour faciliter le don d'appareils et de médicaments en toute sécurité.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Link
                to="/faire-don"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-lg transition-all transform hover:-translate-y-0.5 text-center"
              >
                Faire un don
              </Link>
              <Link
                to="/demande-aide"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all text-center"
              >
                Demander de l'aide
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 p-8 rounded-3xl border border-emerald-500/30 backdrop-blur-xl shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Appareils Médicaux</h4>
                    <p className="text-xs text-slate-400">Fauteuils, lits médicalisés, béquilles...</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <div className="p-3 bg-teal-500/20 text-teal-400 rounded-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Médicaments Sécurisés</h4>
                    <p className="text-xs text-slate-400">Non périmés, validés et vérifiés</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Dons Financiers & Virements</h4>
                    <p className="text-xs text-slate-400">Soutien direct aux actions médicales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="bg-emerald-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold">1,450+</p>
            <p className="text-emerald-100 text-sm mt-1">Équipements Donnés</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold">920+</p>
            <p className="text-emerald-100 text-sm mt-1">Familles Aidées</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold">35+</p>
            <p className="text-emerald-100 text-sm mt-1">Villes Couvertes</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold">100%</p>
            <p className="text-emerald-100 text-sm mt-1">Solidarité & Bénévolat</p>
          </div>
        </div>
      </section>

      {/* Features / Action Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Comment participer ?</h2>
          <p className="text-slate-600 mt-2">Choisissez comment vous souhaitez contribuer à notre communauté solidaire.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Faire un Don</h3>
              <p className="text-slate-600 text-sm mb-6">
                Vous possédez du matériel médical dont vous n'avez plus besoin ou des médicaments non ouverts ? Proposez-les aux personnes qui en ont urgemment besoin.
              </p>
            </div>
            <Link
              to="/faire-don"
              className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Proposer un don <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Consulter les Besoins</h3>
              <p className="text-slate-600 text-sm mb-6">
                Parcourez la liste des demandes urgentes publiées par des personnes dans le besoin ou des associations partenaires.
              </p>
            </div>
            <Link
              to="/liste-besoins"
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Voir la liste des besoins <span className="ml-2">&rarr;</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Demander de l'Aide</h3>
              <p className="text-slate-600 text-sm mb-6">
                Vous avez besoin d'un équipement ou d'un traitement spécifique ? Soumettez votre demande en toute confidentialité.
              </p>
            </div>
            <Link
              to="/demande-aide"
              className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-700"
            >
              Faire une demande <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section className="bg-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Témoignages de Solidarité</h2>
            <p className="text-slate-600 mt-2">Découvrez comment MediGive change des vies au quotidien.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <p className="text-slate-700 italic mb-6">
                "Grâce à MediGive, j'ai pu trouver un fauteuil roulant pour mon père en moins de 48 heures. La simplicité et la bienveillance de la communauté sont extraordinaires."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Mohamed K.</h4>
                  <p className="text-xs text-slate-500">Bénéficiaire à Tunis</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <p className="text-slate-700 italic mb-6">
                "J'avais un lit médicalisé inutilisé après la guérison d'un membre de la famille. Le proposer sur MediGive m'a permis d'aider directement une personne dans le besoin près de chez moi."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Sonia B.</h4>
                  <p className="text-xs text-slate-500">Donatrice à Sousse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Foire Aux Questions (FAQ)</h2>
          <p className="text-slate-600 mt-2">Tout ce que vous devez savoir sur le don et la demande de matériel médical.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-semibold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-emerald-600 font-bold text-lg">{openFaq === idx ? "−" : "+"}</span>
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-4 text-slate-600 text-sm border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Contactez-Nous</h2>
            <p className="text-slate-400 mt-2">Vous avez une question, une suggestion ou souhaitez devenir partenaire ? Écrivez-nous.</p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-6 bg-slate-800/80 p-8 rounded-2xl border border-slate-700 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Votre Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                  placeholder="Nom complet"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Votre Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                  placeholder="votre@email.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Votre Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                rows={4}
                placeholder="Comment pouvons-nous vous aider ?"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-md transition-all"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm">&copy; {new Date().getFullYear()} MediGive. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0 text-sm">
            <Link to="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link to="/conditions-utilisation" className="hover:text-white transition-colors">Conditions d'utilisation</Link>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
