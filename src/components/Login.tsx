import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import { Home } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/properties');
      } else {
        setError('Invalid credentials. Try using any valid email and password (min 6 characters).');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Card className="shadow-lg border-0" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body className="p-5">
          <div className="text-center mb-4">
            <Home size={40} color="#73946B" strokeWidth={2} />
            <h2 className="mt-2 fw-bold">ApanaGHR</h2>
            <p className="text-muted">Sign in to find your perfect rental accomadation</p>
          </div>
          
          {error && <Alert variant="danger">{error}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="py-2"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="py-2"
              />
            </Form.Group>

            <Button 
              variant="success" 
              type="submit" 
              className="w-100 py-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner 
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </Form>
          
          <div className="mt-4 text-center">
            <small className="text-muted">
              Don't have an account?{' '}
              <a href="#" onClick={(e) => e.preventDefault()} className="text-decoration-none">
                Create one
              </a>
            </small>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;