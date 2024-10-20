

import { toast } from 'react-toastify';
import { apiconnector } from '../apiconnector';
import { productsEndpoints } from '../api';
const {CREATE_PRODUCT,FOR_YOU, GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID,UPDATE_PRODUCTS_BY_ID, DELETE_BY_ID, GET_PRODUCT_BY_CATEGORYID} = productsEndpoints

export const createProduct = async (productData) => {
    const toastId = toast.loading("Creating product...");
    try {
        const response = await apiconnector("POST", CREATE_PRODUCT, productData);
        if (response?.data?.success) {
            toast.success("Product created successfully");
            return response.data.product;
        } else {
            throw new Error("Failed to create product");
        }
    } catch (error) {
        toast.error("Failed to create product");
        console.error("CREATE PRODUCT ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};


export const fetchProductById = async (id) => {
    const toastId = toast.loading("Loading product...");
    try {
        const response = await apiconnector("GET", GET_PRODUCT_BY_ID(id));
        if (response?.data?.success) {
            toast.success("Product fetched successfully");
            return response.data.product;
        } else {
            throw new Error("Product not found");
        }
    } catch (error) {
        toast.error("Failed to fetch product");
        console.error("FETCH PRODUCT ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};

export const fetchProductByCategoryId = async (id) => {
    const toastId = toast.loading("Loading product...");
    try {
        const response = await apiconnector("GET", GET_PRODUCT_BY_CATEGORYID(id));
        console.log("RESPONSE FROM PRODUCT BY CATEGORY : ", response)
        if (response?.data?.success) {
            toast.success("Product fetched successfully");
            return response.data.products;
        } else {
            throw new Error("Product not found");
        }
    } catch (error) {
        toast.error("Failed to fetch product");
        console.error("FETCH PRODUCT ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};


export const fetchAllProducts = async () => {
    const toastId = toast.loading("Loading products...");
    try {
        const response = await apiconnector("GET", GET_ALL_PRODUCTS);
        if (response?.data?.success) {
            toast.success("Products fetched successfully");
            return response.data.products; 
        } else {
            throw new Error("Failed to fetch products");
        }
    } catch (error) {
        toast.error("Failed to fetch products");
        console.error("FETCH ALL PRODUCTS ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};

export const fetchForYouProducts = async () => {
    const toastId = toast.loading("Loading products...");
    try {
        const response = await apiconnector("GET", FOR_YOU);
        if (response?.data?.success) {
            toast.success("Products fetched successfully");
            console.log("FOR YOU " ,response.data )
            return response.data.products; 
        } else {
            throw new Error("Failed to fetch products");
        }
    } catch (error) {
        toast.error("Failed to fetch products");
        console.error("FETCH ALL PRODUCTS ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};



export const updateProductById = async (id, productData) => {
    const toastId = toast.loading("Updating product...");
    try {
        const response = await apiconnector("PUT", UPDATE_PRODUCTS_BY_ID(id), productData);
        if (response?.data?.success) {
            toast.success("Product updated successfully");
            return response.data.product; 
        } else {
            throw new Error("Failed to update product");
        }
    } catch (error) {
        toast.error("Failed to update product");
        console.error("UPDATE PRODUCT ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};


export const deleteProductById = async (id) => {
    const toastId = toast.loading("Deleting product...");
    try {
        const response = await apiconnector("DELETE", DELETE_BY_ID(id));
        if (response?.data?.success) {
            toast.success("Product deleted successfully");
            return response.data; 
        } else {
            throw new Error("Failed to delete product");
        }
    } catch (error) {
        toast.error("Failed to delete product");
        console.error("DELETE PRODUCT ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};
