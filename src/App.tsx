import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProjectsPage from "./pages/ProjectsPage";
import Gallery from "./pages/Gallery";
import LanguagesPage from "./pages/Courses/Languages";
import ProgrammingPage from "./pages/Skills/ProgrammingSkills";
import About from "./pages/About"
import QuotesPage from "./pages/Qoutes";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:category" element={<ProjectsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/education/languages" element={<LanguagesPage />} />
        <Route path="/skills/programmingskills" element={<ProgrammingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </Router>
  );
}
