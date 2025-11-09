export default function Footer(){
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-gray-700">
          <div>
            <div className="text-2xl font-bold text-gray-900">consultancy.co</div>
            <p className="mt-3 text-sm text-gray-600">Connecting companies with verified experts for faster, smarter outcomes.</p>
            <div className="mt-4 flex items-center gap-3 text-gray-500">
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg border hover:bg-gray-50 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.177 0-.355-.012-.53A8.343 8.343 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743A11.65 11.65 0 0 1 3.179 4.9a4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 3.2 9.86v.052a4.105 4.105 0 0 0 3.293 4.024 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407 11.616 11.616 0 0 0 8.29 20"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg border hover:bg-gray-50 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.863-3.059-1.864 0-2.149 1.454-2.149 2.957v5.706h-3v-10h2.881v1.367h.041c.402-.761 1.383-1.562 2.848-1.562 3.044 0 3.607 2.004 3.607 4.611v5.584z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Company</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/about" className="hover:text-blue-700 transition">About</a></li>
              <li><a href="/contact" className="hover:text-blue-700 transition">Contact</a></li>
              <li><a href="/consultants" className="hover:text-blue-700 transition">Browse Consultants</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Resources</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-700 transition">How it works</a></li>
              <li><a href="#" className="hover:text-blue-700 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-700 transition">FAQs</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Stay in the loop</div>
            <p className="mt-3 text-sm text-gray-600">Get updates about new categories and featured experts.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <button type="button" className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} consultancy.co</div>
          <div className="mt-3 md:mt-0 space-x-4">
            <a href="#" className="hover:text-blue-700 transition">Terms</a>
            <a href="#" className="hover:text-blue-700 transition">Privacy</a>
            <a href="#" className="hover:text-blue-700 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
