import { Link } from 'react-router-dom';

export default function Hero(){
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
          Connect Consultants & Companies
        </h1>
        <p className="mt-4 text-gray-600">Your trusted platform for expert consulting services and business growth</p>

        <div className="mt-8 flex justify-center gap-4">
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
      </div>
    </section>
  );
}
