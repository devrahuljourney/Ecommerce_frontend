import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CategoryProduct() {
    const { banner, productData, selectedCategory } = useSelector((state) => state.product);

    
    const [visibleProducts, setVisibleProducts] = useState(6);

    useEffect(() => {
        console.log("Product : ", productData);
    }, [productData]);

    
    const placeholderImage = "https://via.placeholder.com/150"; 

    
    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 6);
    };

    return (
        <div className='flex mt-[3%] w-full md:px-[13%] flex-col justify-center items-center ' >
            <div className=' flex w-full flex-col justify-center items-center'>
                <div className=' w-[95%] flex flex-col justify-center  items-center ' >
                    {
                        banner !== null && (
                            <div className=' w-[100%] flex flex-col  justify-start items-start gap-5 '>
                                <p className=' font-bold text-[24px] ' >Deals for you</p>
                                <img className=' rounded-xl w-full h-full bg-cover ' src={banner} alt="Banner" />
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='flex mt-[3%] flex-col justify-center items-center' >
                {
                    productData ? (
                        <div className='flex gap-5 flex-col justify-center items-start'>
                           <p className=' font-bold text-[24px] '>Choose what you are looking for</p>
                           <div className='grid place-content-center  grid-cols-2 md:grid-cols-3 gap-6 w-full' >
                              {
                                productData.slice(0, visibleProducts).map((data) => (
                                    <Link onClick={() => {
                                        window.scrollTo(0, 0);
                                    }} className='md:w-[320px] sm:w-[250px] w-[150px] flex flex-col justify-center items-center md:items-start' key={data?._id} to={`/product/${selectedCategory}/${data.name}/${data?._id}`}>
                                        <div>
                                            
                                            <img className=' w-full h-full bg-cover '
                                                src={data?.image?.length > 0 ? data.image[0] : placeholderImage} 
                                                alt={data?.name} 
                                            />
                                        </div>
                                        <div className=' p-2 ' >
                                            <p className=' text-[20px] font-bold ' >{data?.name}</p>
                                            <p className=' text-[16px] font-semibold text-[#949494] '>{data?.about?.slice(0, 20) || ""}...</p>

 
                                            <p className=' text-[16px] font-semibold text-[#949494] '>{data?.state}</p>
                                            <p className=' text-[17px] font-bold '> ₹ {data?.price}</p>
                                        </div>
                                    </Link>
                                ))
                              }
                           </div>

                           
                           {visibleProducts < productData.length && (
                                <div className='w-full flex flex-col justify-center items-center ' >
                                <button  className='   bg-gray-500 p-3 rounded-lg  text-white' onClick={loadMoreProducts}>
                                    View More
                                </button>
                                </div>
                           )}
                        </div>
                    ) : (
                        <p>No Product available for this category</p>
                    )
                }
            </div>
        </div>
    );
}
