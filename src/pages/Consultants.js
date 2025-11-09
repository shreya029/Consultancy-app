import { useEffect, useMemo, useState } from 'react';

export default function Consultants(){
  const data = [
    {
      name: 'Aarav Mehta',
      role: 'Strategy Consultant',
      summary: '10+ years helping SMBs scale through market entry and pricing strategies.',
      tags: ['Growth', 'Pricing', 'Go-to-Market'],
      specialty: 'Strategy'
    },
    {
      name: 'Riya Sharma',
      role: 'Technology Consultant',
      summary: 'Cloud modernization and AI adoption for faster, reliable delivery.',
      tags: ['Cloud', 'AI/ML', 'DevOps'],
      specialty: 'Technology'
    },
    {
      name: 'Kabir Singh',
      role: 'Financial Advisory',
      summary: 'Budget planning, valuations, and fundraising support for startups.',
      tags: ['Valuation', 'Fundraising', 'FP&A'],
      specialty: 'Finance'
    }
  ];

  const [query, setQuery] = useState('');
  const [specialty, setSpecialty] = useState('All');
  const [sort, setSort] = useState('name');
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const list = useMemo(() => {
    let items = data.filter(c => {
      const q = query.trim().toLowerCase();
      const matchesQuery = q === '' || [c.name, c.role, c.summary, ...c.tags].join(' ').toLowerCase().includes(q);
      const matchesSpec = specialty === 'All' || c.specialty === specialty;
      return matchesQuery && matchesSpec;
    });
    if (sort === 'name') items.sort((a,b) => a.name.localeCompare(b.name));
    return items;
  }, [data, query, specialty, sort]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-4">Consultants</h2>
      <p className="text-gray-600 mb-8">Discover experienced professionals across strategy, technology, finance, and operations. Browse featured profiles below and reach out to book a consultation.</p>

      <div className="mb-8 flex flex-col md:flex-row md:items-center gap-3">
        <input
          type="text"
          placeholder="Search by name, skill, or industry"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <select
          value={specialty}
          onChange={(e)=> setSpecialty(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="All">All Specialties</option>
          <option value="Strategy">Strategy</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
          <option value="Operations">Operations</option>
        </select>
        <select
          value={sort}
          onChange={(e)=> setSort(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="name">Sort: Name (A–Z)</option>
        </select>
        <button onClick={()=>{ setQuery(''); setSpecialty('All'); setSort('name'); }} className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">Reset</button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((c, i) => (
          <div key={i} className="group border rounded-lg p-5 hover:shadow-lg transition bg-white hover:-translate-y-0.5 transform">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="text-sm text-gray-600">{c.role}</p>
              </div>
              <span className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded">Featured</span>
            </div>
            <p className="mt-3 text-gray-700 text-sm">{c.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map(t => (
                <button
                  key={t}
                  onClick={()=> setQuery(t)}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="mt-5 flex gap-2">
              <button
                onClick={() => { setSelected(c); setShowModal(true); }}
                className="flex-1 px-3 py-2 border rounded-lg hover:bg-gray-50"
              >
                View Profile
              </button>
              <button
                onClick={() => { setSelected(c); setShowModal(true); }}
                className="flex-1 px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
              >
                Book Call
              </button>
            </div>
          </div>
        ))}
      </div>
    
      <div className="mt-10 text-center">
        <p className="text-gray-700">Are you a consultant? <a href="/consultant-register" className="text-blue-700 hover:underline">Join the network</a>.</p>
      </div>

      {showModal && selected && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={() => setShowModal(false)}></div>
          <div className="absolute inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 top-24 md:w-[560px] bg-white rounded-lg shadow-lg border animate-fade-in-up">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{selected.name}</h3>
                  <p className="text-sm text-gray-600">{selected.role}</p>
                </div>
                <button
                  aria-label="Close"
                  className="p-2 rounded hover:bg-gray-100"
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
              </div>
              <p className="mt-4 text-gray-700">{selected.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.tags.map(t => (
                  <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{t}</span>
                ))}
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <button
                  onClick={() => { setToast('Profile shared to your email.'); setTimeout(()=> setToast(''), 2500); }}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Share Profile
                </button>
                <button
                  onClick={() => { setToast('Call request sent. We will contact you shortly.'); setTimeout(()=> setToast(''), 2500); setShowModal(false); }}
                  className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
                >
                  Request a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed right-4 bottom-6 z-50">
          <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg animate-fade-in">
            {toast}
          </div>
        </div>
      )}
    </div>
  );
}
