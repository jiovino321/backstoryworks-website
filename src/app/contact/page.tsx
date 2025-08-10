'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const form = e.currentTarget;
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        // Show success message and redirect
        alert('Thank you for your message! We\'ll be in touch soon.');
        router.push('/');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitError('There was a problem sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h1>
          <p className="text-lg text-gray-600">
            Ready to tell your story? Let's start the conversation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:joe@backstoryworks.com" className="hover:text-orange-600 transition-colors">
                    joe@backstoryworks.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            
            <form 
              action="https://formspree.io/f/xyzpldqp" 
              method="POST"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              {submitError && (
                <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                  {submitError}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="_replyto"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                ></textarea>
              </div>
              
              {/* Anti-spam honeypot field */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:bg-orange-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}