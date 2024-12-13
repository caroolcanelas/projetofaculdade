import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import NewProject from './pages/NewProject'
import Container from './components/layout/Container'


function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/newProject">newProject</Link>
      </div>
      <Container customClass="minHeight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/newProject" element={<NewProject />} /> 
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  )
}

export default App;
