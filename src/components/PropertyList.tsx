import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination as BSPagination, Alert } from 'react-bootstrap';
import PropertyCard from './PropertyCard';
import Filters, { FilterOptions } from './Filters';
import { properties, Property } from '../data/properties';
import Navigation from './Navigation';

const PropertyList: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterOptions>({
    priceMin: 0,
    priceMax: 6000,
    location: '',
    availability: '',
    searchTerm: ''
  });
  
  const propertiesPerPage = 6;
  
 
  useEffect(() => {
    const filtered = properties.filter(property => {
      const matchesPrice = 
        property.price >= filters.priceMin && 
        property.price <= filters.priceMax;
      
      const matchesLocation = 
        !filters.location || 
        property.location === filters.location;
      
      const matchesAvailability = 
        !filters.availability || 
        property.availability === filters.availability;
      
      const matchesSearch = 
        !filters.searchTerm || 
        property.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(filters.searchTerm.toLowerCase());
      
      return matchesPrice && matchesLocation && matchesAvailability && matchesSearch;
    });
    
    setFilteredProperties(filtered);
    setCurrentPage(1); 
  }, [filters]);
  
  
  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters({
      ...newFilters,
      searchTerm
    });
  };
  
  
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setFilters({
      ...filters,
      searchTerm: term
    });
  };
  
 
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  
  
  const renderPaginationItems = () => {
    const items = [];
    
    
    items.push(
      <BSPagination.Prev 
        key="prev" 
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      />
    );
    
    
    if (currentPage > 2) {
      items.push(
        <BSPagination.Item 
          key={1} 
          onClick={() => setCurrentPage(1)}
        >
          1
        </BSPagination.Item>
      );
      
      
      if (currentPage > 3) {
        items.push(<BSPagination.Ellipsis key="ellipsis1" disabled />);
      }
    }
    
    
    if (currentPage > 1) {
      items.push(
        <BSPagination.Item 
          key={currentPage - 1} 
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {currentPage - 1}
        </BSPagination.Item>
      );
    }
    
    
    items.push(
      <BSPagination.Item key={currentPage} active>
        {currentPage}
      </BSPagination.Item>
    );
    
    
    if (currentPage < totalPages) {
      items.push(
        <BSPagination.Item 
          key={currentPage + 1} 
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {currentPage + 1}
        </BSPagination.Item>
      );
    }
    
   
    if (currentPage < totalPages - 2) {
      items.push(<BSPagination.Ellipsis key="ellipsis2" disabled />);
    }
    
   
    if (currentPage < totalPages - 1) {
      items.push(
        <BSPagination.Item 
          key={totalPages} 
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </BSPagination.Item>
      );
    }
    
    
    items.push(
      <BSPagination.Next 
        key="next" 
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages || totalPages === 0}
      />
    );
    
    return items;
  };

  return (
    <>
      <Navigation />
      <Container className="py-4">
        <h1 className="mb-4 fw-bold">Find Your Perfect PG</h1>
        
        <Filters 
          onFilterChange={handleFilterChange}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        
        {filteredProperties.length === 0 ? (
          <Alert variant="info">
            No properties match your search criteria. Try adjusting your filters.
          </Alert>
        ) : (
          <>
            <p className="text-muted mb-4">
              Showing {currentProperties.length} of {filteredProperties.length} properties
            </p>
            
            <Row xs={1} md={2} lg={3} className="g-4 mb-4">
              {currentProperties.map(property => (
                <Col key={property.id}>
                  <PropertyCard property={property} />
                </Col>
              ))}
            </Row>
            
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <BSPagination>
                  {renderPaginationItems()}
                </BSPagination>
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default PropertyList;