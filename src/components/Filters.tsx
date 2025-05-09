import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import { locations } from '../data/properties';
import { Filter, X } from 'lucide-react';

export interface FilterOptions {
  priceMin: number;
  priceMax: number;
  location: string;
  availability: string;
  searchTerm: string;
}

interface FiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ 
  onFilterChange, 
  searchTerm, 
  onSearchChange 
}) => {
  const [expanded, setExpanded] = useState(false);
  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(6000);
  const [location, setLocation] = useState<string>('');
  const [availability, setAvailability] = useState<string>('');
  
  useEffect(() => {
    handleFilterChange();
  }, [priceMin, priceMax, location, availability]);

  const handleFilterChange = () => {
    onFilterChange({
      priceMin,
      priceMax,
      location,
      availability,
      searchTerm
    });
  };

  const handleReset = () => {
    setPriceMin(0);
    setPriceMax(6000);
    setLocation('');
    setAvailability('');
    onSearchChange('');
  };

  const toggleFilters = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="mb-4 border-0 shadow-sm">
      <Card.Body>
        <Row className="align-items-center mb-3">
          <Col xs={12} md={expanded ? 12 : 6} lg={expanded ? 12 : 8} className="mb-3">
            <Form.Control
              type="search"
              placeholder="Search by property name or description..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="py-2"
            />
          </Col>
          <Col xs={12} md={expanded ? 12 : 6} lg={expanded ? 12 : 4} className="d-flex justify-content-md-end mb-3">
            <Button 
              variant={expanded ? "secondary" : "primary"} 
              className="d-flex align-items-center me-2"
              onClick={toggleFilters}
              style={{ backgroundColor: expanded ? '#6c757d' : '#73946B', borderColor: expanded ? '#6c757d' : '#73946B' }}
            >
              {expanded ? <X size={18} className="me-1" /> : <Filter size={18} className="me-1" />}
              {expanded ? "Close Filters" : "Show Filters"}
            </Button>
            {expanded && (
              <Button 
                variant="outline-secondary" 
                className="d-flex align-items-center"
                onClick={handleReset}
              >
                Reset All
              </Button>
            )}
          </Col>
        </Row>

        {expanded && (
          <Row className="mt-4">
            <Col xs={12} md={6} lg={3} className="mb-3">
              <Form.Group>
                <Form.Label>Min Price</Form.Label>
                <Form.Control
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceMin}
                  onChange={(e) => setPriceMin(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between">
                  <span>₹{priceMin}</span>
                  <span>₹5,000</span>
                </div>
              </Form.Group>
            </Col>
            
            <Col xs={12} md={6} lg={3} className="mb-3">
              <Form.Group>
                <Form.Label>Max Price</Form.Label>
                <Form.Control
                  type="range"
                  min="1000"
                  max="6000"
                  step="100"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between">
                  <span>₹1,000</span>
                  <span>₹{priceMax}</span>
                </div>
              </Form.Group>
            </Col>
            
            <Col xs={12} md={6} lg={3} className="mb-3">
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Any Location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            
            <Col xs={12} md={6} lg={3} className="mb-3">
              <Form.Group>
                <Form.Label>Availability</Form.Label>
                <Form.Select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                >
                  <option value="">Any Status</option>
                  <option value="Available Now">Available Now</option>
                  <option value="Coming Soon">Coming Soon</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default Filters;