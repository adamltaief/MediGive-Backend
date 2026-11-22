import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/header/Menu";

function FaireDon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block p-3 rounded-full bg-emerald-100 text-emerald-600 mb-3">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900">Faire un Don</h1>
          <p className="text-slate-600 mt-2">
            Choisissez la catégorie de votre don pour aider les personnes dans le besoin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Don Appareil */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Appareil Médical</h2>
              <p className="text-slate-600 text-sm mb-6">
                Donnez un équipement médical (fauteuil roulant, lit médicalisé, béquilles, tensiomètre...) en bon état.
              </p>
            </div>
            <Link
              to="/don-appareil"
              className="w-full text-center py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              Donner un appareil
            </Link>
          </div>

          {/* Don Médicament */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Médicaments</h2>
              <p className="text-slate-600 text-sm mb-6">
                Donnez des médicaments non périmés, dans leurs emballages d'origine non ouverts.
              </p>
            </div>
            <Link
              to="/don-medica"
              className="w-full text-center py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              Donner des médicaments
            </Link>
          </div>

          {/* Don Virement */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Virement Financier</h2>
              <p className="text-slate-600 text-sm mb-6">
                Soutenez financièrement nos actions d'acquisition et de transport de matériel médical.
              </p>
            </div>
            <Link
              to="/don-virement"
              className="w-full text-center py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              Effectuer un virement
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FaireDon;
