/**
 * Contact API Route
 * 
 * Handles contact form submissions.
 * - Validates input data
 * - Optionally sends email notifications (SendGrid/EmailJS)
 * - Optionally stores in database (Firebase/MongoDB)
 */

// ============================================
// IMPORTS - Uncomment when services are configured
// ============================================
// import sgMail from '@sendgrid/mail';
// import { MongoClient } from 'mongodb';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

/**
 * Handler for POST /api/contact
 */
export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed'
        });
    }

    try {
        const { name, email, phone, service, message } = req.body;

        // ============================================
        // VALIDATION
        // ============================================
        if (!name || !email || !phone || !service || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
                errors: {
                    name: !name ? 'Name is required' : null,
                    email: !email ? 'Email is required' : null,
                    phone: !phone ? 'Phone is required' : null,
                    service: !service ? 'Service is required' : null,
                    message: !message ? 'Message is required' : null,
                },
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format',
            });
        }

        // ============================================
        // PROCESS SUBMISSION
        // ============================================
        const submission = {
            name,
            email,
            phone,
            service,
            message,
            createdAt: new Date().toISOString(),
            status: 'new',
        };

        // Log submission for development
        console.log('Contact Form Submission:', submission);

        // ============================================
        // SENDGRID EMAIL (Uncomment and configure)
        // ============================================
        /*
        if (process.env.SENDGRID_API_KEY) {
          sgMail.setApiKey(process.env.SENDGRID_API_KEY);
          
          // Email to admin
          await sgMail.send({
            to: process.env.CONTACT_EMAIL || 'contact@raghwacleaning.com',
            from: process.env.SENDGRID_FROM_EMAIL || 'noreply@raghwacleaning.com',
            subject: `New Contact Form: ${service}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          });
    
          // Confirmation email to customer
          await sgMail.send({
            to: email,
            from: process.env.SENDGRID_FROM_EMAIL || 'noreply@raghwacleaning.com',
            subject: 'Thank you for contacting Raghwa Cleaning',
            html: `
              <h2>Thank you for reaching out, ${name}!</h2>
              <p>We have received your inquiry about our ${service} service.</p>
              <p>Our team will get back to you within 24 hours.</p>
              <br>
              <p>Best regards,<br>Raghwa Cleaning Team</p>
            `,
          });
        }
        */

        // ============================================
        // MONGODB STORAGE (Uncomment and configure)
        // ============================================
        /*
        if (process.env.MONGODB_URI) {
          const client = new MongoClient(process.env.MONGODB_URI);
          await client.connect();
          
          const db = client.db('raghwa-cleaning');
          await db.collection('contacts').insertOne(submission);
          
          await client.close();
        }
        */

        // ============================================
        // FIREBASE STORAGE (Uncomment and configure)
        // ============================================
        /*
        if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
          const firebaseConfig = {
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
            authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
          };
          
          const app = initializeApp(firebaseConfig);
          const db = getFirestore(app);
          
          await addDoc(collection(db, 'contacts'), submission);
        }
        */

        // ============================================
        // SUCCESS RESPONSE
        // ============================================
        return res.status(200).json({
            success: true,
            message: 'Thank you for your message! We will contact you shortly.',
            data: {
                id: Date.now().toString(), // Placeholder ID
                submittedAt: submission.createdAt,
            },
        });

    } catch (error) {
        console.error('Contact form error:', error);

        return res.status(500).json({
            success: false,
            message: 'An error occurred while processing your request. Please try again.',
        });
    }
}
