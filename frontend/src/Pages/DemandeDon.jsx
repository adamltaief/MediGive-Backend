import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Menu from "../components/header/Menu";

function DemandeDon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");

  const formsubmitHandler = (e) => {
    e.preventDefault();
    if (titre.trim() === "") {
      toast.error("Le titre est requis");
      return;
    }
    if (description.trim() === "") {
      toast.error("La description est requise");
      return;
    }
    toast.success("Votre demande de don a été envoyée avec succès !");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />
      <ToastContainer position="top-right" autoClose={3000} />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-8 sm:p-10">
          <div className="text-center mb-8">
            <span className="inline-block p-3 rounded-full bg-emerald-100 text-emerald-600 mb-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Demande de Don pour ce Produit
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Remplissez les détails pour faire votre demande de don.
            </p>
          </div>

          <form onSubmit={formsubmitHandler} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Titre de la demande
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                placeholder="Ex: Demande de fauteuil roulant"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Description détaillée
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                rows={5}
                placeholder="Expliquez votre situation médicale et la nécessité de ce don..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Envoyer la demande
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DemandeDon;
