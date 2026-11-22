import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Menu from "../components/header/Menu";

function DonAppareil() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [libelle, setLibelle] = useState("");
  const [quantite, setQuantite] = useState("");
  const [dateexpiration, setDateexpiration] = useState("");
  const [lieustockage, setLieustockage] = useState("");
  const [etat, setEtat] = useState("");
  const [categorie, setCategorie] = useState("");
  const [description, setDescription] = useState("");

  const formsubmitHandler = (e) => {
    e.preventDefault();
    if (!libelle.trim()) { toast.error("Le libellé est requis"); return; }
    if (!quantite.trim()) { toast.error("La quantité est requise"); return; }
    if (!dateexpiration.trim()) { toast.error("La date d'expiration est requise"); return; }
    if (!lieustockage.trim()) { toast.error("Le lieu de stockage est requis"); return; }
    if (!etat.trim()) { toast.error("L'état est requis"); return; }
    if (!categorie.trim()) { toast.error("La catégorie est requise"); return; }
    if (!description.trim()) { toast.error("La description est requise"); return; }

    toast.success("Don d'appareil enregistré avec succès !");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />
      <ToastContainer position="top-right" autoClose={3000} />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-8 sm:p-10">
          <div className="text-center mb-8">
            <span className="inline-block p-3 rounded-full bg-emerald-100 text-emerald-600 mb-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Donner un Appareil Médical
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Remplissez les détails de l'appareil médical que vous souhaitez donner.
            </p>
          </div>

          <form onSubmit={formsubmitHandler} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Libellé</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                placeholder="Ex: Fauteuil roulant électrique"
                value={libelle}
                onChange={(e) => setLibelle(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Quantité</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                  placeholder="Ex: 1"
                  value={quantite}
                  onChange={(e) => setQuantite(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Date d'expiration / Vérification</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                  value={dateexpiration}
                  onChange={(e) => setDateexpiration(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Lieu de stockage</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                placeholder="Ex: Tunis, Sfax..."
                value={lieustockage}
                onChange={(e) => setLieustockage(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">État</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                  placeholder="Ex: Très bon état, Neuf"
                  value={etat}
                  onChange={(e) => setEtat(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Catégorie</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                  placeholder="Ex: Mobilité, Soins à domicile"
                  value={categorie}
                  onChange={(e) => setCategorie(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                rows={4}
                placeholder="Détails sur l'appareil..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Soumettre le don d'appareil
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DonAppareil;
