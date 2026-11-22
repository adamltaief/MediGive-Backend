import React, { useEffect, useState } from "react";
import Menu from "../components/header/Menu";
import { useNavigate } from "react-router-dom";

function ListeDisponibles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const disponibles = [
    { id: 1, titre: "Chaise Perchée / Garde-robe médicale", categorie: "Appareil", lieu: "Tunis", etat: "Très bon état", description: "Chaise gardée en parfait état, désinfectée et prête à l'emploi." },
    { id: 2, titre: "Boîte de Pansements Stériles", categorie: "Médicament", lieu: "Bizerte", etat: "Neuf", description: "Lot de pansements stériles non ouverts, date d'expiration lointaine." },
    { id: 3, titre: "Déambulateur Adulte", categorie: "Appareil", lieu: "Sousse", etat: "Bon état", description: "Déambulateur pliable réglable en hauteur." }
  ];

  const filtered = disponibles.filter(d => 
    d.titre.toLowerCase().includes(search.toLowerCase()) || 
    d.lieu.toLowerCase().includes(search.toLowerCase()) ||
    d.categorie.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Dons Disponibles</h1>
            <p className="text-slate-600 mt-1">Parcourez les équipements et médicaments actuellement disponibles au don.</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <input
              type="text"
              placeholder="Rechercher par titre, ville..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-80 px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm bg-white shadow-sm"
            />
            <button
              onClick={() => navigate('/faire-don')}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-sm text-sm whitespace-nowrap"
            >
              + Proposer un don
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200">
                    {item.categorie}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    {item.etat}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.titre}</h3>
                <p className="text-slate-600 text-sm mb-4">{item.description}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {item.lieu}
                </span>
                <button
                  onClick={() => navigate('/demande-don')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm transition-colors text-xs"
                >
                  Demander ce don
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ListeDisponibles;
