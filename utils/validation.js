/**
 * Validation Schemas
 * 
 * Yup validation schemas for forms throughout the application.
 */

import * as yup from 'yup';

// Phone regex for international format
const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;

/**
 * Contact Form Validation Schema
 * Validates name, email, phone, service, and message fields
 */
export const contactFormSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters'),

    email: yup
        .string()
        .required('Email is required')
        .email('Please enter a valid email address'),

    phone: yup
        .string()
        .required('Phone number is required')
        .matches(phoneRegex, 'Please enter a valid phone number'),

    service: yup
        .string()
        .required('Please select a service'),

    message: yup
        .string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message must be less than 1000 characters'),
});

/**
 * Newsletter Subscription Schema
 */
export const newsletterSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required')
        .email('Please enter a valid email address'),
});

/**
 * Booking Form Validation Schema
 * Extended schema for detailed booking requests
 */
export const bookingFormSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),

    email: yup
        .string()
        .required('Email is required')
        .email('Please enter a valid email address'),

    phone: yup
        .string()
        .required('Phone number is required')
        .matches(phoneRegex, 'Please enter a valid phone number'),

    service: yup
        .string()
        .required('Please select a service'),

    date: yup
        .date()
        .required('Please select a date')
        .min(new Date(), 'Date must be in the future'),

    time: yup
        .string()
        .required('Please select a time'),

    address: yup
        .string()
        .required('Address is required')
        .min(10, 'Please enter a complete address'),

    propertyType: yup
        .string()
        .required('Please select property type'),

    propertySize: yup
        .string()
        .required('Please select property size'),

    additionalNotes: yup
        .string()
        .max(500, 'Notes must be less than 500 characters'),
});

/**
 * Validate a single field
 * @param {string} schema - Schema name
 * @param {string} field - Field name
 * @param {any} value - Field value
 * @returns {Promise<{valid: boolean, error: string|null}>}
 */
export const validateField = async (schema, field, value) => {
    try {
        const schemas = {
            contact: contactFormSchema,
            newsletter: newsletterSchema,
            booking: bookingFormSchema,
        };

        await schemas[schema].validateAt(field, { [field]: value });
        return { valid: true, error: null };
    } catch (error) {
        return { valid: false, error: error.message };
    }
};
