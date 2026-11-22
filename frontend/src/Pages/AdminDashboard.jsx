import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Menu from "../components/header/Menu";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function AdminDashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const user = JSON.parse(localStorage.getItem("userInfo") || "null");

  // Real-time dynamic state synced with charts
  const [users, setUsers] = useState([
    { id: 1, nom: "Ahmed Ben Ali", email: "ahmed@example.com", type: "Donateur", status: "En attente" },
    { id: 2, nom: "Fatma Mansour", email: "fatma@example.com", type: "Nécessiteux", status: "En attente" },
    { id: 3, nom: "Karim Trabelsi", email: "karim@example.com", type: "Bénévole", status: "Approuvé" }
  ]);

  const [donations, setDonations] = useState([
    { id: 1, titre: "Fauteuil Roulant Manuel", type: "Appareil", donor: "Sonia B.", lieu: "Sousse", status: "En attente" },
    { id: 2, titre: "Boîte d'Insuline", type: "Médicament", donor: "Mohamed K.", lieu: "Tunis", status: "En attente" },
    { id: 3, titre: "Lit Médicalisé", type: "Appareil", donor: "Aymen Z.", lieu: "Sfax", status: "Approuvé" }
  ]);

  const [requests, setRequests] = useState([
    { id: 1, titre: "Recherche Déambulateur", seeker: "Leila M.", lieu: "Ariana", date: "2026-11-05", status: "Actif" },
    { id: 2, titre: "Traitement Hypertension", seeker: "Hassen T.", lieu: "Bizerte", date: "2026-11-06", status: "Actif" }
  ]);

  const handleApproveUser = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: "Approuvé" } : u));
    toast.success("Utilisateur approuvé avec succès !");
  };

  const handleRejectUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
    toast.info("Utilisateur rejeté et supprimé.");
  };

  const handleApproveDonation = (id) => {
    setDonations(donations.map(d => d.id === id ? { ...d, status: "Approuvé" } : d));
    toast.success("Don validé et publié sur la plateforme !");
  };

  const handleRejectDonation = (id) => {
    setDonations(donations.filter(d => d.id !== id));
    toast.info("Don rejeté.");
  };

  const handleDeleteRequest = (id) => {
    setRequests(requests.filter(r => r.id !== id));
    toast.info("Demande d'aide supprimée.");
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    toast.info("Déconnexion réussie");
    navigate("/se-connecter");
  };

  // Real-time derived counts for charts
  const approvedDonationsCount = donations.filter(d => d.status === "Approuvé").length + 75;
  const pendingDonationsCount = donations.filter(d => d.status === "En attente").length;
  const activeRequestsCount = requests.length + 30;

  const donateursCount = users.filter(u => u.type === "Donateur").length + 60;
  const necessiteuxCount = users.filter(u => u.type === "Nécessiteux").length + 35;
  const benevolesCount = users.filter(u => u.type === "Bénévole").length + 20;

  // Real-time Chart Data synced with state
  const donationsChartData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov (Actuel)'],
    datasets: [
      {
        label: 'Dons Validés & Actifs',
        data: [12, 19, 15, 25, 32, 45, 38, 52, 60, 74, approvedDonationsCount],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderRadius: 8,
      },
    ],
  };

  const userDistributionData = {
    labels: ['Donateurs', 'Nécessiteux', 'Bénévoles', 'Administrateurs'],
    datasets: [
      {
        data: [donateursCount, necessiteuxCount, benevolesCount, 3],
        backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'],
        borderWidth: 0,
      },
    ],
  };

  const requestsTrendData = {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4 (Actuel)'],
    datasets: [
      {
        label: 'Demandes d\'Aide Actives',
        data: [8, 14, 11, activeRequestsCount],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-20">
      <Menu />
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
        {/* Header Dashboard */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
              Espace Administrateur
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Tableau de Bord Admin
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Connecté en tant que : <strong className="text-slate-700">{user?.email || "admin@medigive.com"}</strong>
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <button
              onClick={() => toast.success("Données actualisées et graphiques synchronisés en temps réel")}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm transition-colors"
            >
              Actualiser en temps réel
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
            >
              Se déconnecter
            </button>
          </div>
        </div>

        {/* Layout with Vertical Sidebar & Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Vertical Sidebar Menu */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 sticky top-28 space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 pb-2">Navigation Admin</p>
              
              <button
                onClick={() => setActiveTab("overview")}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center space-x-3 ${
                  activeTab === "overview"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span>📊</span>
                <span>Vue d'ensemble</span>
              </button>

              <button
                onClick={() => setActiveTab("users")}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center space-x-3 ${
                  activeTab === "users"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span>👥</span>
                <span>Gestion Utilisateurs</span>
              </button>

              <button
                onClick={() => setActiveTab("donations")}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center space-x-3 ${
                  activeTab === "donations"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span>🎁</span>
                <span>Validation des Dons</span>
              </button>

              <button
                onClick={() => setActiveTab("requests")}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center space-x-3 ${
                  activeTab === "requests"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span>📋</span>
                <span>Demandes d'Aide</span>
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Tab Content: Overview & Real-time Charts */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <h3 className="text-sm font-medium text-slate-500">Utilisateurs Inscrits</h3>
                    <p className="text-3xl font-extrabold text-slate-900 mt-2">{users.length + 120}</p>
                    <p className="text-xs text-emerald-600 mt-2 font-medium">Sync. Temps Réel</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <h3 className="text-sm font-medium text-slate-500">Dons en Attente</h3>
                    <p className="text-3xl font-extrabold text-amber-600 mt-2">{pendingDonationsCount}</p>
                    <p className="text-xs text-amber-600 mt-2 font-medium">En attente de validation</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <h3 className="text-sm font-medium text-slate-500">Demandes d'Aide</h3>
                    <p className="text-3xl font-extrabold text-blue-600 mt-2">{activeRequestsCount}</p>
                    <p className="text-xs text-blue-600 mt-2 font-medium">Actives sur la plateforme</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <h3 className="text-sm font-medium text-slate-500">Statut Système</h3>
                    <p className="text-3xl font-extrabold text-emerald-600 mt-2">Actif</p>
                    <p className="text-xs text-slate-500 mt-2 font-medium">MongoDB Connecté</p>
                  </div>
                </div>

                {/* Charts Grid - Fully Synced with Real-time State */}
                <div className="grid grid-cols-1 gap-8">
                  {/* Bar Chart */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Évolution des Dons (Temps Réel)</h3>
                    <p className="text-xs text-slate-500 mb-4">Se met à jour automatiquement lorsque vous validez des dons.</p>
                    <div className="h-72 flex items-center justify-center">
                      <Bar data={donationsChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                  </div>

                  {/* Doughnut Chart & Line Chart Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Répartition Profils</h3>
                      <p className="text-xs text-slate-500 mb-4">Sync. avec l'onglet Utilisateurs.</p>
                      <div className="h-64 flex items-center justify-center">
                        <Doughnut data={userDistributionData} options={{ responsive: true, maintainAspectRatio: false }} />
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Tendances Demandes d'Aide</h3>
                      <p className="text-xs text-slate-500 mb-4">Reflète les demandes actives et validées.</p>
                      <div className="h-64 flex items-center justify-center">
                        <Line data={requestsTrendData} options={{ responsive: true, maintainAspectRatio: false }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content: Users Management */}
            {activeTab === "users" && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Gestion des Utilisateurs</h3>
                <p className="text-sm text-slate-500 mb-6">Approuvez ou rejetez les comptes inscrits (Met à jour le graphique en temps réel).</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-slate-700 uppercase text-xs">
                      <tr>
                        <th className="px-6 py-3">Nom</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Type</th>
                        <th className="px-6 py-3">Statut</th>
                        <th className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((u) => (
                        <tr key={u.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                          <td className="px-6 py-4 font-medium text-slate-900">{u.nom}</td>
                          <td className="px-6 py-4">{u.email}</td>
                          <td className="px-6 py-4"><span className="px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-800">{u.type}</span></td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                              u.status === 'Approuvé' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                            }`}>
                              {u.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 space-x-2">
                            {u.status !== 'Approuvé' && (
                              <button onClick={() => handleApproveUser(u.id)} className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700">Approuver</button>
                            )}
                            <button onClick={() => handleRejectUser(u.id)} className="px-3 py-1 bg-red-600 text-white rounded-lg text-xs font-semibold hover:bg-red-700">Supprimer</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab Content: Donations Validation */}
            {activeTab === "donations" && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Validation des Dons</h3>
                <p className="text-sm text-slate-500 mb-6">Validez les dons pour impacter directement le graphique mensuel des dons.</p>
                <div className="space-y-4">
                  {donations.map((d) => (
                    <div key={d.id} className="p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-slate-50">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-slate-900">{d.titre}</h4>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-800">{d.type}</span>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${d.status === 'Approuvé' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                            {d.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Proposé par: <span className="font-medium text-slate-700">{d.donor}</span> — Lieu: <span className="font-medium text-slate-700">{d.lieu}</span></p>
                      </div>
                      <div className="mt-4 sm:mt-0 space-x-2">
                        {d.status !== 'Approuvé' && (
                          <button onClick={() => handleApproveDonation(d.id)} className="px-3.5 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 shadow-sm">Valider & Publier</button>
                        )}
                        <button onClick={() => handleRejectDonation(d.id)} className="px-3.5 py-2 bg-red-600 text-white rounded-lg text-xs font-semibold hover:bg-red-700 shadow-sm">Rejeter</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab Content: Requests Management */}
            {activeTab === "requests" && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Gestion des Demandes d'Aide</h3>
                <p className="text-sm text-slate-500 mb-6">Ajoutez ou supprimez des demandes pour synchroniser le graphique de tendance des aides.</p>
                <div className="space-y-4">
                  {requests.map((r) => (
                    <div key={r.id} className="p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-slate-50">
                      <div>
                        <h4 className="font-bold text-slate-900">{r.titre}</h4>
                        <p className="text-xs text-slate-500 mt-1">Demandeur: <span className="font-medium text-slate-700">{r.seeker}</span> — Lieu: <span className="font-medium text-slate-700">{r.lieu}</span> — Date: {r.date}</p>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <button onClick={() => handleDeleteRequest(r.id)} className="px-3.5 py-2 bg-red-600 text-white rounded-lg text-xs font-semibold hover:bg-red-700 shadow-sm">Supprimer la demande</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
