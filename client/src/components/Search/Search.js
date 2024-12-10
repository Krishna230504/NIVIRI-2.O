import React, { useEffect, useState } from 'react';
import './Search.css';

const Search = () => {
  const [locations, setLocations] = useState([]);
  const [autoComplete, setAutoComplete] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [ searchQuery , setSearchQuery] = useState()

  async function getLocations() {
    let response = await fetch(`http://localhost:4000/locations`);
    if (response.ok) {
      response = await response.json();
      setLocations(response);
    } else {
      alert("No internet connection.");
    }
  }

  async function search(name) {
    setSearchQuery(name)

    if (!name.trim()) {
      setAutoComplete([]);
      setShowSuggestions(false);
      return;
    }
    let response = await fetch(`http://localhost:4000/appliances/?name=${name}`);
    if (response.ok) {
      response = await response.json();
      setAutoComplete(response);
      setShowSuggestions(true);
    } else {
      alert("No internet connection.");
    }
  }

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="service-pro-container">
      <div className="service-pro-content">
        <div className="service-pro-header">
          <h1 className="service-pro-title">Take care of your home needs now!</h1>
          <p className="service-pro-subtitle">
            ServicePro is your one-stop solution to troubleshoot, choose a vendor and book a technician.
          </p>
        </div>
        <div className="service-pro-search">
          <div className='align-container'>
            <div className="service-pro-location-dropdown">
              <select className="service-pro-select">
                {locations.map((val, idx) => (
                  <option key={idx}>{idx + 1}. {val}</option>
                ))}
              </select>
            </div>
            <p className="service-pro-location-tag">Only in Ameerpet, Gachibowli, & Madhapur</p>
          </div>
          <div className="service-pro-search-bar">
            <div className="autocomplete-container">
              <input
                type="text"
                placeholder="Search Home Appliances"
                className="service-pro-input"
                onChange={(e) => search(e.target.value) }
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onFocus={() => setShowSuggestions(true)}

                value = {searchQuery}
              />
              {showSuggestions && autoComplete.length > 0 && (
                <div className="autocomplete-suggestions">
                  {autoComplete.map((val, idx) => (
                    <div
                      className="suggestion-item"
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        setSearchQuery(val);  
                        setShowSuggestions(false); 
                      }}
                    >
                      {val}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="service-pro-search-button">Search</button>
          </div>
        </div>
      </div>
      <div className="service-pro-image-container">
        <img
          src="https://via.placeholder.com/300"
          alt="Service illustration"
          className="service-pro-image"
        />
      </div>
    </div>
  );
};

export default Search;
