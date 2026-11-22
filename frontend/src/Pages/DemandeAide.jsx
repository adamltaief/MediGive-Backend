import React, { useEffect, useState } from "react";
import Menu from "../components/header/Menu";
import { ToastContainer, toast } from "react-toastify";

function DemandeAide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [ville, setVille] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titre.trim() || !description.trim() || !ville.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    toast.success("Votre demande d'aide a été soumise avec succès !");
    setTitre("");
    setDescription("");
    setVille("");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />
      <ToastContainer position="top-right" autoClose={3000} />

      <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200">
          <div className="text-center mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 uppercase tracking-wider">
              Assistance
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Soumettre une Demande d'Aide
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Décrivez l'équipement ou le traitement dont vous avez besoin en toute confidentialité.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Titre de la demande</label>
              <input
                type="text"
                placeholder="Ex: Recherche fauteuil roulant"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Ville / Région</label>
              <input
                type="text"
                placeholder="Ex: Tunis, Sousse, Sfax..."
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Description détaillée</label>
              <textarea
                rows={4}
                placeholder="Précisez vos besoins et votre situation..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-sm transition-all"
            >
              Publier la demande
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DemandeAide;
