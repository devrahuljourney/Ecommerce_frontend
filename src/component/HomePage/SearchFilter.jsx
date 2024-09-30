import React, { useEffect, useState } from 'react';
import { State, City } from 'country-state-city';
import { fetchAllCategories } from '../../services/operations/category';

export default function SearchFilter() {
  const allStates = State.getStatesOfCountry("IN");
  
  const [formData, setFormData] = useState({
    query: "",
    category: "",
    state: "",
    city: ""
  });

  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch categories
  const fetchCategory = async () => {
    try {
      const result = await fetchAllCategories();
      setCategories(result);
    } catch (error) {
      console.log("Error in fetching categories: ", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    // If the state changes, update the city list based on selected state
    if (name === "state") {
      const selectedState = allStates.find((s) => s.isoCode === value);
      const citiesInState = City.getCitiesOfState("IN", value);
      setCities(citiesInState);
    }
  };

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Handle form submission logic
  };

  useEffect(() => {
    fetchCategory();
  }, []); // Call only once when the component mounts

  return (
    <form onSubmit={submitHandler} className="flex flex-col space-y-4 p-4">
      {/* Query Input */}
      <input
        type="text"
        name="query"
        value={formData.query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded"
      />

      {/* Category Input */}
      <select
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">Select Category</option>
        {categories.map((data) => (
          <option key={data.name} value={data.name}>
            {data.name}
          </option>
        ))}
      </select>

      {/* State Dropdown */}
      <select
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">Select State</option>
        {allStates.map((state) => (
          <option key={state.isoCode} value={state.isoCode}>
            {state.name}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <select
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Search
      </button>
    </form>
  );
}
