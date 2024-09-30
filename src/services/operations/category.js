

import { toast } from 'react-toastify';
import { apiconnector } from './apiconnector';
import { categoryEndpoints } from '../api';
const {CREATE_CATEGORY, GET_ALL_CATEGORIES, GET_CATEGORY_BY_ID, } = categoryEndpoints


export const createCategory = async (categoryData) => {
    const toastId = toast.loading("Creating category...");
    try {
        const response = await apiconnector("POST", CREATE_CATEGORY, categoryData);
        if (response?.data?.success) {
            toast.success("Category created successfully");
            return response.data.category; 
        } else {
            throw new Error("Failed to create category");
        }
    } catch (error) {
        toast.error("Failed to create category");
        console.error("CREATE CATEGORY ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};

export const fetchCategoryById = async (id) => {
    const toastId = toast.loading("Loading category...");
    try {
        const response = await apiconnector("GET", GET_CATEGORY_BY_ID(id));
        if (response?.data?.success) {
            toast.success("Category fetched successfully");
            return response.data.category; 
        } else {
            throw new Error("Category not found");
        }
    } catch (error) {
        toast.error("Failed to fetch category");
        console.error("FETCH CATEGORY ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};


export const fetchAllCategories = async () => {
    const toastId = toast.loading("Loading categories...");
    try {
        const response = await apiconnector("GET", GET_ALL_CATEGORIES);
        if (response?.data?.success) {
            toast.success("Categories fetched successfully");
            return response.data.categories; 
        } else {
            throw new Error("Failed to fetch categories");
        }
    } catch (error) {
        toast.error("Failed to fetch categories");
        console.error("FETCH ALL CATEGORIES ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};


// export const updateCategoryById = async (id, categoryData) => {
//     const toastId = toast.loading("Updating category...");
//     try {
//         const response = await apiconnector("PUT", UPDATE_CATEGORY_BY_ID(id), categoryData);
//         if (response?.data?.success) {
//             toast.success("Category updated successfully");
//             return response.data.category; 
//         } else {
//             throw new Error("Failed to update category");
//         }
//     } catch (error) {
//         toast.error("Failed to update category");
//         console.error("UPDATE CATEGORY ERROR:", error);
//         return null;
//     } finally {
//         toast.dismiss(toastId);
//     }
// };

// export const deleteCategoryById = async (id) => {
//     const toastId = toast.loading("Deleting category...");
//     try {
//         const response = await apiconnector("DELETE", DELETE_CATEGORY_BY_ID(id));
//         if (response?.data?.success) {
//             toast.success("Category deleted successfully");
//             return response.data; 
//         } else {
//             throw new Error("Failed to delete category");
//         }
//     } catch (error) {
//         toast.error("Failed to delete category");
//         console.error("DELETE CATEGORY ERROR:", error);
//         return null;
//     } finally {
//         toast.dismiss(toastId);
//     }
// };
