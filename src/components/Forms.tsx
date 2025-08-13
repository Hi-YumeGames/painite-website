'use client';

import { useState } from 'react';

interface FormsProps {
  formId: string;
  entryField: string;
  placeholder?: string;
  submitText?: string;
  row?: boolean;
  className?: string;
}

export default function Forms({
  formId,
  entryField,
  placeholder = 'Your email',
  submitText = 'Subscribe',
  row = false,
  className = ''
}: FormsProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitting(false);
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <form 
        onSubmit={handleSubmit}
        className={`flex ${row ? 'flex-row items-center gap-2' : 'flex-col gap-4'} w-full`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={placeholder}
          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors ${row ? 'whitespace-nowrap' : 'w-full'}`}
        >
          {isSubmitting ? 'Sending...' : submitText}
        </button>
      </form>
    </div>
  );
}