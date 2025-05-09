import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Property } from '../data/properties';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    title,
    image,
    price,
    location,
    availability,
    beds,
    bathrooms,
    size,
    description
  } = property;

  
  const formattedPrice = price.toLocaleString();
  
  return (
    <Card className="h-100 border-0 shadow-sm property-card">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={image} 
          alt={title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <Badge 
          bg={availability === 'Available Now' ? 'success' : 'warning'}
          className="position-absolute top-0 end-0 m-2"
        >
          {availability}
        </Badge>
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="mb-2 d-flex justify-content-between align-items-start">
          <h5 className="mb-0 fw-bold">₹{formattedPrice}/mo</h5>
        </div>
        <Card.Title className="mb-1 text-truncate">{title}</Card.Title>
        <div className="d-flex align-items-center mb-2 text-muted">
          <MapPin size={16} className="me-1" />
          <small>{location}</small>
        </div>
        
        <Card.Text className="text-muted small mb-3 flex-grow-1">
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </Card.Text>
        
        <div className="d-flex justify-content-between mt-auto pt-3 border-top">
          <div className="d-flex align-items-center" title="Bedrooms">
            <Bed size={16} className="me-1 text-primary" />
            <small>{beds} {beds === 1 ? 'bed' : 'beds'}</small>
          </div>
          <div className="d-flex align-items-center" title="Bathrooms">
            <Bath size={16} className="me-1 text-primary" />
            <small>{bathrooms} {bathrooms === 1 ? 'bath' : 'baths'}</small>
          </div>
          <div className="d-flex align-items-center" title="Square Footage">
            <Square size={16} className="me-1 text-primary" />
            <small>{size} sq ft</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;