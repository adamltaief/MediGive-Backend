import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Menu from "../components/header/Menu";

function Identifier() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    // Check if logging in with seed admin credentials
    if (email === "admin@medigive.com" && password === "Admin123456!") {
      const adminInfo = {
        nom: "Admin",
        email: "admin@medigive.com",
        isAdmin: true,
        type: "Admin"
      };
      localStorage.setItem("userInfo", JSON.stringify(adminInfo));
      toast.success("Connexion administrateur réussie !");
      setTimeout(() => {
        navigate("/admin-dashboard");
      }, 1000);
      return;
    }

    // Default user login simulation
    const userInfo = {
      nom: "Utilisateur",
      email: email,
      isAdmin: false,
      type: "Donateur"
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    toast.success("Connexion réussie !");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <Menu />
      <ToastContainer position="top-right" autoClose={3000} />

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Connexion</h1>
            <p className="text-sm text-slate-500 mt-2">Accédez à votre compte MediGive</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mot de passe</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Se connecter
            </button>
          </form>

          <p className="text-center text-sm text-slate-600 mt-6">
            Vous n'avez pas de compte ?{" "}
            <Link to="/inscritype" className="text-emerald-600 font-semibold hover:underline">
              S'inscrire
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Identifier;
