import React from 'react';
import './BookRequest.css';

const BookRequest = () => {
  const steps = [
    {
      id: 1,
      title: 'Provide your appliance details',
      description: 'Let us know your appliance details and your issue.',
      image: ''
    },
    {
      id: 2,
      title: 'Choose your technician',
      description: 'Choose from a wide variety of technicians and vendors.',
      image: '' 
    },
    {
      id: 3,
      title: 'Get it fixed!',
      description: 'The technician will arrive at your doorstep shortly to fix it!',
      image: ''
    }
  ];
 return (
    <div className="book-request">
      <h1 className="title">Book a request in 3 simple steps</h1>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-image">{step.image}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description"> {step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookRequest;