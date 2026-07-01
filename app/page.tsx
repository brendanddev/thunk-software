import WaitlistModal from '../components/WaitlistModal';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Thunk" className="w-9 h-9" />
            <span className="font-semibold tracking-tight text-xl">Thunk</span>
          </div>
          <div className="flex items-center gap-8 text-sm">
            <a href="#features" className="hover:text-zinc-400 transition-colors">Features</a>
            <a href="#about" className="hover:text-zinc-400 transition-colors">About</a>
            <WaitlistModal />   {/* This renders the button + modal */}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-800 rounded-full text-sm mb-8">
          Local-first • Private • Yours
        </div>
        
        <h1 className="text-7xl font-semibold tracking-tighter mb-6">
          Your computer.<br />
          Your AI.
        </h1>
        
        <p className="max-w-xl mx-auto text-xl text-zinc-400 mb-10">
          A local-first personal assistant that runs entirely on your machine.<br />
          No cloud. No surveillance. Full control.
        </p>

        <div className="flex items-center justify-center gap-4">
          <WaitlistModal />   {/* Second trigger */}
          <button className="px-8 py-4 border border-zinc-700 rounded-2xl font-medium text-lg hover:bg-zinc-900 transition-all">
            Learn more
          </button>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-800">
        <h2 className="text-4xl font-semibold tracking-tight text-center mb-12">Built differently</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-zinc-800 rounded-3xl">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Runs Locally</h3>
            <p className="text-zinc-400">Everything stays on your hardware. No data leaves your machine unless you want it to.</p>
          </div>
          
          <div className="p-8 border border-zinc-800 rounded-3xl">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl mb-6" />
            <h3 className="text-2xl font-semibold mb-3">You Stay in Control</h3>
            <p className="text-zinc-400">Runtime-owned decisions. Every consequential action requires your explicit approval.</p>
          </div>
          
          <div className="p-8 border border-zinc-800 rounded-3xl">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Built for the Long Term</h3>
            <p className="text-zinc-400">Personal memory, rollback safety, and a philosophy centered on sovereignty.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} Thunk Software. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
