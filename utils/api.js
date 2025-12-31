/**
 * API Utilities
 * 
 * Helper functions for making API requests and handling responses.
 */

// Base API URL (uses Next.js API routes by default)
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || '';

/**
 * Custom error class for API errors
 */
export class APIError extends Error {
    constructor(message, status, data = null) {
        super(message);
        this.name = 'APIError';
        this.status = status;
        this.data = data;
    }
}

/**
 * Make an API request
 * @param {string} endpoint - API endpoint (relative to BASE_URL)
 * @param {object} options - Fetch options
 * @returns {Promise<any>} - Response data
 */
export async function apiRequest(endpoint, options = {}) {
    const url = `${BASE_URL}${endpoint}`;

    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const config = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
            ...options.headers,
        },
    };

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw new APIError(
                data.message || 'An error occurred',
                response.status,
                data
            );
        }

        return data;
    } catch (error) {
        if (error instanceof APIError) {
            throw error;
        }
        throw new APIError(
            error.message || 'Network error',
            0,
            null
        );
    }
}

/**
 * Submit contact form
 * @param {object} formData - Form data object
 * @returns {Promise<object>} - API response
 */
export async function submitContactForm(formData) {
    return apiRequest('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
    });
}

/**
 * Subscribe to newsletter
 * @param {string} email - Email address
 * @returns {Promise<object>} - API response
 */
export async function subscribeNewsletter(email) {
    return apiRequest('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email }),
    });
}

/**
 * Get services data
 * @returns {Promise<object>} - Services data
 */
export async function getServices() {
    return apiRequest('/api/services', {
        method: 'GET',
    });
}

/**
 * Format API errors for display
 * @param {Error} error - Error object
 * @returns {string} - Formatted error message
 */
export function formatAPIError(error) {
    if (error instanceof APIError) {
        // Handle specific error codes
        switch (error.status) {
            case 400:
                return 'Invalid request. Please check your input.';
            case 401:
                return 'Unauthorized. Please log in again.';
            case 403:
                return 'Access denied.';
            case 404:
                return 'Resource not found.';
            case 429:
                return 'Too many requests. Please try again later.';
            case 500:
                return 'Server error. Please try again later.';
            default:
                return error.message;
        }
    }
    return 'An unexpected error occurred. Please try again.';
}

/**
 * Debounce function for API calls
 * @param {function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {function} - Debounced function
 */
export function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Retry failed API calls
 * @param {function} fn - Async function to retry
 * @param {number} retries - Number of retries
 * @param {number} delay - Delay between retries in ms
 * @returns {Promise<any>} - Result of the function
 */
export async function retryRequest(fn, retries = 3, delay = 1000) {
    try {
        return await fn();
    } catch (error) {
        if (retries === 0) throw error;
        await new Promise(resolve => setTimeout(resolve, delay));
        return retryRequest(fn, retries - 1, delay * 2);
    }
}
