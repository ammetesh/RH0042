import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />

      <main className="page-container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}