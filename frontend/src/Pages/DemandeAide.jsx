import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Menu from "../components/header/Menu";

function DemandeAide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const formsubmitHandler = (e) => {
    e.preventDefault();
    if (type.trim() === "") {
      toast.error("Le type est requis");
      return;
    }
    if (description.trim() === "") {
      toast.error("La description est requise");
      return;
    }
    toast.success("Votre demande d'aide a été envoyée avec succès !");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />
      <ToastContainer position="top-right" autoClose={3000} />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-8 sm:p-10">
          <div className="text-center mb-8">
            <span className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Demande d'Aide Médicale
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Remplissez les informations ci-dessous pour soumettre votre demande d'aide.
            </p>
          </div>

          <form onSubmit={formsubmitHandler} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Type d'aide recherchée
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                placeholder="Ex: Médicament spécifique ou Appareil médical (Fauteuil...)"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Description détaillée
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                rows={5}
                placeholder="Expliquez votre situation médicale et la nécessité de cet équipement ou traitement..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Envoyer la demande
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DemandeAide;
