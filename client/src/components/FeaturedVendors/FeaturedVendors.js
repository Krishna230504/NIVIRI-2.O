import React from 'react';
import './FeaturedVendors.css';

const FeaturedVendors = () => {
  const vendors = [
    {
      id: 1,
      name: 'Metro Hardware',
      services: 22,
      rating: '8/10',
      reviews: 89,
      image: '👤' // Temporary icon/image placeholder
    },
    {
      id: 2,
      name: 'Urban Fixers',
      services: 15,
      rating: '9/10',
      reviews: 120,
      image: '👤' // Temporary icon/image placeholder
    },
    {
      id: 3,
      name: 'Quick Repairs',
      services: 30,
      rating: '7/10',
      reviews: 75,
      image: '👤' // Temporary icon/image placeholder
    }
  ];

  return (
    <div className="featured-vendors">
      <h2 className="subtitle">Featured Vendors</h2>
      <div className="vendors-container">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="vendor-card">
            <div className="vendor-image">{vendor.image}</div>
            <h3 className="vendor-name">{vendor.name}</h3>
            <p className="vendor-details">{vendor.services} Services</p>
            <p className="vendor-details">{vendor.rating} Rating</p>
            <p className="vendor-details">{vendor.reviews} Reviews</p>
            <a href="#" className="vendor-link">Show more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedVendors;
