import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Hero(){
  const fullText = 'Connect Consultants & Companies';
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 45);
    return () => clearInterval(id);
  }, []);
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-200 opacity-40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-200 opacity-40 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center animate-fade-in-up relative">
        <h1
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600"
          aria-label={fullText}
        >
          {typed}
          <span className={`inline-block w-[2px] h-7 md:h-8 align-middle bg-purple-600 ml-1 ${done ? 'opacity-0' : 'animate-pulse'}`} />
        </h1>
        <p className="mt-4 text-gray-600">Your trusted platform for expert consulting services and business growth</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
          <Link
            to="/consultant-register"
            className="inline-flex items-center justify-center border border-gray-300 bg-white text-gray-800 font-medium px-6 py-3 rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-blue-600 hover:-translate-y-0.5 active:translate-y-0 transform"
          >
            Become a Consultant
          </Link>
          <Link
            to="/consultants"
            className="inline-flex items-center justify-center bg-[#f4ede4] border border-gray-300 text-gray-900 font-medium px-6 py-3 rounded-lg shadow transition hover:bg-[#ede7dd] focus:outline-none focus:ring-2 focus:ring-purple-600 hover:-translate-y-0.5 active:translate-y-0 transform"
          >
            Find Consultants
          </Link>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-transparent text-white bg-gradient-to-r from-blue-700 to-purple-600 shadow transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-purple-600 hover:-translate-y-0.5 active:translate-y-0 transform"
          >
            Learn More
          </button>
        </div>

        <div className="mt-10 grid grid-cols-3 max-w-xl mx-auto text-sm text-gray-700">
          <div className="py-3 border rounded-l-xl bg-white/70 backdrop-blur">
            <div className="font-semibold text-gray-900">5k+</div>
            <div>Verified Experts</div>
          </div>
          <div className="py-3 border-t border-b bg-white/70 backdrop-blur">
            <div className="font-semibold text-gray-900">12k+</div>
            <div>Projects Matched</div>
          </div>
          <div className="py-3 border rounded-r-xl bg-white/70 backdrop-blur">
            <div className="font-semibold text-gray-900">4.9/5</div>
            <div>Avg. Rating</div>
          </div>
        </div>

        <button
          aria-label="Scroll to About"
          onClick={scrollToAbout}
          className="mt-8 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
        >
          <span className="h-5 w-5 rounded-full border border-gray-400 relative inline-flex items-center justify-center">
            <span className="h-2 w-0.5 bg-gray-500 rounded animate-bounce" />
          </span>
          Scroll
        </button>
      </div>
    </section>
  );
}
