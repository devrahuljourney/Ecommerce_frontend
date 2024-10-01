import React, { useEffect, useState } from 'react';
import { fetchAllCategories } from '../../services/operations/category';
import { FiMoreHorizontal } from "react-icons/fi";
import { fetchProductByCategoryId } from '../../services/operations/product';
import { setProductData } from '../../slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Category() {
    const [categories, setCategories] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);  
    const [selectedCategory, setSelectedCategory] = useState(); 
    const { productData } = useSelector((state) => state.product);
    const categoriesPerPage = 5; 

    const fetchCategory = async () => {
        try {
            const result = await fetchAllCategories();
            setCategories(result);
        } catch (error) {
            console.log("Error in fetching categories: ", error);
        }
    };
    const dispatch = useDispatch();

    const fetchProductDetails = async(selectedCategory) => {
        try {
            const response = await fetchProductByCategoryId(selectedCategory);
            dispatch(setProductData(response));
            console.log("Product data from category component : ", productData);
        } catch (error) {
            console.log("Error in fetching product by category: ", error);
        }
    }

    useEffect(() => {
        fetchCategory();  
    }, []);

    useEffect(() => {
        fetchProductDetails(selectedCategory);
    }, [selectedCategory]);

    const loadNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    };

    return (
        <div className='container mx-auto'>
            <div className='flex flex-row p-5 gap-5 overflow-x-auto no-scrollbar items-center justify-center'>
                {
                    categories.slice(currentIndex, currentIndex + categoriesPerPage).map((data) => (
                        <div 
                            className='flex flex-col  justify-center items-center rounded-full w-[100px] h-[100px] cursor-pointer' 
                            onClick={() => setSelectedCategory(data._id)} 
                            key={data.id}
                        >  
                            <div className={`flex justify-center items-center w-[100px] h-[100px]  rounded-full p-4 ${selectedCategory === data._id ? "bg-green" : "bg-white"}`}>
                                {data.image ? (
                                    <img 
                                        src={data.image} 
                                        alt={data.name} 
                                        className="object-cover w-full h-full  rounded-full"
                                    />
                                ) : (
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#f0f0f0',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: '#333',
                                            fontSize: '12px',
                                            border: '1px solid #ccc',
                                        }}
                                    >
                                        No Image Available
                                    </div>
                                )}
                            </div>
                            <p className='text-white font-bold text-center mt-2 md:text-base text-sm'>{data.name}</p>
                            {selectedCategory === data._id && <div className="arrow"></div>}
                        </div>
                    ))
                }

                {
                    <div onClick={loadNext}>
                        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-white cursor-pointer">
                            <FiMoreHorizontal style={{ width: "30px", height: "30px" }} />
                        </div>
                        <p className="text-center text-white font-bold mt-2 md:text-base text-sm">More</p>
                    </div>
                }
            </div>
        </div>
    );
}
