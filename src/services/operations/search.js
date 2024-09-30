// src/api/searchApiCalls.js

import { toast } from 'react-toastify';
import { apiconnector } from './apiconnector';
import { searchEndpoints } from '../api';


export const searchByFilter = async (query) => {
    const toastId = toast.loading("Searching...");
    try {
        const response = await apiconnector("GET", searchEndpoints.SEARCH_BY_FILTER(query));
        if (response?.data?.success) {
            toast.success("Search completed successfully");
            return response.data.results; 
        } else {
            throw new Error("Search failed");
        }
    } catch (error) {
        toast.error("Failed to search");
        console.error("SEARCH ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};
