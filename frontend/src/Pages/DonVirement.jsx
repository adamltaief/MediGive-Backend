import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Menu from "../components/header/Menu";

function DonVirement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [nomcomplet, setNomcomplet] = useState("");
  const [email, setEmail] = useState("");
  const [addresse, setAddresse] = useState("");
  const [montant, setMontant] = useState("");
  const [modepaiement, setModepaiement] = useState("");
  const [zip, setZip] = useState("");
  const [note, setNote] = useState("");

  const numcompte = "12345678910";
  const nombanque = "UIB";
  const iban = "TN59 1234567891011121314";

  const formsubmitHandler = (e) => {
    e.preventDefault();
    if (!nomcomplet.trim()) { toast.error("Le nom complet est requis"); return; }
    if (!email.trim()) { toast.error("L'email est requis"); return; }
    if (!addresse.trim()) { toast.error("L'adresse est requise"); return; }
    if (!zip.trim()) { toast.error("Le code zip est requis"); return; }
    if (!montant.trim()) { toast.error("Le montant est requis"); return; }
    if (!modepaiement.trim()) { toast.error("Le mode de paiement est requis"); return; }

    toast.success("Virement enregistré avec succès ! Merci.");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />
      <ToastContainer position="top-right" autoClose={3000} />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-8 sm:p-10">
          <div className="text-center mb-8">
            <span className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Donation par Virement Financier
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Remplissez vos coordonnées et effectuez le virement vers les coordonnées bancaires ci-dessous.
            </p>
          </div>

          {/* Bank Info Box */}
          <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1 text-slate-700">
            <p><strong className="text-slate-900">Banque :</strong> {nombanque}</p>
            <p><strong className="text-slate-900">Numéro de Compte :</strong> {numcompte}</p>
            <p><strong className="text-slate-900">IBAN / SWIFT :</strong> {iban}</p>
          </div>

          <form onSubmit={formsubmitHandler} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                placeholder="Ex: Mohamed Ben Salah"
                value={nomcomplet}
                onChange={(e) => setNomcomplet(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Montant (TND)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                  placeholder="Ex: 100"
                  value={montant}
                  onChange={(e) => setMontant(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Adresse</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                  placeholder="Votre adresse"
                  value={addresse}
                  onChange={(e) => setAddresse(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Code Postal (ZIP)</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                  placeholder="Ex: 1001"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mode de paiement</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                placeholder="Ex: Virement bancaire, Chèque"
                value={modepaiement}
                onChange={(e) => setModepaiement(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Remarque / Note (optionnel)</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                rows={3}
                placeholder="Remarque..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Soumettre le virement
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DonVirement;
