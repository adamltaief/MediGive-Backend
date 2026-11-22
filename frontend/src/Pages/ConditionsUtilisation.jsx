import React, { useEffect } from "react";
import Menu from "../components/header/Menu";

function ConditionsUtilisation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full bg-white rounded-2xl shadow-sm border border-slate-200 mt-6 mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Conditions d'Utilisation</h1>
        
        <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
          <p>
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">1. Objet</h2>
          <p>
            Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de la plateforme MediGive, dédiée à la mise en relation solidaire pour le don d'appareils médicaux et de médicaments.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">2. Engagement des Donateurs</h2>
          <p>
            En proposant un don sur MediGive, le donateur s'engage à ce que :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Le matériel médical soit en bon état de fonctionnement et sécurisé.</li>
            <li>Les médicaments ne soient pas périmés, soient dans leur emballage d'origine non ouvert, et stockés conformément aux normes.</li>
            <li>Les informations fournies soient exactes et sincères.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-4">3. Responsabilité</h2>
          <p>
            MediGive agit en tant qu'intermédiaire de mise en relation solidaire et bénévole. La plateforme ne saurait être tenue responsable de l'utilisation ultérieure des équipements ou des médicaments échangés entre les utilisateurs.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">4. Comportement des Utilisateurs</h2>
          <p>
            Les utilisateurs s'engagent à respecter les valeurs de solidarité, de respect et de bienveillance de la communauté MediGive. Toute tentative de fraude ou d'utilisation détournée de la plateforme entraînera la suspension immédiate du compte.
          </p>
        </div>
      </main>
    </div>
  );
}

export default ConditionsUtilisation;
