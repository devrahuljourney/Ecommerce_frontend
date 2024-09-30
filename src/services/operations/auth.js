

import { toast } from 'react-toastify';
import { apiconnector } from './apiconnector';
import { authEndpoints } from '../api';

const {LOGIN_API, SIGNUP_API} = authEndpoints;


export const loginUser = async (loginData) => {
    const toastId = toast.loading("Logging in...");
    try {
        const response = await apiconnector("POST", LOGIN_API, loginData);
        if (response?.data?.success) {
            toast.success("Logged in successfully");
            return response.data;
        } else {
            throw new Error("Login failed");
        }
    } catch (error) {
        toast.error("Failed to log in");
        console.error("LOGIN ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};


export const signupUser = async (signupData) => {
    const toastId = toast.loading("Signing up...");
    try {
        const response = await apiconnector("POST", SIGNUP_API, signupData);
        if (response?.data?.success) {
            toast.success("Signed up successfully");
            return response.data;
        } else {
            throw new Error("Signup failed");
        }
    } catch (error) {
        toast.error("Failed to sign up");
        console.error("SIGNUP ERROR:", error);
        return null;
    } finally {
        toast.dismiss(toastId);
    }
};
