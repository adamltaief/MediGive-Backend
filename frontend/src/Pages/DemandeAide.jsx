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
  const [categorie, setCategorie] = useState("appareil");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titre.trim() || !description.trim() || !ville.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token") || JSON.parse(localStorage.getItem("userInfo") || "{}")?.token;

      const response = await fetch("http://localhost:8000/api/demandes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          titre,
          description,
          wilaya: ville,
          categorie,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Votre demande d'aide a été enregistrée avec succès !");
        setTitre("");
        setDescription("");
        setVille("");
      } else {
        toast.error(data.message || "Une erreur est survenue.");
      }
    } catch (err) {
      toast.error("Impossible de se connecter au serveur backend.");
    } finally {
      setLoading(false);
    }
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
              <label className="block text-sm font-medium text-slate-700 mb-1">Catégorie</label>
              <select
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none text-sm bg-white"
              >
                <option value="appareil">Appareil Médical</option>
                <option value="medicament">Médicaments</option>
                <option value="virement">Aide Financière (Virement)</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Titre de la demande</label>
              <input
                type="text"
                placeholder="Ex: Recherche fauteuil roulant"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Ville / Région</label>
              <input
                type="text"
                placeholder="Ex: Tunis, Sousse, Sfax, Alger..."
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Description détaillée</label>
              <textarea
                rows={4}
                placeholder="Précisez vos besoins et votre situation..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-sm transition-all disabled:opacity-50"
            >
              {loading ? "Enregistrement..." : "Publier la demande"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DemandeAide;
