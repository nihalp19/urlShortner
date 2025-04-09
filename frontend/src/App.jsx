import { Routes, Route, Link, Navigate } from "react-router-dom"; // Removed Router import since it's not needed
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/loginPage";
import AnayticalPage from "./pages/AnayticalPage";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/SideBar";
import { userAuthStore } from "./store/userAuthStore";
import LoaderSpinner from "./components/LoaderSpinner";
import { useEffect } from "react";


function App() {
  const { user, loading, checkAuth } = userAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (loading) return <LoaderSpinner />

  return (
    <div className="w-full min-h-screen">
      {user && <Navbar />}
      <Sidebar />
      <Routes>
        <Route path="/" element={!user ? <Navigate to={"/login"} /> : <HomePage />} />
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/analysis" element={!user ? <Navigate to={"/login"} /> : <AnayticalPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
