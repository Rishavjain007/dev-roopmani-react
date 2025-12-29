import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Navbar";
import Footer from "./Components/Footer";
import FloatingButtons from "./Components/FloatingButtons"; // 👈 ADD THIS
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ProjectsPage from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating WhatsApp + Call Buttons (ALL PAGES) */}
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
