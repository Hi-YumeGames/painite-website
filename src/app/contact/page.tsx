'use client';

import React, { useState } from 'react';
import { Send, Mail, MessageSquare, User } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: 'IBMRegular' }}
    >
      <h1 
        className="text-4xl text-center text-white sm:text-6xl my-12"
        style={{ fontFamily: 'IBMLight' }}
      >
        Get in <span className="bg-gradient-to-r from-[#CAE6A2] from-[3%] to-[#FFFDCF] to-[70%] bg-clip-text text-transparent">Touch</span>
      </h1>
      {/* Contact Form */}
      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border border-border/50">
        

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label 
              htmlFor="name" 
              className="flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <User className="w-4 h-4 text-[var(--card-1c)]" />
              Name
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="your name"
                className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[var(--card-1c)]/50 focus:border-[var(--card-1c)] transition-all duration-200 backdrop-blur-sm"
                style={{ fontFamily: 'IBMThin' }}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <Mail className="w-4 h-4 text-[var(--card-1c)]" />
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[var(--card-1c)]/50 focus:border-[var(--card-1c)] transition-all duration-200 backdrop-blur-sm"
                style={{ fontFamily: 'IBMThin' }}
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label 
              htmlFor="message" 
              className="flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <MessageSquare className="w-4 h-4 text-[var(--card-1c)]" />
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="want to create?, partner?, hire?, or just say hello..."
                className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[var(--card-1c)]/50 focus:border-[var(--card-1c)] transition-all duration-200 backdrop-blur-sm resize-none"
                style={{ fontFamily: 'IBMThin' }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center gap-4 rounded-lg px-3.5 py-4 text-sm text-center justify-center font-semibold text-black
            bg-gradient-to-r from-[#CAE6A2] from-[50%] to-[#FFFDCF] to-[100%] 
            hover:from-[0%] hover:to-[50%] 
            transform cursor-pointer transition-all duration-300 relative overflow-hidden group/btn
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          style={{ fontFamily: 'IBMRegular' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
            transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
          <div className="absolute -inset-1 bg-[#CAE6A2]/30 rounded-lg blur-sm -z-10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          <span className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Let's chat
                  </>
                  )}
              </span>
            </button>
          </div>
        </form>

        {/* Additional Info */}
        <div className="pt-6 border-t border-border/30">
          <div className="text-center text-sm text-foreground">
            <p className="mt-1">
              You can also reach out to me on{' '}
              <a 
                href="https://x.com/yazanmab77"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--card-1c)] hover:text-[var(--card-1d)] transition-colors duration-200 font-semibold"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
            </p>
          </div>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg">
            <p className="font-medium">Message sent! I'll get back to you soon.</p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mt-6 p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg">
            <p className="font-medium">Error: {errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;