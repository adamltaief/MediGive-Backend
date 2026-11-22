import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/main/Images/LOGO.png";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleAuthProtectedClick = (e, targetPath) => {
    e.preventDefault();
    const token = localStorage.getItem("token") || JSON.parse(localStorage.getItem("userInfo") || "null")?.token;

    if (!token) {
      navigate("/se-connecter");
    } else {
      navigate(targetPath);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const isLoggedIn = !!(localStorage.getItem("token") || JSON.parse(localStorage.getItem("userInfo") || "null"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={Logo} alt="MediGive Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                MediGive
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-emerald-400 transition-colors">Accueil</Link>
            
            {/* Protected: Faire un don */}
            <button
              type="button"
              onClick={(e) => handleAuthProtectedClick(e, "/faire-don")}
              className="hover:text-emerald-400 transition-colors bg-transparent border-0 p-0 text-sm font-medium text-white cursor-pointer"
            >
              Faire un don
            </button>

            <Link to="/liste-besoins" className="hover:text-emerald-400 transition-colors">Besoins</Link>
            <Link to="/listedisponibles" className="hover:text-emerald-400 transition-colors">Disponibles</Link>

            {/* Protected: Demander l'aide */}
            <button
              type="button"
              onClick={(e) => handleAuthProtectedClick(e, "/demande-aide")}
              className="hover:text-emerald-400 transition-colors bg-transparent border-0 p-0 text-sm font-medium text-white cursor-pointer"
            >
              Demander l'aide
            </button>

            {userInfo?.isAdmin && (
              <Link to="/admin-dashboard" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors">Admin Dashboard</Link>
            )}
          </nav>

          {/* Right CTA Actions or User Avatar */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-sm shadow-sm">
                    {userInfo?.nom ? userInfo.nom.charAt(0).toUpperCase() : "U"}
                  </div>
                  <span className="text-sm font-medium text-slate-200">
                    {userInfo?.nom || "Utilisateur"}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 text-xs font-semibold text-red-400 hover:text-white hover:bg-red-600/20 rounded-lg transition-all border border-red-500/30"
                  title="Se déconnecter"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/se-connecter"
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Se connecter
                </Link>
                <Link
                  to="/inscritype"
                  className="px-4 py-2 text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-all transform hover:-translate-y-0.5"
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-slate-900/98 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-emerald-400"
          >
            Accueil
          </Link>
          <button
            type="button"
            onClick={(e) => { setIsOpen(false); handleAuthProtectedClick(e, "/faire-don"); }}
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-emerald-400 cursor-pointer bg-transparent border-0 text-white"
          >
            Faire un don
          </button>
          <Link
            to="/liste-besoins"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-emerald-400"
          >
            Liste des besoins
          </Link>
          <Link
            to="/listedisponibles"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-emerald-400"
          >
            Liste des disponibles
          </Link>
          <button
            type="button"
            onClick={(e) => { setIsOpen(false); handleAuthProtectedClick(e, "/demande-aide"); }}
            className="w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800 hover:text-emerald-400 cursor-pointer bg-transparent border-0 text-white"
          >
            Demander l'aide
          </button>
          {userInfo?.isAdmin && (
            <Link
              to="/admin-dashboard"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-emerald-400 hover:bg-slate-800"
            >
              Admin Dashboard
            </Link>
          )}

          <div className="pt-4 border-t border-slate-800 flex flex-col space-y-2">
            {isLoggedIn ? (
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3 px-3 py-2 bg-slate-800 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-sm">
                    {userInfo?.nom ? userInfo.nom.charAt(0).toUpperCase() : "U"}
                  </div>
                  <span className="text-sm font-medium text-slate-200">
                    {userInfo?.nom || "Utilisateur"}
                  </span>
                </div>
                <button
                  onClick={() => { setIsOpen(false); handleLogout(); }}
                  className="w-full text-center px-4 py-2 rounded-lg text-sm font-semibold bg-red-600/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/se-connecter"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 hover:bg-slate-800"
                >
                  Se connecter
                </Link>
                <Link
                  to="/inscritype"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-400 text-slate-900 hover:bg-emerald-300"
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Menu;
