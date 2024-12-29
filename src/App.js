import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import NewProject from "./components/pages/NewProject";
import Projetos from "./components/pages/Projetos";
import Projeto from "./components/pages/Projeto";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="minHeight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/newProject" element={<NewProject />} />
          <Route path="/projetos/:id" element={<Projeto />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
