import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingBag, MdRemoveShoppingCart } from "react-icons/md"; // Imported remove icon
import { addToCart, removeFromCart } from '../../slices/cartSlice'; // Imported remove action

export default function CategoryProduct() {
    const { banner, productData, selectedCategory } = useSelector((state) => state.product);
    const { cart } = useSelector((state) => state.cart);

    const [visibleProducts, setVisibleProducts] = useState(6);

    useEffect(() => {
        console.log("Product : ", productData);
    }, [productData]);

    const placeholderImage = "https://via.placeholder.com/150"; 

    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 6);
    };

    const dispatch = useDispatch();

    const handelAddToCart = (data) => {
        const isProductInCart = cart.find(item => item._id === data._id);
        if (isProductInCart) {
            dispatch(removeFromCart(data)); 
            console.log('Removed from cart: ', data);
        } else {
            dispatch(addToCart(data)); 
            console.log('Added to cart: ', data);
        }
    }

    const isInCart = (productId) => {
        return cart.some(item => item._id === productId); 
    }

    return (
        <div className='flex mt-[3%] w-full md:px-[13%] flex-col justify-center items-center'>
            <div className='flex w-full flex-col justify-center items-center'>
                <div className='w-[95%] flex flex-col justify-center items-center'>
                    {banner && (
                        <div className='w-[100%] flex flex-col justify-start items-start gap-5'>
                            <p className='font-bold text-[24px]'>Deals for you</p>
                            <img className='rounded-xl w-full h-full bg-cover' src={banner} alt="Banner" />
                        </div>
                    )}
                </div>
            </div>

            <div className='flex mt-[3%] flex-col justify-center items-center'>
                {productData ? (
                    <div className='flex gap-5 flex-col justify-center items-start'>
                        <p className='font-bold text-[24px]'>Choose what you are looking for</p>
                        <div className='grid place-content-center grid-cols-2 md:grid-cols-3 gap-6 w-full'>
                            {productData.slice(0, visibleProducts).map((data) => (
                                <div className='md:w-[320px] sm:w-[250px] w-[150px] flex flex-col justify-center items-center md:items-start' key={data?._id}>
                                    <div className='relative'>
                                        <button
                                            onClick={() => handelAddToCart(data)}
                                            className='absolute hover:text-white transition-all duration-400 right-[2%] bg-gray-400 p-2 rounded-full hover:bg-green top-[2%]'
                                        >
                                            {isInCart(data._id) 
                                                ? <MdRemoveShoppingCart style={{ width: "23px", height: "23px" }} /> // Show remove icon if in cart
                                                : <MdOutlineShoppingBag style={{ width: "23px", height: "23px" }} /> // Show add to cart icon if not in cart
                                            }
                                        </button>
                                        <Link
                                            onClick={() => window.scrollTo(0, 0)}
                                            to={`/product/${selectedCategory}/${data.name}/${data?._id}`}
                                        >
                                            <img
                                                loading='lazy'
                                                className='w-full h-full bg-cover'
                                                src={data?.image?.length > 0 ? data.image[0] : placeholderImage}
                                                alt={data?.name}
                                            />
                                        </Link>
                                    </div>
                                    <div className='p-2'>
                                        <p className='text-[20px] font-bold'>{data?.name}</p>
                                        <p className='text-[16px] font-semibold text-[#949494]'>{data?.about?.slice(0, 20) || ""}...</p>
                                        <p className='text-[16px] font-semibold text-[#949494]'>{data?.state}</p>
                                        <p className='text-[17px] font-bold'>₹ {data?.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {visibleProducts < productData.length && (
                            <div className='w-full flex flex-col justify-center items-center'>
                                <button className='bg-gray-500 p-3 rounded-lg text-white' onClick={loadMoreProducts}>
                                    View More
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <p>No Product available for this category</p>
                )}
            </div>
        </div>
    );
}
