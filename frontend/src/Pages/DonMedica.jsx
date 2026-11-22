import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Menu from "../components/header/Menu";

function DonMedica() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [libelle, setLibelle] = useState("");
  const [quantite, setQuantite] = useState("");
  const [dateexpiration, setDateexpiration] = useState("");
  const [lieustockage, setLieustockage] = useState("");
  const [etat, setEtat] = useState("");
  const [maladie, setMaladie] = useState("");
  const [description, setDescription] = useState("");

  const formsubmitHandler = (e) => {
    e.preventDefault();
    if (!libelle.trim()) { toast.error("Le libellé est requis"); return; }
    if (!quantite.trim()) { toast.error("La quantité est requise"); return; }
    if (!dateexpiration.trim()) { toast.error("La date d'expiration est requise"); return; }
    if (!lieustockage.trim()) { toast.error("Le lieu de stockage est requis"); return; }
    if (!etat.trim()) { toast.error("L'état est requis"); return; }
    if (!maladie.trim()) { toast.error("La maladie est requise"); return; }
    if (!description.trim()) { toast.error("La description est requise"); return; }

    toast.success("Don de médicament enregistré avec succès !");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />
      <ToastContainer position="top-right" autoClose={3000} />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-8 sm:p-10">
          <div className="text-center mb-8">
            <span className="inline-block p-3 rounded-full bg-teal-100 text-teal-600 mb-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Donner des Médicaments
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Renseignez les détails concernant les médicaments que vous souhaitez donner.
            </p>
          </div>

          <form onSubmit={formsubmitHandler} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Libellé</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-sm"
                placeholder="Ex: Boîte de Paracétamol 1000mg"
                value={libelle}
                onChange={(e) => setLibelle(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Quantité</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-sm"
                  placeholder="Ex: 3"
                  value={quantite}
                  onChange={(e) => setQuantite(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Date d'expiration</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-sm"
                  value={dateexpiration}
                  onChange={(e) => setDateexpiration(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Lieu de stockage</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-sm"
                placeholder="Ex: Sfax, Tunis..."
                value={lieustockage}
                onChange={(e) => setLieustockage(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">État</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-sm"
                  placeholder="Ex: Neuf, Scellé"
                  value={etat}
                  onChange={(e) => setEtat(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Maladie ciblée</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-sm"
                  placeholder="Ex: Douleurs, Fièvre"
                  value={maladie}
                  onChange={(e) => setMaladie(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-sm"
                rows={4}
                placeholder="Informations supplémentaires..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Soumettre le don de médicament
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DonMedica;
