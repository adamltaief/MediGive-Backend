import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/header/Menu";

function ListeBesoins() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const needs = [
    { id: 1, title: "Fauteuil roulant manuel", category: "Appareil", seeker: "Leila M.", city: "Ariana", date: "2026-11-05", urgent: true },
    { id: 2, title: "Boîte d'Insuline Lantis", category: "Médicament", seeker: "Hassen T.", city: "Bizerte", date: "2026-11-06", urgent: true },
    { id: 3, title: "Lit médicalisé électrique", category: "Appareil", seeker: "Mohamed K.", city: "Tunis", date: "2026-11-04", urgent: false },
    { id: 4, title: "Béquilles ajustables", category: "Appareil", seeker: "Sonia B.", city: "Sousse", date: "2026-11-03", urgent: false }
  ];

  const filteredNeeds = needs.filter(n => 
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    n.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Besoins Actuels</h1>
            <p className="text-sm text-slate-600 mt-1">Consultez la liste des équipements et médicaments recherchés par les bénéficiaires.</p>
          </div>
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Rechercher par ville, titre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none text-sm bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredNeeds.map((n) => (
            <div key={n.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                    {n.category}
                  </span>
                  {n.urgent && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 animate-pulse">
                      Urgent
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{n.title}</h3>
                <p className="text-sm text-slate-600 mb-4">Demandeur : <strong className="text-slate-800">{n.seeker}</strong> — Ville : <strong className="text-slate-800">{n.city}</strong></p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400">Publié le {n.date}</span>
                <Link
                  to="/faire-don"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
                >
                  Répondre au besoin
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ListeBesoins;
