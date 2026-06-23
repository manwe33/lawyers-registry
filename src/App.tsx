import { Routes, Route } from "react-router-dom";
import Navigation from "./sections/Navigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CriteriaPage from "./pages/CriteriaPage";
import ContactsPage from "./pages/ContactsPage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/criteria" element={<CriteriaPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
