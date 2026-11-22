import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/header/Menu";

function InscriType() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex items-center justify-center">
        <div className="w-full">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h1 className="text-3xl font-extrabold text-slate-900">Créer un Compte</h1>
            <p className="text-slate-600 mt-2">Choisissez votre profil pour vous inscrire sur MediGive.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Donateur</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Vous souhaitez donner du matériel médical ou des médicaments aux personnes dans le besoin.
                </p>
              </div>
              <Link
                to="/inscri-donateur"
                className="w-full text-center py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
              >
                S'inscrire comme Donateur
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Nécessiteux</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Vous recherchez un soutien, un équipement médical ou un traitement pour vous ou un proche.
                </p>
              </div>
              <Link
                to="/inscri-necessiteux"
                className="w-full text-center py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors"
              >
                S'inscrire comme Nécessiteux
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Bénévole</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Vous souhaitez participer à la logistique, la vérification et l'acheminement des dons.
                </p>
              </div>
              <Link
                to="/inscri-benevole"
                className="w-full text-center py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-colors"
              >
                S'inscrire comme Bénévole
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default InscriType;
