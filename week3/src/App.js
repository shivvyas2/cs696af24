import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Intro from './components/intro';

function App() {
  return (
    <div>
      <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand href="#home" className="navbar-brand"> Week 5</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/" className="nav-link" exact activeClassName="active-link">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/intro" className="nav-link" activeClassName="active-link">Intro</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </div>
  );
}

export default App;
