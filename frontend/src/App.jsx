import { Routes, Route, Link, Navigate } from "react-router-dom"; // Removed Router import since it's not needed
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/loginPage";
import LinkPage from "./pages/LinkPage";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/SideBar";
import { userAuthStore } from "./store/userAuthStore";
import LoaderSpinner from "./components/LoaderSpinner";
import { useEffect } from "react";
import ProfilePage from "./pages/ProfilePage";
import Analytics from "./components/Analytics";


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
        <Route path="/analytics/:id" element={!user ? <Navigate to={"/login"} /> : <Analytics />} />
        <Route path="/links" element={!user ? <Navigate to={"/login"} /> : <LinkPage />} />
        <Route path="/profile" element={!user ? <Navigate to={"/login"} /> : <ProfilePage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
