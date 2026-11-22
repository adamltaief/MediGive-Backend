import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Menu from "../components/header/Menu";

function PropAide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [disponibilite, setDisponibilite] = useState("");
  const [zonegeo, setZonegeo] = useState("");
  const [secteur, setSecteur] = useState("");
  const [message, setMessage] = useState("");

  const formsubmitHandler = (e) => {
    e.preventDefault();
    if (disponibilite.trim() === "") {
      toast.error("La disponibilité est requise");
      return;
    }
    if (zonegeo.trim() === "") {
      toast.error("La zone géographique est requise");
      return;
    }
    if (secteur.trim() === "") {
      toast.error("Le champ d'aide est requis");
      return;
    }
    toast.success("Votre proposition d'aide a été envoyée avec succès !");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />
      <ToastContainer position="top-right" autoClose={3000} />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-8 sm:p-10">
          <div className="text-center mb-8">
            <span className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Proposer de l'Aide
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Insérez les informations de votre proposition d'aide.
            </p>
          </div>

          <form onSubmit={formsubmitHandler} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Disponibilité</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                placeholder="Ex: Soirs et weekends"
                value={disponibilite}
                onChange={(e) => setDisponibilite(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Zone géographique de disponibilité</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                placeholder="Ex: Tunis, Ariana"
                value={zonegeo}
                onChange={(e) => setZonegeo(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Comment souhaitez-vous aider ?</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                rows={4}
                placeholder="Décrivez votre aide..."
                value={secteur}
                onChange={(e) => setSecteur(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message supplémentaire</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                rows={3}
                placeholder="Informations additionnelles..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Envoyer la proposition
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default PropAide;
