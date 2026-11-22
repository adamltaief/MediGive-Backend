import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/header/Menu";

function ListeDisponibles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    { id: 1, title: "Fauteuil Roulant Manuel", category: "Appareil", donor: "Sonia B.", city: "Sousse", condition: "Très bon état" },
    { id: 2, title: "Boîte de Pansements Stériles", category: "Médicament", donor: "Mohamed K.", city: "Tunis", condition: "Neuf" },
    { id: 3, title: "Lit Médicalisé avec potence", category: "Appareil", donor: "Aymen Z.", city: "Sfax", condition: "Bon état" }
  ];

  const filteredItems = items.filter(i =>
    i.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Dons Disponibles</h1>
            <p className="text-sm text-slate-600 mt-1">Parcourez les équipements et médicaments actuellement offerts par les donateurs.</p>
          </div>
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Rechercher par ville, équipement..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none text-sm bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800">
                    {item.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                    {item.condition}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 mb-4">Donateur : <strong className="text-slate-800">{item.donor}</strong> — Ville : <strong className="text-slate-800">{item.city}</strong></p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/demande-aide"
                  className="w-full block py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold text-center shadow-sm transition-all"
                >
                  Demander cet article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ListeDisponibles;
