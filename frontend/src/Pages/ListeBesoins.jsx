import React, { useEffect, useState } from "react";
import Menu from "../components/header/Menu";

function ListeBesoins() {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categorie, setCategorie] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDemandes();
  }, [categorie, search]);

  const fetchDemandes = async () => {
    setLoading(true);
    try {
      let url = "http://localhost:8000/api/demandes?";
      if (categorie) url += `categorie=${categorie}&`;
      if (search) url += `search=${encodeURIComponent(search)}&`;

      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) {
        setDemandes(data.demandes || []);
      }
    } catch (err) {
      console.error("Erreur de chargement des demandes:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900">Liste des Besoins Signalés</h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Consultez les demandes d'aide et apportez votre soutien aux personnes dans le besoin.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Rechercher par mot-clé..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          <select
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
          >
            <option value="">Toutes les catégories</option>
            <option value="appareil">Appareils Médicaux</option>
            <option value="medicament">Médicaments</option>
            <option value="virement">Virements / Aide financière</option>
          </select>
        </div>

        {/* List Grid */}
        {loading ? (
          <div className="text-center py-12 text-slate-500 font-medium">Chargement des données...</div>
        ) : demandes.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500">
            Aucune demande trouvée pour le moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demandes.map((d) => (
              <div key={d._id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 uppercase">
                      {d.categorie}
                    </span>
                    {d.urgent && (
                      <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-red-100 text-red-700 animate-pulse">
                        URGENT
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{d.titre}</h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">{d.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>📍 {d.wilaya || "Non spécifiée"}</span>
                  <span className="text-emerald-600 font-semibold">{d.statut || "En attente"}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default ListeBesoins;
