import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Menu from "../components/header/Menu";

function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleAuthProtectedClick = (e, targetPath) => {
    e.preventDefault();
    const token = localStorage.getItem("token") || JSON.parse(localStorage.getItem("userInfo") || "null")?.token;

    if (!token) {
      navigate("/se-connecter");
    } else {
      navigate(targetPath);
    }
  };

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
              <button
                type="button"
                onClick={(e) => handleAuthProtectedClick(e, "/faire-don")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-lg transition-all transform hover:-translate-y-0.5 text-center cursor-pointer border-0"
              >
                Faire un don
              </button>
              <button
                type="button"
                onClick={(e) => handleAuthProtectedClick(e, "/demande-aide")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold shadow-lg border border-slate-700 transition-all text-center cursor-pointer"
              >
                Demander de l'aide
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-700 shadow-2xl space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xl">
                  🤝
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Impact Solidaire</h3>
                  <p className="text-sm text-slate-400">Rejoignez notre réseau de solidarité</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50 text-center">
                  <span className="block text-2xl font-extrabold text-emerald-400">100%</span>
                  <span className="text-xs text-slate-400">Gratuit & Bénévole</span>
                </div>
                <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50 text-center">
                  <span className="block text-2xl font-extrabold text-teal-400">24/7</span>
                  <span className="text-xs text-slate-400">Mise en relation</span>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => handleAuthProtectedClick(e, "/faire-don")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold shadow-md hover:opacity-95 transition-all text-sm cursor-pointer border-0"
              >
                Proposer un don maintenant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Comment fonctionne MediGive ?</h2>
            <p className="text-slate-600 mt-3 text-base">Un processus simple, transparent et sécurisé pour donner et recevoir.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 text-center space-y-4 hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900">Proposez ou Demandez</h3>
              <p className="text-slate-600 text-sm">
                Enregistrez votre appareil médical ou médicament, ou soumettez une demande d'aide détaillée.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 text-center space-y-4 hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900">Mise en Relation</h3>
              <p className="text-slate-600 text-sm">
                Notre plateforme et nos bénévoles connectent les donneurs avec les personnes dans le besoin près de chez vous.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 text-center space-y-4 hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900">Remise & Solidarité</h3>
              <p className="text-slate-600 text-sm">
                Finalisez la remise du matériel en toute sécurité et offrez une nouvelle vie à ces équipements vitaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Foire Aux Questions</h2>
            <p className="text-slate-600 mt-2">Tout ce que vous devez savoir sur le fonctionnement de la plateforme.</p>
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
