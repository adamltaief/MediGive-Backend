import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Menu from "../components/header/Menu";

function IncriDonateur() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [mot_de_passe, setMotdepasse] = useState("");

  const formsubmitHandler = (e) => {
    e.preventDefault();
    if (!nom.trim()) { toast.error("Le nom est requis"); return; }
    if (!prenom.trim()) { toast.error("Le prénom est requis"); return; }
    if (!email.trim()) { toast.error("L'email est requis"); return; }
    if (!mot_de_passe.trim()) { toast.error("Le mot de passe est requis"); return; }
    toast.success("Inscription donateur réussie !");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />
      <ToastContainer position="top-right" autoClose={3000} />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              S'inscrire comme Donateur
            </h1>
            <p className="text-sm text-slate-500 mt-2">Rejoignez notre communauté de donateurs.</p>
          </div>

          <form onSubmit={formsubmitHandler} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm"
                  placeholder="Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Prénom</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm"
                  placeholder="Prénom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mot de passe</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm"
                  placeholder="••••••••"
                  value={mot_de_passe}
                  onChange={(e) => setMotdepasse(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition-all mt-4"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default IncriDonateur;
