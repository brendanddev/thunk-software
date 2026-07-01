'use client';

import { useState } from 'react';

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setEmail('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Supabase or form service later
    alert("Thanks! You've been added to the waitlist (demo).");
    closeModal();
  };

  return (
    <>
      {/* Trigger Button - we'll use this in navbar and hero */}
      <button 
        onClick={openModal}
        className="px-8 py-4 bg-white text-zinc-950 rounded-2xl font-medium text-lg hover:bg-zinc-200 transition-all"
      >
        Join the Waitlist
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-zinc-900 border border-zinc-700 rounded-3xl max-w-md w-full p-10 relative">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-3xl font-semibold mb-3 text-center">Join the Waitlist</h3>
            <p className="text-zinc-400 text-center mb-8">
              Be among the first to try Thunk.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com" 
                required
                className="w-full px-6 py-4 bg-zinc-950 border border-zinc-700 rounded-2xl focus:outline-none focus:border-white text-white placeholder:text-zinc-500"
              />
              <button 
                type="submit"
                className="w-full py-4 bg-white text-zinc-950 rounded-2xl font-medium hover:bg-zinc-200 transition-all"
              >
                Get Early Access
              </button>
            </form>

            <p className="text-xs text-zinc-500 text-center mt-6">
              We respect your inbox. No spam ever.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
