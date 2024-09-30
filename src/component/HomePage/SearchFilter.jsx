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
    <form onSubmit={submitHandler} className="flex  md:w-[70%] p-3 flex-col md:flex-row justify-evenly item-center bg-white rounded-xl">
      {/* Query Input */}
      <input
        type="text"
        name="query"
        value={formData.query}
        onChange={handleInputChange}
        placeholder="Enter ads keyword"
        className="p-1 md:w-[15%] focus:outline-none border-none rounded"
      />

      <div className='border-[1px] md:block hidden h-[30px]  mt-[1%] border-gray-400 '  ></div>

      {/* Category Input */}
      <select
        name="category"
        value={formData.category}
        onChange={handleInputChange}
        className="p-2 md:w-[15%] focus:outline-none border-none rounded"
      >
        <option className='text-gray-400 ' value="">Select Category</option>
        {categories.map((data) => (
          <option key={data.name} value={data.name}>
            {data.name}
          </option>
        ))}
      </select>
      <div className='border-[1px] md:block hidden h-[30px]  mt-[1%] border-gray-400 '  ></div>

      {/* State Dropdown */}
      <select
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        className="p-2 md:w-[15%] focus:outline-none border-none rounded"
      >
        <option className='text-gray-400 ' value="">Select State</option>
        {allStates.map((state) => (
          <option key={state.isoCode} value={state.isoCode}>
            {state.name}
          </option>
        ))}
      </select>
      <div className='border-[1px] md:block hidden h-[30px]  mt-[1%] border-gray-400 '  ></div>

      {/* City Dropdown */}
      <select
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        className="p-2 md:w-[15%] focus:outline-none border-none rounded"
      >
        <option className='text-gray-400 ' value="">Select City</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      

      

      
      <button
        type="submit"
        className="flex md:w-[15%] flex-row justify-center items-center py-[1%] font-bold bg-green rounded-lg text-white  gap-2"
      >
        Search Now
      </button>
    </form>
  );
}
