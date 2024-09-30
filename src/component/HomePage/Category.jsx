import React, { useEffect, useState } from 'react';
import { fetchAllCategories } from '../../services/operations/category';
import { FiMoreHorizontal } from "react-icons/fi";

export default function Category() {
    const [categories, setCategories] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);  
    const [selectedCategory, setSelectedCategory] = useState(); 
    const categoriesPerPage = 5; 

    // Fetch categories
    const fetchCategory = async () => {
        try {
            const result = await fetchAllCategories();
            setCategories(result);
        } catch (error) {
            console.log("Error in fetching categories: ", error);
        }
    };

    useEffect(() => {
        fetchCategory();  
    }, []);

    // Function to load the next 3 categories
    const loadNext = () => {
        if (currentIndex + categoriesPerPage < categories.length) {
            setCurrentIndex((prevIndex) => prevIndex + categoriesPerPage);
        }
    };

    return (
        <div>
            <div className='flex flex-row gap-5'>
                {
                    categories.slice(currentIndex, currentIndex + categoriesPerPage).map((data) => (
                        <div onClick={() => setSelectedCategory(data._id)} key={data.id}>  
                            <div className={`flex justify-center items-center w-[100px] h-[100px] rounded-full ${selectedCategory === data._id ? "bg-green" : "bg-white"}`}>
                                {data.image ? (
                                    <img src={data.image} alt={data.name} />
                                ) : (
                                    <div
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            backgroundColor: '#f0f0f0',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: '#333',
                                            fontSize: '14px',
                                            border: '1px solid #ccc',
                                        }}
                                    >
                                        No Image Available
                                    </div>
                                )}
                            </div>
                            <p>{data.name}</p>
                        </div>
                    ))
                }

                
                {currentIndex + categoriesPerPage < categories.length && (
                    <div onClick={loadNext}>
                        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-white cursor-pointer">
                            <FiMoreHorizontal style={{width:"30px", height:"30px"}} size={24} />
                        </div>
                        <p className="text-center">More</p>
                    </div>
                )}
            </div>
        </div>
    );
}
