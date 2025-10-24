import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import ServicesPage from "@/react-app/pages/Services";
import AboutPage from "@/react-app/pages/About";
import ContactPage from "@/react-app/pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/layanan" element={<ServicesPage />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/kontak" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
