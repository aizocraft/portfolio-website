// src/services/emailService.ts
import emailjs from '@emailjs/browser';

// EmailJS Configuration - Using Vite environment variables
const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATE_TO_ME: import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN || 'YOUR_TEMPLATE_ID',
  TEMPLATE_TO_SENDER: import.meta.env.VITE_EMAILJS_TEMPLATE_USER || 'YOUR_TEMPLATE_ID2'
};

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: any;
}

/**
 * Initialize EmailJS
 */
export const initEmailJS = (): void => {
  if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  } else {
    console.warn('EmailJS not configured. Using default public key may not work.');
  }
};

/**
 * Check if EmailJS is configured properly
 */
export const isEmailJSConfigured = (): boolean => {
  return !(
    EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY' ||
    EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
    EMAILJS_CONFIG.TEMPLATE_TO_ME === 'YOUR_TEMPLATE_ID' ||
    EMAILJS_CONFIG.TEMPLATE_TO_SENDER === 'YOUR_TEMPLATE_ID2'
  );
};

/**
 * Send email to you (admin notification)
 */
export const sendAdminEmail = async (data: ContactFormData): Promise<EmailResponse> => {
  try {
    const templateParams = {
      to_name: 'Isaac Kariuki',
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      reply_to: data.email,
      received_date: new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'medium'
      })
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_TO_ME,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Your message has been sent successfully!'
      };
    }
    
    throw new Error('Failed to send email');
  } catch (error) {
    console.error('Admin email error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
      error
    };
  }
};

/**
 * Send confirmation email to the sender
 */
export const sendConfirmationEmail = async (data: ContactFormData): Promise<EmailResponse> => {
  try {
    const templateParams = {
      to_name: data.name,
      to_email: data.email,
      subject: data.subject,
      message: data.message,
      reply_name: 'Isaac Kariuki',
      reply_email: 'kariukiisaac911@gmail.com',
      response_time: '24 hours',
      year: new Date().getFullYear()
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_TO_SENDER,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Confirmation email sent to your inbox'
      };
    }
    
    throw new Error('Failed to send confirmation');
  } catch (error) {
    console.error('Confirmation email error:', error);
    // Don't fail the main submission if confirmation fails
    return {
      success: true,
      message: 'Message sent, but confirmation email failed',
      error
    };
  }
};

/**
 * Send both emails (admin and confirmation)
 */
export const sendContactEmails = async (data: ContactFormData): Promise<EmailResponse> => {
  // Check if EmailJS is configured
  if (!isEmailJSConfigured()) {
    console.warn('EmailJS not configured properly. Please check your environment variables.');
    
    // For development, still return success with a warning
    if (import.meta.env.DEV) {
      console.log('Development mode: Simulating email send', data);
      return {
        success: true,
        message: 'Message sent successfully! (Demo mode - configure EmailJS for production)'
      };
    }
    
    return {
      success: false,
      message: 'Email service is not configured. Please contact the administrator directly at kariukiisaac911@gmail.com'
    };
  }

  try {
    initEmailJS();
    
    // Send both emails in parallel for better performance
    const [adminResult, confirmationResult] = await Promise.allSettled([
      sendAdminEmail(data),
      sendConfirmationEmail(data)
    ]);

    const adminSuccess = adminResult.status === 'fulfilled' && adminResult.value.success;
    const confirmationSuccess = confirmationResult.status === 'fulfilled' && confirmationResult.value.success;

    if (adminSuccess) {
      return {
        success: true,
        message: confirmationSuccess 
          ? "Message sent! Check your email for confirmation."
          : "Message sent successfully!"
      };
    }

    throw new Error('Failed to send main email');
  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      message: 'Unable to send message. Please try again later or contact directly via email.',
      error
    };
  }
};

/**
 * Validate form data before sending
 */
export const validateContactForm = (data: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!data.name.trim()) {
    errors.push('Name is required');
  } else if (data.name.length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!data.email.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!data.subject.trim()) {
    errors.push('Subject is required');
  } else if (data.subject.length < 3) {
    errors.push('Subject must be at least 3 characters');
  }

  if (!data.message.trim()) {
    errors.push('Message is required');
  } else if (data.message.length < 10) {
    errors.push('Message must be at least 10 characters');
  } else if (data.message.length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};