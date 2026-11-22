import React, { useEffect, useState } from "react";
import Menu from "../components/header/Menu";
import { useNavigate } from "react-router-dom";

function ListeBesoins() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const besoins = [
    { id: 1, titre: "Fauteuil Roulant", categorie: "Appareil", lieu: "Tunis", urgence: "Haute", description: "Recherche urgente d'un fauteuil roulant pour personne à mobilité réduite." },
    { id: 2, titre: "Insuline (Boîte)", categorie: "Médicament", lieu: "Sfax", urgence: "Critique", description: "Besoin urgent de boîtes d'insuline pour traitement régulier." },
    { id: 3, titre: "Lits Médicalisés", categorie: "Appareil", lieu: "Sousse", urgence: "Moyenne", description: "Recherche lit médicalisé pour patient alité à domicile." },
    { id: 4, titre: "Béquilles orthopédiques", categorie: "Appareil", lieu: "Ariana", urgence: "Normale", description: "Paire de béquilles suite à une intervention chirurgicale." }
  ];

  const filteredBesoins = besoins.filter(b => 
    b.titre.toLowerCase().includes(search.toLowerCase()) || 
    b.lieu.toLowerCase().includes(search.toLowerCase()) ||
    b.categorie.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Liste des Besoins</h1>
            <p className="text-slate-600 mt-1">Consultez les demandes en cours exprimées par les bénéficiaires.</p>
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
              onClick={() => navigate('/demande-aide')}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-sm text-sm whitespace-nowrap"
            >
              + Faire une demande
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredBesoins.map((besoin) => (
            <div key={besoin.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {besoin.categorie}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    besoin.urgence === 'Critique' ? 'bg-red-100 text-red-700' :
                    besoin.urgence === 'Haute' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {besoin.urgence}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{besoin.titre}</h3>
                <p className="text-slate-600 text-sm mb-4">{besoin.description}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {besoin.lieu}
                </span>
                <button
                  onClick={() => navigate('/prop-aide')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm transition-colors text-xs"
                >
                  Répondre au besoin
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ListeBesoins;
