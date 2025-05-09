import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import { Home, LogOut } from 'lucide-react';

const Navigation: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-2" sticky="top">
      <Container>
        <Navbar.Brand className="d-flex align-items-center" href="/properties">
          <Home size={24} color="#537D5D" className="me-2" />
          <span className="fw-bold">ApanaGHR</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              <div className="d-flex align-items-center">
                <span className="me-3 text-muted">
                  {user.email}
                </span>
                <Button 
                  variant="outline-danger" 
                  size="sm" 
                  onClick={handleLogout}
                  className="d-flex align-items-center"
                >
                  <LogOut size={16} className="me-1" /> 
                  Logout
                </Button>
              </div>
            ) : (
              <Button 
              
              onClick={() => navigate('/login')}
              style={{  backgroundColor: '#73946B !important', 
                borderColor: '#73946B !important', 
                color: 'white !important'  }}
              className="hover:opacity-90"
              >
                Sign In
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;