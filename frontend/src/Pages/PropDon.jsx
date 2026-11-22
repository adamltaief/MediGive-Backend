import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Menu from "../components/header/Menu";

function PropDon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [libelle, setLibelle] = useState("");
  const [quantite, setQuantite] = useState("");
  const [dateexpiration, setDateexpiration] = useState("");
  const [lieustockage, setLieustockage] = useState("");
  const [posologie, setPosologie] = useState("");
  const [maladie, setMaladie] = useState("");
  const [description, setDescription] = useState("");

  const formsubmitHandler = (e) => {
    e.preventDefault();
    if (libelle.trim() === "") {
      toast.error("Le libellé est requis");
      return;
    }
    if (quantite.trim() === "") {
      toast.error("La quantité est requise");
      return;
    }
    if (dateexpiration.trim() === "") {
      toast.error("La date d'expiration est requise");
      return;
    }
    if (lieustockage.trim() === "") {
      toast.error("Le lieu de stockage est requis");
      return;
    }
    toast.success("Votre proposition de don a été envoyée avec succès !");
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Proposer un Don
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Remplissez les détails concernant le matériel ou médicament que vous souhaitez donner.
            </p>
          </div>

          <form onSubmit={formsubmitHandler} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Libellé</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                placeholder="Ex: Fauteuil roulant / Boîte de paracétamol"
                value={libelle}
                onChange={(e) => setLibelle(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Quantité</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                  placeholder="Ex: 2"
                  value={quantite}
                  onChange={(e) => setQuantite(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Date d'expiration</label>
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
                placeholder="Ex: Tunis, Ariana"
                value={lieustockage}
                onChange={(e) => setLieustockage(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Posologie (si médicament)</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                  placeholder="Ex: 1 comprimé par jour"
                  value={posologie}
                  onChange={(e) => setPosologie(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Maladie ciblée (optionnel)</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                  placeholder="Ex: Diabète, Hypertension"
                  value={maladie}
                  onChange={(e) => setMaladie(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                rows={4}
                placeholder="Fournissez des détails supplémentaires sur l'état du matériel ou du médicament..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Envoyer la proposition de don
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default PropDon;
