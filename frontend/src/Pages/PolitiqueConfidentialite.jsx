import React, { useEffect } from "react";
import Menu from "../components/header/Menu";

function PolitiqueConfidentialite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full bg-white rounded-2xl shadow-sm border border-slate-200 mt-6 mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Politique de Confidentialité</h1>
        
        <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
          <p>
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">1. Collecte des données</h2>
          <p>
            MediGive accorde une importance capitale à la protection de vos données personnelles. Les informations collectées lors de votre inscription (nom, prénom, email, téléphone, adresse) sont strictement utilisées dans le cadre de la mise en relation entre donateurs et demandeurs de matériel médical ou de médicaments.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">2. Utilisation des informations</h2>
          <p>
            Vos données ne sont ni vendues, ni louées, ni cédées à des tiers. Elles servent exclusivement à :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Faciliter la coordination des dons de matériel médical et de médicaments.</li>
            <li>Gérer votre compte utilisateur et vos demandes d'aide.</li>
            <li>Assurer la sécurité et la vérification des profils (donateurs, bénévoles, nécessiteux).</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-4">3. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles rigoureuses pour protéger vos informations personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">4. Vos droits</h2>
          <p>
            Conformément aux réglementations en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Vous pouvez exercer ces droits à tout moment en nous contactant via notre formulaire de contact.
          </p>
        </div>
      </main>
    </div>
  );
}

export default PolitiqueConfidentialite;
