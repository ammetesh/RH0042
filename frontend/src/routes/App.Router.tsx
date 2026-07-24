import { Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/Landing/LandingPage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import UploadPage from "@/pages/Upload/UploadPage";
import AuditPage from "@/pages/Audit/AuditPage";
import ReportPage from "@/pages/Report/ReportPage";
import AboutPage from "@/pages/About/AboutPage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/audit" element={<AuditPage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}