import React from 'react';
import './AllServices.css';

const AllServices = () => { 
  const services = [
    {
      id: 1,
      title: 'Fridge',
      description: 'We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.',
      icon: '🔲'
    },
    {
      id: 2,
      title: 'Air Conditioner',
      description: 'Don\'t get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.',
      icon: '❄️' 
    },
    {
      id: 3,
      title: 'Television',
      description: 'What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.',
      icon: '📺' 
    },
    {
      id: 4,
      title: 'Gas Stove',
      description: 'We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.',
      icon: '🔥'
    }
  ]

  return (
    <div className="all-services">
      <h1 className="title">All Services</h1>
      <p className="subtitle">The time is now for it to be okay to be great. For being a bright color. For standing out.</p>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllServices;
